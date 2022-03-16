const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number},
    quantity: { type: Number},
    imageURL: { type: String, default: 'https://via.placeholder.com/300x300' }
});

const Book = mongoose.model('Books', bookSchema); // connect bookSchema to 'Books' collection as a model and store in variable, Book

module.exports = Book;