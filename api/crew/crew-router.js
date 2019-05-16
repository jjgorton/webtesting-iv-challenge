const express = require('express');

const db = require('./crew-model');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.get()
		.then((officer) => {
			res.status(200).json(officer);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

module.exports = router;
