var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HJFGJJDSFSDFF', firstname:'luis', hola:'garcia'});
});

module.exports = router;