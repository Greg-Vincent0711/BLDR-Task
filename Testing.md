Install all the dependencies needed - namely express.

Add a New Book (POST /books)

curl -X POST http://localhost:8000/books \
-H "Content-Type: application/json" \
-d '{
    "Title": "Contact",
    "Description": "A sci-fi Novel by Carl Sagan",
    "Price": 11.50
}'

Response should be: { "message": "New book added successfully" }


curl -X POST http://localhost:8000/books \
-H "Content-Type: application/json" \
-d '{
    "Title": "The Power of Habit",
    "Description": "",
    "Price": 11.50
}'
Response should be: { "message": "A newly listed book must have a title, description and price." }

curl -X PUT http://localhost:8000/books/15/rent \
-H "Content-Type: application/json" \
-d '{
    "newRentDuration": "01/25/25 - 01/27/25"
}'
Response should be: { "message": "The Gene: An Intimate History is now rented from 01/25/25 - 01/27/25." }


curl -X PUT http://localhost:8000/books/15/rent
// Overlapping duration
-d '{
    "newRentDuration": "01/25/25 - 01/26/25"
}'
Response should be: { "Error renting your book: ": "Durations overlap." }


//Adding a second duration(non-overlapping)
curl -X PUT http://localhost:8000/books/15/rent
-d '{
  "newRentDuration": "01/27/25 - 01/29/25"
}
Response should be: { "message": "The Gene: An Intimate History is now rented from 01/25/25 - 01/26/25, 01/27/25 - 01/29/25."}

curl -X PUT http://localhost:8000/book/15/return
Response should be: { "message ": "The Gene: An Intimate History is now available for rent!" }
If you check the rentDuration of ID:15, it should say: "rentDuration": "01/27/25 - 01/29/25".
This refers to the next latest rent duration. Another spot is now available for renting.

curl -X GET "http://localhost:8000/books?bookTitle=Dune"

Response should be:
{
    "id": 21,
    "Title": "Dune",
    "Description": "Frank Herbert's epic science fiction novel about power, politics, and ecology on the desert planet Arrakis.",
    "isAvailable": true,
    "Price": 18,
    "rentDuration": ""
}


curl -X GET "http://localhost:8000/books?priceRange=25-100"
Response should be(feel free to play around with different ranges):

{
        "id": 20,
        "Title": "The Feynman Lectures on Physics",
        "Description": "Richard Feynman's renowned physics lectures in book form.",
        "isAvailable": true,
        "Price": 25,
        "rentDuration": ""
},
{
        "id": 28,
        "Title": "Star Wars",
        "Description": "Star Wars.",
        "isAvailable": false,
        "Price": 50,
        "rentDuration": ""
}

curl -X GET "http://localhost:8000/books?priceRange=100-10"
Response should be: { "Message": "Invalid range." }


curl -X PUT http://localhost:8000/books/999/rent \
-H "Content-Type: application/json" \
-d '{
    "newRentDuration": "01/25/25 - 01/27/25"
}'
Response should be: { "message": "Book not found. Check id given." }

curl -X PUT http://localhost:8000/books/999/return
Response should be: { "message": "Item not found. Check id given." }



