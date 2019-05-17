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
			console.log(err.message);
			res.status(500).json({ message: err.message });
		});
});

router.post('/', (req, res) => {
	db
		.insert(req.body)
		.then((crew) => {
			res.status(201).json(crew);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

router.delete('/:id', (req, res) => {
	db
		.remove(req.params.id)
		.then((resp) => {
			res.status(204).json({ message: 'crew member deleted' });
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});

module.exports = router;
