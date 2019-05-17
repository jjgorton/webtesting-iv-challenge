const db = require('../../data/dbConfig');

const TNG = require('./crew-model');

describe('TNG model', () => {
	beforeEach(async () => {
		await db('TNG').truncate();
	});

	describe('insert()', () => {
		it('should insert crew', async () => {
			await TNG.insert({ name: 'Troy', species: 'Betazoid/Human', rank: 'Counselor/Commander' });
			const tbl = await db('TNG');
			expect(tbl).toHaveLength(1);
		});
	});

	describe('delete()', () => {
		it('should delete crew', async () => {
			await TNG.remove('1');
			const tbl = await db('TNG');
			expect(tbl).toHaveLength(0);
		});
	});
});
