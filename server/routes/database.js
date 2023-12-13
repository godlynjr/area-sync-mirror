require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Vérifiez l'état de la connexion
    const db = mongoose.connection;
    console.log('Connection state:', db.readyState); // 0: déconnecté, 1: connecté, 2: en cours de connexion, 3: en cours de déconnexion
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));