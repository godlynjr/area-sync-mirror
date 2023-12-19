// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const check_mail = async (req, res) => {
    // Routes to check if the user exists
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
};

const login = async (req, res) => {
    // Routes to login the user
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password === '') {
                // User exists but password is not set, so set the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                user.password = hashedPassword;
                await user.save();
                
                const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {expiresIn: '3h'});
                res.header('auth-token', token).send({ token });
            } else {
                // User exists and password is set, so just check the password
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (validPassword) {
                    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {expiresIn: '3h'});
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
};

const web = async (req, res) => {
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
            // User does not exist, so create the user
            const username = req.body.email.split('@')[0];
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            
            const newUser = new User({
                username: username,
                email: req.body.email,
                password: hashedPassword, // Password is set here
            });
            await newUser.save();
            
            const token = jwt.sign({ _id: newUser._id }, 'SECRET_KEY');
            res.header('auth-token', token).send({ token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

module.exports = { check_mail, login };
