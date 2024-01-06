const jwt = require('jsonwebtoken');
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
        const { id } = req.params.id;
        const { username, email, password, isAdmin } = req.body;
        const user = await User.findByIdAndUpdate(id, { username, email, password, isAdmin }, { new: true });
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};
module.exports = { infos, verifyToken, services, editUser };
