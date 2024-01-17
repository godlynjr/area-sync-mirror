const express = require("express")
const router = express.Router()
const { login } = require('../BackOffice/BackOfAuth');
const { infos, verifyToken, services, editUser, deleteUser, getNumbers } = require('../BackOffice/BackOfRoutes');

router.post('/login', login);
/**
 * @swagger
 * "/users/infos":
 *   get:
 *     description: Retrieve a list of users informations
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/users/infos', verifyToken, infos);
/**
 * @swagger
 * "/services":
 *   get:
 *     description: Retrieve a list of services
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/services', verifyToken, services);

/**
 * @swagger
 * "/user/edit/:id":
 *   put:
 *     description: Edit specific user
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.put('/user/edit/:id', verifyToken, editUser);

/**
 * @swagger
 * "/user/delete/:id":
 *   delete:
 *     description: Delete specific user
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.delete('/user/delete/:id', verifyToken, deleteUser);

/**
 * @swagger
 * "/dashboard":
 *   get:
 *     description: Get the dashboard
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/dashboard', verifyToken, getNumbers);

module.exports = router
