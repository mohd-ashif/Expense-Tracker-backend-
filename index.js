const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')


const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// Default route
app.get('/', (req, res) => {
    res.send('Server running');
});

// Database connection
db();
 
// Start the server
app.listen(port, () => { 
    console.log(`Server is running at http://localhost:${port}`);
});
