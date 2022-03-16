// DEPENDENCIES
const express = require('express');

//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();

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
