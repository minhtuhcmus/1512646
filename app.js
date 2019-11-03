var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var express = require('express');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://minhtu:minhtu123@ds161790.mlab.com:61790/api', {
  useNewUrlParser: true
}).then(()=>{
  console.log('Successfully connected to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
const passport = require('passport');
require('./passport');

var usersRouter = require('./routes/users');
var meRouter = require('./routes/me');
var app = express();

// view engine setup

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build/')));
app.get('/*', (req, res) => {
  console.log('browser req', req.cookies);
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.use('/api/users', usersRouter);
app.use('/api/me', passport.authenticate('jwt',{session:false}), meRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
