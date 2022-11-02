const express = require("express");
const Inventions = require('../models/Invention');
const keyToUpperCase = require('../services/keyToUpperCase');

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

router.get('/inventions/sort/asc', (req, res) => {
	const inventions = Inventions.list().sort(function(a, b) {return a.creationDate - b.creationDate});
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

router.get('/inventions/sort/desc', (req, res) => {
	const inventions = Inventions.list().sort(function(a, b) {return b.creationDate - a.creationDate});
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

module.exports = router;