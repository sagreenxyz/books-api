// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to MongoDB at: ', process.env.MONGO_URI);
    }
);

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('books-api GET /');
});

// Require and Use Books Controller
const bookController = require('./controllers/books_controller.js');
app.use('/books', bookController); // Handle all routes starting with http://localhost:3003/books using books controller

// LISTEN
app.listen(PORT, () => {
    console.log(`books-api server running at http://localhost:${PORT}`);
});
