// Import modules
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./route/productRoutes');
const userRoutes = require('./route/userRoutes');
const login = require('./login/login');

// Import URL
const url = require('./url');

// Create rest object
const app = express();

// Set JSON as MIME type
app.use(bodyparser.json());
// Client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }));
// Enable CORS -> Cross-Origin Resource Sharing -> communication among various ports
app.use(cors());

// Use routes
app.use('/login', login);
app.use('/', productRoutes);
app.use('/', userRoutes);

// Use login module


// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, dbName: url.dbName })
    .then(() => {
        console.log('Connection success');
    })
    .catch(err => {
        console.log('Failed:', err);
    });

// Create port
const port = 3000;
// Assign port number
app.listen(port, () => {
    console.log('Server listening on port:', port);
});
