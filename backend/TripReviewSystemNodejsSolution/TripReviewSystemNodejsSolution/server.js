var sqllite3 = require('sqlite3').verbose();
var express = require('express');
var app = express();


// Attempting to create the database object
var db = sqllite3.Database(':memory:', undefined, function (err, status) {

    if (err) {
        console.log('----------------Error create database object---------------\n');
        return console.error(err.stack);
    }

    console.log('Database object created successfully');
    console.log('Log: ' + status);
});




