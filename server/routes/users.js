var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ui', function(req, res, next) {
  res.send('Users!')
});

module.exports = router;
