const express = require("express")
const router = express.Router()
const { login } = require('../BackOffice/BackOfAuth');
const { infos, verifyToken, services, editUser, deleteUser, getNumbers } = require('../BackOffice/BackOfRoutes');

router.post('/login', login);
router.get('/users/infos', verifyToken, infos);
router.get('/services', verifyToken, services);
router.put('/user/edit/:id', verifyToken, editUser);
router.delete('/user/delete/:id', verifyToken, deleteUser);
router.get('/dashboard', verifyToken, getNumbers);

module.exports = router