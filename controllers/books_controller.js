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

// SHOW http://localhost:[PORT]/books/:id
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.json(foundBook);
        })
        .catch(err => {
            res.status(err.statusCode || 404).json({ error: `Error: ${err.statusCode} - ${err.status}` })
        });
});

// CREATE http://localhost:[PORT]/books/
books.post('/', (req, res) => {
    Book.create(req.body)
        .then((addedBook) => {
            res.status(303).json(addedBook);
        });
});

// UPDATE http://localhost:[PORT]/books/:id
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/books/${req.params.id}`);
        });
});

// DELETE http://localhost:[PORT]/books/:id
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(303).redirect('/books');
        })
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