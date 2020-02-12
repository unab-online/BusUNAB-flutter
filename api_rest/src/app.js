const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');
const morgan = require('morgan');
require('dotenv').config();

//settings
app.set('port', process.env.PORT || 3000);
app.set('DB', process.env.DB || 'mongodb://localhost/BusUnab');
// app.use(express.static(path.join(__dirname, 'public')));
//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});
//routes
app.use('/', routes);

module.exports = app;