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

// LISTEN
app.listen(PORT, () => {
    console.log(`books-api server running at http://localhost:${PORT}`);
});
