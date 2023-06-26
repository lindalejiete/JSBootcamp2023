import pool from './db.js'

pool.getConnection((err, connection) => {
    if (err) {
        console.error('There is an error with establishing your DB:', err);
        return;
    }

    const createTableQuery = `
    CREATE TABLE IF NOT EXIST users {
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
    }
    `;

    connection.query(createTableQuery, (err, response) => {
        if (err) {
            console.error('There is an error with creating your DB:', err);
            return;
        }

        console.log('YOUR TABLE HAS BEEN SUCCESSFULLY CREATED: ', response)
    })
})