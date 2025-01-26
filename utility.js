/**
 * @author Gregory Vincent Jr
 * Common utility functions 
 */
const fs = require('fs');
const path = require('path');

function hasAnyEmptyProperty(newBook) {
    return Object.values(newBook).some(newBookProperty => {newBookProperty === null ||
         newBookProperty === undefined || newBookProperty === ''});
}


function convertPriceRangeToNumeric(priceRange){
    const priceRangeFormat = new RegExp('^\\d+-\\d+$');
    if(!priceRangeFormat.test(priceRange)){
        return {
            "Error" : "Price Range is in an invalid format."
        }
    } else{
        // split on '-' character
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


/**
 * "Updates" the backend by overwriting the JSON file with the latest data
 */

function updateInvetory(updatedInventoryList){
    // Path to the file
    const filePath = path.join('books.js');
    // Write updated books back to the file
    fs.writeFileSync(filePath, `const books = ${JSON.stringify(updatedInventoryList, null, 2)};\n\nmodule.exports = books;`, 'utf-8');
}



const parseDuration = (duration) => {
    const [start, end] = duration.split(/\s?-\s?/);
    return {
        // Convert given date to ISO format for JS Date constructor reliability
        startDate: new Date(`20${start.slice(6)}-${start.slice(0, 2)}-${start.slice(3, 5)}`),
        endDate: new Date(`20${end.slice(6)}-${end.slice(0, 2)}-${end.slice(3, 5)}`),
    };
};

const hasDurationOverlap = (firstDuration, secondDuration) => {
    const { startDate: startDateOne, endDate: endDateOne } = parseDuration(firstDuration);
    const { startDate: startDateTwo, endDate: endDateTwo } = parseDuration(secondDuration);
    /**
     * Check if first range ends before second starts
     * Check if second range ends before first one starts
     */
    if (endDateOne < startDateTwo || endDateTwo < startDateOne) {
        return { overlap: false, message: "No overlap." };
    } 
    return { overlap: true, message: "Durations overlap." };
};


const isValidDuration = (rentDuration) => {
    /**
     * rentDuration format chosen arbitrarily, I felt it was the most readable.
     */
    const durationFormat = /^\d{2}\/\d{2}\/\d{2}\s?-\s?\d{2}\/\d{2}\/\d{2}$/;

    if (!durationFormat.test(rentDuration)) {
        return { valid: false, message: "Format must be MM/DD/YY - MM/DD/YY." };
    }

    const { startDate, endDate } = parseDuration(rentDuration)
    if (isNaN(startDate) || isNaN(endDate)) {
        return { durationIsValid: false, message: "Invalid date values." };
    }

    if (startDate > endDate) {
        return { durationIsValid: false, message: "Start date cannot be later than end date." };
    }

    return { durationIsValid: true, message: "Valid duration." };
};

isValidDuration("01/25/22 - 01/24/29")

module.exports = {
    hasAnyEmptyProperty, 
    convertPriceRangeToNumeric, 
    updateInvetory, 
    isValidDuration,
    hasDurationOverlap
}