var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: 'localhost',
    database: 'karma',
    user: 'root',
    password: 'Elonmusk@1'
});

module.exports = connection;