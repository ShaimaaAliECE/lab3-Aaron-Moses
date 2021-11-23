const mysql = require('mysql');

    let connection = mysql.createConnection({
        host: '35.202.174.74',
        user: 'root',
        password: 'root',
        database: 'UsersLab3'
    });

    connection.connect();

    connection.query('DROP TABLE Users', 
    (err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('Table Dropped');
    })

    connection.query('CREATE TABLE Users(username varchar(1000), time1 varchar(1000), time2 varchar(1000), time3 varchar(1000), time4 varchar(100), time5 varchar(100), time6 varchar(100), time7 varchar(100), time8 varchar(100), time9 varchar(100), time10 varchar(100))',
    (err,rows,fields) => {
        if (err)
            console.log(err);
        else
            console.log('Table Created');
    })


connection.end();