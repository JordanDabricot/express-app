const express = require('express')
const app = express()
require('dotenv').config()
var mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors');

//cors
app.use(cors());
//bodyParser
app.use(bodyParser.json());

//mysql connection
app.use(function(req, res, next){
    var conPool  = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
    });
    conPool.getConnection(function(err, connection) {
        res.locals.connection = connection;
        next();
    });
});

var index = require('./src/Route/Index');
index(app)
var users = require('./src/Route/UserRoutes');
users(app)
var articles = require('./src/Route/ArticleRoutes')
articles(app)

app.listen(process.env.SERV_PORT, function () {
    console.log('Listening on port 3000')
})
