const mongoose = require('mongoose');
const TrackerSchema = new mongoose.Schema({
    //mongoose.Schema() is a method that takes an object as its parameter to structure each document
    expenseLocation: {
        type: String,
        required: [true, "required to put in location of expense"],
        minLength: [2, "Location must be at least 2 characters"]
    },
    expenseType: {
        type: String,
        required: [true, "Expense type must be indicated"],
    },
    price: {
        type: Number,
        required: [true, "Price of expense is required"]
    },
    additionalNotes: {
        type: String,
        required: false,
        minLength: [3, "any additional notes but be at least 3 characters"]
    }
})

const Expense = mongoose.model('Expense', TrackerSchema)
//mongoose.model() is a method who's job is to take the blueprint object and then create the 
//database collection out of the model :) 
module.exports = Expense