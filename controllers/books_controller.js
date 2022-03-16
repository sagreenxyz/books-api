const express = require('express');
const { rawListeners } = require('../models/books.js');
const books = express.Router();
const Book = require('../models/books.js');
const seedData = require('../seeds/books-seed.js');

// INDEX http://localhost:[PORT]/books/
books.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.status(200).json(foundBooks);
    })
    .catch(err => {
        res.status(err.statusCode || 404).send(`Error: ${err.statusCode} - ${err.status}`)
    });
});

books.get('/data/seed', (req, res) => {
    Book.deleteMany({}).then(() => {
        Book.insertMany(seedData)
            .then(createdBooks => {
                res.redirect('/books');
            });
    });
});

module.exports = books;