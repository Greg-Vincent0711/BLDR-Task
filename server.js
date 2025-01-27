/**
 * @author Gregory Vincent Jr
 * Listing routes from server
*/

const express = require('express')
const app = express()
const { hasAnyEmptyProperty, 
        convertPriceRangeToNumeric, 
        updateInventory,
        isValidDuration,
        hasDurationOverlap
    } = require('./utility')
const bookInventory = require('./books')
// Middleware to parse JSON in request body
app.use(express.json());
const PORT = 8000

/**
 * @route POST /books
 * Book Listing
 * New Book data:
 * {
        Title: string,
        Description: string,
        Price: number,
    }
 */

app.post('/books', (req, res) => {
    const newBookData = req.body;
    if (hasAnyEmptyProperty(newBookData)) {
        return res.status(400).json({message: 'A newly listed book must have a title, description and price.'})
    }
    const newBook = {
        id: bookInventory.length + 1,
        Title: newBookData.Title,
        Description: newBookData.Description,
        isAvailable: false,
        Price: newBookData.Price,
        rentDuration: ""
    }
    bookInventory.push(newBook)
    updateInventory(bookInventory)
    // overwrite the JSON file with updated list
    return res.status(201).json({message: 'New book added successfully'})
})

/**
 * @route PUT /items
 * Mark as unavailable and set a rent duration. Check rent duration format and for overlaps.
 * rentDuration is in the format MM/DD/YY - MM/DD/YY
 * for ex: 01/25/25 - 01/27/25
*/
app.put('/books/:id/rent', (req, res) => {
    const { id } = req.params;
    const { newRentDuration } = req.body;
    const rentedBook = bookInventory.find(book => book.id == id)
    if (!rentedBook) {
        return res.status(404).json({message: 'Book not found. Check id given.'})
    }
    const {validDuration, invalidDurationErrorMessage} = isValidDuration(newRentDuration)
    if(validDuration){
        if(rentedBook.rentDuration != ""){
            const {overlap, durationOverlapErrorMessage } = hasDurationOverlap(newRentDuration, rentedBook.rentDuration)
            if(!overlap){
                rentedBook.rentDuration = `${rentedBook.rentDuration}, ${newRentDuration}`
                updateInventory(bookInventory)
                return res.status(200).json({message: `${rentedBook.Title} is now rented from ${rentedBook.rentDuration}.`})
            } else{
                return res.status(400).json({"Error renting your book: " : durationOverlapErrorMessage})
            }
        } else{
            rentedBook.isAvailable = false
            rentedBook.rentDuration = newRentDuration
            updateInventory(bookInventory)
            return res.status(200).json({message: `${rentedBook.Title} is now rented from ${rentedBook.rentDuration}.`})
        }
    } else {
        return res.status(400).json({"Error" : invalidDurationErrorMessage})
    }
})


/**
 * @route PUT /item return
 * Mark as available, set rent duration to null
*/
app.put('/books/:id/return', (req, res) => {
    const { id } = req.params;
    const returnedBook = bookInventory.find(item => item.id == id)
    if (!returnedBook) {
        return res.status(404).json({message: 'Item not found. Check id given.'})
    }
    returnedBook.isAvailable = true
    /**
     * in the case a book has two separate non-overlapping rental times, remove the first
     * since it has been returned.
     */
    const rentDurations = returnedBook.rentDuration.split(",")
    returnedBook.rentDuration = rentDurations.length == 2 ? rentDurations[1] : ""
    updateInventory(bookInventory)
    return res.status(200).json({message: `${returnedBook.Title} is now available for rent!`})
})


/**
 * @roure GET /items
 * Search for an item based on name or price range
 * priceRange is in the format "min-max".
 */
app.get("/books", (req, res) => {
    const {bookTitle, priceRange} = req.query;
    if(bookTitle){
        const requestedBookByTitle = bookInventory.find((item) => item.Title == bookTitle)
        if(!requestedBookByTitle){
            return res.status(400).json({"Message": `Could not find requested book: ${bookTitle}`})
        } else {
            return res.status(200).json(requestedBookByTitle)
        }
    } else if(priceRange){
        const range = convertPriceRangeToNumeric(priceRange)
        if (range.Error != null){
            return res.status(400).json({"Message": range.Error})
        }
        const requestedBooksByPrice = bookInventory.filter(book => range.Min <= book.Price && book.Price <= range.Max)
        if(!requestedBooksByPrice){
            return res.status(400).json({"Messsage" : `Could not find a book matching your criteria. Check your listed range and title for errors.`})
        } else {
            return res.status(200).json(requestedBooksByPrice)
        }
    } else{
        // treat a paramter-less get as a scan operation
        return res.status(200).json(bookInventory)
    }
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})