const express = require('express');
const app = express();
const newConnection = require('./DBConnection');
app.use(express.static('static'));

app.get('/users', (request, response) =>{
    let connection=newConnection();
    connection.connect()


            let username = request.query.username;
            let time1 = request.query.one;
            let time2 = request.query.two;
            let time3 = request.query.three;
            let time4 = request.query.four;
            let time5 = request.query.five;
            let time6 = request.query.six
            let time7 = request.query.seven
            let time8 = request.query.eight
            let time9 = request.query.nine
            let time10 = request.query.ten

            //returns on  if the timeslot is checkmarked
            //returns undefined if the checkbox is empty. 
            if(time1 == 'undefined'){
                time1 = 'undefined';
            } else {
                time1 = 'on';
            }

            if(time2 == 'undefined'){
                time2 = 'undefined';
            } else {
                time2 = 'on';
            }

            if(time3 == 'undefined'){
                time3 = 'undefinied';
            } else {
                time3 = 'on';
            }

            if(time4 == 'undefined'){
                time4 = 'undefined';
            } else {
                time4 = 'on';
            }

            if(time5 == 'undefined'){
                time5 = 'undefined';
            } else {
                time5 = 'on';
            }

            if(time6 == 'undefined'){
                time6 = 'undefined';
            } else {
                time6 = 'on';
            }

            if(time7 == 'undefined'){
                time7 = 'undefined';
            } else {
                time7 = 'on';
            }

            if(time8 == 'undefined'){
                time8 = 'undefined';
            } else {
                time8 = 'on';
            }

            if(time9 == 'undefined'){
                time9 = 'undefined';
            } else {
                time9 = 'on';
            }

            if(time10 == 'undefined'){
                time10 = 'undefined';
            } else {
                time10 = 'on';
            }
            connection.query(`insert into Availability values ('${username}','${time1}','${time2}','${time3}', '${time4}', '${time5}', '${time6}', '${time7}','${time8}', '${time9}', '${check10}')`
            ,(err,rows,fields) => {
                if(err)
                    console.log(err);
                else
                    console.log('ITWORKED')
            });
   connection.end();
});

app.get('/input', (request, response) =>{
    let connection = newConnection();
    connection.connect();
    connection.query(`INSERT INTO Users values('${request.query.username}', '${request.query.time1}', '${request.query.time2}', '${request.query.time3}', '${request.query.time4}', '${request.query.time5}', '${request.query.time6}', '${request.query.time7}', '${request.query.time8}', '${request.query.time9}', '${request.query.time10}')`, (err, rows, fields)=>{
        response.redirect('/');
    })
    connection.end();
});

//admin login
app.post('/login', (request, response) => {
    let username = request.body.username;
    let password = request.body.password;

    let message = '';

    if (username =='admin' && password =='admin'){
        message = 'Welcome';
        response.send(message);
    }

    response.send(message);
})

app.listen(80);
