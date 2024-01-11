require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const passport = require('passport');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");
const { about_json } = require('./controllers/dataInfo');
const { createSuperAdmin } = require('./BackOffice/BackOfAuth')

// Importez votre modèle User
const User = require("./models/userModel");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var spotifyRouter = require("./routes/spotify");
var backRouter = require("./routes/backof");

var app = express();

app.use(cors());
app.use(express.json());

// Swagger utils
var swaggerDocs = require("./swagger")
const swaggerUi = require("swagger-ui-express")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
// Set up the view engine and the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// ...
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Ajoutez la ligne suivante pour configurer le moteur de modèle Pug
app.set('view engine', 'pug');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the MongoDB database using the MONGO_URL environment variable
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Check if super admin exists
    User.findOne({ email: 'admareasync6@gmail.com' })
    .then(user => {
      if (user) {
        console.log('Super admin already exists');
      } else {
        console.log('Creating super admin');
        createSuperAdmin('admareasync6@gmail.com', 'adminAREA');
      }
    })
    .catch(err => {
      console.error(err);
    });
  })
  .catch((err) => {
    console.error(err);
  });


// Connectez les routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/spotify", spotifyRouter);
app.use("/auth", authRouter);
app.use("/backoffice", backRouter);
app.get('/about.json', about_json);

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
