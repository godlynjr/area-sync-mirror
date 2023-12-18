// routes/auth.js
const express = require("express")
const router = express.Router()
const { check_mail, login } = require("../controllers/authController")

router.post("/check_mail", check_mail)
router.post("/login", login)

module.exports = router
