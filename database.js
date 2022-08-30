const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'rkj',
    password: 'kapusta21',
    database: 'IsaacAchivs'
});

