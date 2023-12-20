// Require the dotenv module to load environment variables
require('dotenv').config();

// Require the modules needed for the app
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// Swagger utils
var swaggerDocs = require("./swagger")
const swaggerUi = require("swagger-ui-express")

var app = express()
// Require the router modules for each endpoint
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// Create an express app
const app = express();

// Use cors middleware to enable cross-origin resource sharing
app.use(cors());

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
// Set up the view engine and the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Use the middleware for logging, parsing, and serving static files
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the MongoDB database using the MONGO_URL environment variable
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the router modules for each endpoint
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: req.app.get('env') === 'development' ? err : {},
  });
});

// Start the server on the port specified by the PORT environment variable or 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app module
module.exports = app;
