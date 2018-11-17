const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const routes = require('./middleware/routes');
const db_initializer = require('./db_initialiser');
const body_parser = require('body-parser');
const fs = require('fs');
const port = 80;

// Setting up the middleware
app.use(routes);

// Setting the template engine as jade for later use.
app.set('view engine', 'jade');

// Using body-parser middleware as application/json
app.use(body_parser.json());

console.log('Checking if db folder exists');
if (!fs.existsSync('./db')) {
    console.log('Creating db folder in main directory');
    fs.mkdirSync('./db');
}

// Attempting to create the database object. Creates the .db file if it does not exist
var db = new sqlite3.Database('./db/TripReview.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, function (err, status) {
    if (err) {
        console.log('\nError creating database object\n');
        return console.error(err.stack);
    }
    console.log('Database object created successfully');
    console.log('Log: ' + status);
});

// Initialising the database with the tables and checking for their existance
db_initializer.initialise(db);

db.close((err) => {
    if (err) {
        console.log('Error closing database object\n');
        return console.error(err.stack);
    }
    console.log('Database object closed successfully');
});

app.listen(port, () => console.log(`Example app listening on port ` + port + `!`))


