var express, app, bodyParser, server, mongoose, session, flash, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public/dist/public'))

require('./server/config/mongoose')

mongoose = require('mongoose')
mongoose.promise = global.Promise

var Task = mongoose.model('Task')

require('./server/config/routes')(app)
server = app.listen(1337)