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

// Importez la stratégie Google OAuth2 de Passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
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

// Configurer la session
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// Initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());

// Définissez la sérialisation et la désérialisation des utilisateurs pour la session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Utilisez la stratégie Google OAuth2
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URI
  },
  (accessToken, refreshToken, profile, done) => {
    // Logique pour créer ou récupérer un utilisateur dans la base de données
    User.findOne({ googleId: profile.id }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        // Créez un nouvel utilisateur avec les informations Google
        const newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          // Ajoutez d'autres informations de profil si nécessaire
        });
        newUser.save((err) => {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      } else {
        return done(null, user);
      }
    });
  }
));

// Connectez Passport à Express
app.use(passport.initialize());
app.use(passport.session());

// Connectez les routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
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
