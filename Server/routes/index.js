var express = require("express")
var router = express.Router()

/* GET home page. */

/**
 * @swagger
 * "/":
 *   get:
 *     description: Home page of the server (testing purpose)
 */
router.get("/", function (req, res, next) {
  res.send("Hello World!")
})

module.exports = router
