const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const data = require('../controllers/services.json');

// Middleware pour vérifier le jeton JWT
function verifyToken(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (error) {
        console.error('Token verification error:', error); // Log the specific error
        res.status(400).json({ message: 'Invalid token', error: error.toString() });
    }
}
// Get the number of users and the number of services
const getNumbers = async (req, res) => {
    try {
        // Vérifier si le superAdmin est connecté
        if (req.user && req.user.isAdmin) {
            const users = await User.collection.find({}).toArray();
            const services = data.services;
            res.json({ users: users.length, services: services.length });
        } else {
            // Refuser l'accès
            res.status(403).json({ message: 'Access denied' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};
// Get all the users and their infos
const infos = async (req, res) => {
    try {
        // Vérifier si le superAdmin est connecté
        if (req.user && req.user.isAdmin) {
            const users = await User.collection.find({}).toArray();
            res.json(users);
        } else {
            // Refuser l'accès
            res.status(403).json({ message: 'Accès refusé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};
// Get all the services
const services = async (req, res) => {
    try {
        if (req.user && req.user.isAdmin) {
            res.json(data);
        } else {
            // Refuser l'accès
            res.status(403).json({ message: 'Access denied' });
        }
    } catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

// Edit this special user infos
const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password, isAdmin } = req.body;
        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.findByIdAndUpdate(id, { username, email, password: hashedPassword, isAdmin }, { new: true });
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

// Delete this special user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};
module.exports = { infos, verifyToken, services, editUser, deleteUser, getNumbers };
