const fs = require('fs');
const path = require('path');

function hasAnyEmptyProperty(newBook) {
    return Object.values(newBook).some(newBookProperty => newBookProperty === null || newBookProperty === undefined || newBookProperty === '');
}


function convertPriceRangeToNumeric(priceRange){
    const priceRangeFormat = new RegExp('^\\d+-\\d+$');
    if(!priceRangeFormat.test(priceRange)){
        return {
            "Error" : "Price Range is in an invalid format."
        }
    } else{
        // splits on '-' character
        const range = priceRange.split(/\s*-\s*/)
        const min = Number(range[0])
        const max = Number(range[1])
        if (max <= min || max <= 0 || min <= 0){
            return {
                "Error" : "Invalid range."
            }
        } else{
            return {
                "Min": min,
                "Max": max
            }
        }
    }
}



function updateInvetory(updatedBookList){
    // Path to the file
    const filePath = path.join('books.js');
    // Write updated books back to the file
    fs.writeFileSync(filePath, `const books = ${JSON.stringify(updatedBookList, null, 2)};\n\nmodule.exports = books;`, 'utf-8');
}

module.exports = {hasAnyEmptyProperty, convertPriceRangeToNumeric, updateInvetory}