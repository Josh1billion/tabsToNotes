var express = require('express');
var router = express.Router();
var tabsToNotes = require('tabs-to-notes');

/* GET home page. */
router.get('/', function(req, res) {

	var sampleInput = `---------------------|
	---------------------|
	-9-9-9-9-9-9-9-9-9-9-|
	-9-9-9-9-9-9-9-9-9-9-|
	-7-7-7-7-7-7-7-7-7-7-|
	---------------------|`;

	var notes = tabsToNotes(sampleInput);
	res.send(notes);
});

module.exports = router;
