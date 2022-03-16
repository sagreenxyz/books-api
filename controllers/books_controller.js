const express = require('express');
const books = express.Router();
const Book = require('../models/books.js');

// INDEX http://localhost:[PORT]/books/
books.get('/', (req, res) => {
    res.status(200).send(`books-api books controller for route  http://localhost:[PORT]/books/`);
});

module.exports = books;