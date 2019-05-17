const db = require('../../data/dbConfig');

module.exports = {
	get,
	insert,
	remove
};

function get() {
	return db('TNG');
}

async function insert(crew) {
	const [ id ] = await db('TNG').insert(crew, 'id');

	return db('TNG').where({ id: id }).first();
}

function remove(id) {
	return db('TNG').where({ id }).del();
}
