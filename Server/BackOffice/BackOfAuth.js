const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function passwordCorrect(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}

const createSuperAdmin = async (email, plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    const superAdmin = new User({
        username: email.split('@')[0],
        email,
        password: hashedPassword,
        isAdmin: true,
    });
    await superAdmin.save();
};

const login = async (req, res) => {
    try {
        const username = req.body.email.split('@')[0];
        const user = await User.findOne({ username });
        if (user && await passwordCorrect(req.body.password, user.password)) {
            console.log('secret key:', process.env.SECRET_KEY);
            const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: '3h' });
            res.header('auth-token', token).send({ token });
        } else {
            res.status(400).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

module.exports = { login, createSuperAdmin };
