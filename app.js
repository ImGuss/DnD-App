const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const flash        = require('connect-flash');

const User         = require('./models/user-model');
const Character    = require('./models/character-model');


// load env variables
require('dotenv').config();

// run passport strategies
require('./config/passport-config');

// connect mongoose
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(layouts);

app.use( session( {
  // this secret needs to be different every time. it could be anything
  secret: 'this is the dnd app boiiiii',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// This middleware sets the user variable for all views if logged in so you don't need to add it to the render.
app.use((req, res, next) => {
  if (req.user) {
    res.locals.user = req.user;
  }
  next();
});

app.use(flash());


// BEGIN ROUTES
// -----------------------------------------------
const index = require('./routes/index');
app.use(index);

const authoRoutes = require('./routes/autho-routes');
app.use(authoRoutes);

const characterRoute = require('./routes/character-routes');
app.use(characterRoute);

const userRoutes = require('./routes/user-routes');
app.use(userRoutes);

const pdfRoutes = require('./routes/pdf-routes');
app.use(pdfRoutes);
// -----------------------------------------------
// END ROUTES

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
