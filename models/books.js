const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: { type: String },
    description: { type: String },
    year: { type: Number},
    quantity: { type: Number},
    imageURL: { type: String }
});

const Book = mongoose.model('Books', bookSchema); // connect bookSchema to 'Books' collection as a model and store in variable, Book

module.exports = Book;