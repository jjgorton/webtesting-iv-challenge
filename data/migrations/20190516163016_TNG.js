exports.up = function(knex) {
	return knex.schema.createTable('TNG', (tbl) => {
		tbl.increments();

		tbl.string('name', 128).notNullable().unique();
		tbl.string('species', 128).notNullable();
		tbl.string('rank', 128);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('TNG');
};
