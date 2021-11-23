const express = require('express');

const app = express();

const newConnection = require('./DBConnection');

app.use(express.static('static'));

app.get('/users', (request, response) =>{
    let connection=newConnection();
    let userList;
    connection.connect()

    connection.query('SELECT * FROM Users', (err, rows, fields)=>{
        let content ='';
        userList = rows;

            let time1;
            let time2;
            let time3;
            let time4;
            let time5;
            let time6;
            let time7;
            let time8;
            let time9;
            let time10;


            for (i of userList) {
            if(i.time1 == 'undefined'){
                time1 = 'undefined';
            } else {
                time1 = 'on';
            }

            if(i.time2 == 'undefined'){
                time2 = 'undefined';
            } else {
                time2 = 'on';
            }

            if(i.time3 == 'undefined'){
                time3 = 'undefinied';
            } else {
                time3 = 'on';
            }

            if(i.time4 == 'undefined'){
                time4 = 'undefined';
            } else {
                time4 = 'on';
            }

            if(i.time5 == 'undefined'){
                time5 = 'undefined';
            } else {
                time5 = 'on';
            }

            if(i.time6 == 'undefined'){
                time6 = 'undefined';
            } else {
                time6 = 'on';
            }

            if(i.time7 == 'undefined'){
                time7 = 'undefined';
            } else {
                time7 = 'on';
            }

            if(i.time8 == 'undefined'){
                time8 = 'undefined';
            } else {
                time8 = 'on';
            }

            if(i.time9 == 'undefined'){
                time9 = 'undefined';
            } else {
                time9 = 'on';
            }

            if(i.time10 == 'undefined'){
                time10 = 'undefined';
            } else {
                time10 = 'on';
            }

            content += '<div>';
            content += 'NAME : (' + username + '), TIME SLOT AVAILABILITY : (' + time1 + ' | ' + time2 + ' | ' + time3 + ' | ' + time4 + ' | ' + time5 + ' | ' + time6 + ' | ' + time7 + ' | ' + time8 + ' | ' + time9 + ' | ' + time10 + ')';
            content += '</div>';
        }
        response.send(content);
    })
    connection.end();


app.get('/input', (request, response) =>{
    let connection = newConnection();
    connection.connect();
    connection.query(`INSERT INTO Users values('${req.query.username}', '${req.query.time1}', '${req.query.time2}', '${req.query.time3}', '${req.query.time4}', '${req.query.time5}', '${req.query.time6}', '${req.query.time7}', '${req.query.time8}', '${req.query.time9}', '${req.query.time10}')`, (err, rows, fields)=>{
        response.redirect('/');
    })

})

connection.end
})

app.post('/login', (request, response) => {
    let username = request.body.usr;
    let password = request.body.pwd;

    let message = '';

    if (username =='admin' && password =='admin'){
        message = 'Welcome';
        response.send(message);
    }

    response.send(message);
})

app.listen(4000);