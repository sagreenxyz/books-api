const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({

});

const Book = mongoose.model('Books', bookSchema); // connect bookSchema to 'Books' collection as a model and store in variable, Book

module.exports = Book;