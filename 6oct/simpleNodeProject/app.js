const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fxRouter = require('./routes/fx')
const passingArgsRouter = require('./routes/passingArgs')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use adds a function to the middleware chain
//this stuff is executed on EVERY request IN ORDER
app.use(logger('dev'));
app.use(express.json());

//build a custom logger as middleware
//
app.use((req, res, next) => {
  console.log(`
  ${req.url} : METHOD IS -> ${req.method} on our shiny new app!
  `);
  next();
})
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//these end up being relative routes
//let's say I have '/bob in each route file
app.use('/passingArgs', passingArgsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fx', fxRouter)

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

//
// let foo = 'somethingThatTakesTime';
// console.log(${foo}); //this prints undefined
