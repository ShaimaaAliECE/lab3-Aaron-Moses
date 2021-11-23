const mysql = require('mysql');

function newConnection(){

    let connection = mysql.createConnection({
        host: '35.202.174.74',
        user: 'root',
        password: 'root',
        database: 'Userslab3'
    });
    return connection;
}
module.exports = newConnection;