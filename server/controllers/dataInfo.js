const { verify } = require('jsonwebtoken');

const about_json = async (req, res) => {
    // Routes to get the about.json file
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.sendFile('about.json', { root: "/server/controllers/about.json" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

const verifyToken = async (token) => {
    // Function to check if the token is valid
    try {
        const verified = verify(token, process.env.SECRET_KEY);
        return !!verified;
    } catch (error) {
        console.error(error);
        return false;
    }
};
module.exports = { about_json };
