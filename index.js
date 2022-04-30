var express = require("express");
var app = express();
var connection = require('./database');

app.get('/', function(req, res) {
    let sql = "SELECT * FROM users ";
    
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});



app.get('/image', function(req, res) {
    let sqldb = "SELECT * FROM images";
    
    connection.query(sqldb, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});




app.get('/api/v1/user/1/karma-position', function(req, res) {
    let sqldbs = "SELECT * FROM karmaposition";
    
    connection.query(sqldbs, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});


app.get('/api/v1/user/1/karma-position/8', function(req, res) {
    let sqldbss = "SELECT * FROM karmaposition where id = 8";
    
    connection.query(sqldbss, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});



app.get('/api/v1/user/1/karma-position/1', function(req, res) {
    let sqldbsss = "SELECT * FROM karmaposition where id = 1";
    
    connection.query(sqldbsss, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});



app.get('/api/v1/user/1/karma-position/4', function(req, res) {
    let sqldbsssb = "SELECT * FROM karmaposition where id = 4";
    
    connection.query(sqldbsssb, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});


app.get('/api/v1/user/1/karma-position/7', function(req, res) {
    let sqldbsssbc = "SELECT * FROM karmaposition where id = 7";
    
    connection.query(sqldbsssbc, function(err, results){
        if (err) throw err;
        res.send(results);
    });
    
});
















app.listen(3000, function(){
    console.log('App Listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});