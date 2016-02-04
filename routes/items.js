var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/', function(req, res) {
	res.send('woooooo');
});

module.exports = router;
