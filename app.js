const express = require('express');
const {sequelize} = require('./model/db')
var path = require('path');

var indexRouter = require('./routes/index')
var taskRouter = require('./routes/task')
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
sequelize.sync()

app.use('/api', indexRouter)
app.use('/api/task', taskRouter)

module.exports = app;
