// This module is used to check if the required tables exist, and if not, creates them.

exports.initialise = function (db) {

    // Check and create USER table.

    query = `
            CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY,
                name VARCHAR(20),
                email VARCHAR(20),
                age NUMBER(3),
                join_date DATE,
                password_hash VARCHAR(64)
            )
            `;
    db.run(query);

    // Check and create Destination table.

    query = `
            CREATE TABLE IF NOT EXISTS destination(
                id INTEGER PRIMARY KEY,
                name VARCHAR(20),
                email VARCHAR(20),
                age NUMBER(3),
                join_date DATE,
                password_hash VARCHAR(64)
            )
            `;
    db.run(query);
}