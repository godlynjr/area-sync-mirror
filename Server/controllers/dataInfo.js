const fs = require('fs');
const path = require('path');

const about_json = async (req, res) => {
    // Routes to get the about.json file
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Lire les informations sur les services à partir du fichier
        const servicesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'services.json'), 'utf8'));

        // Générer les données dynamiquement
        let aboutData = {
            "client": {
                "host": req.ip
            },
            "server": {
                "current_time": Date.now(),
                "services": servicesData.services
            }
        };

        res.json(aboutData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Servers error', error: error.toString() });
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
