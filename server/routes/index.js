const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'HJFGJJDSFSDFF', firstname:'pedro', hola:'garcia'});
});

module.exports = router;
