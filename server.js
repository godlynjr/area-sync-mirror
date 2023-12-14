require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 8080;

// Utilisez express.json() avant vos routes
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/check_mail', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(200).json({ message: 'User already exists, please enter your password.' });
        } else {
            // Create username from email
            const username = req.body.email.split('@')[0];
            
            const newUser = new User({
                username: username,
                email: req.body.email,
                password: '', // Password will be set later
            });
            await newUser.save();
            
            res.status(201).json({ message: 'User created successfully, please create a password.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
});

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password === '') {
                // User exists but password is not set, so set the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                user.password = hashedPassword;
                await user.save();
                
                const token = jwt.sign({ _id: user._id }, 'SECRET_KEY');
                res.header('auth-token', token).send({ token });
            } else {
                // User exists and password is set, so just check the password
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (validPassword) {
                    const token = jwt.sign({ _id: user._id }, 'SECRET_KEY');
                    res.header('auth-token', token).send({ token });
                } else {
                    res.status(400).json({ message: 'Invalid password' });
                }
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
