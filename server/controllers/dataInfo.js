const axios = require('axios');

const about_json = async (req, res) => {
    try {
        res.sendFile('about.json', { root: __dirname });
    } catch {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

module.exports = { about_json };
