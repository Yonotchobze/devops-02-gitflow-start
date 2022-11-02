const express = require("express");
const Inventions = require('../models/Invention');
const keyToUpperCase = require('../services/keyToUpperCase');
const sortInventions = require('../services/sortInventions');

const router = express.Router();

router.get('/inventions/:key?', (req, res) => {
	const inventions = keyToUpperCase(Inventions.list(), req.params.key ?? 'author');
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

router.get('/inventions/sort/:order', (req, res) => {
	const inventions = sortInventions(Inventions.list(), req.params.order);
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

module.exports = router;