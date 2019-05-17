const request = require('supertest');

const server = require('../server');

describe('crew-router', () => {
	it('should return 200 OK', (done) => {
		request(server).get('/').then((res) => {
			expect(res.status).toEqual(200);
			done();
		});
	});

	it('should return 200 OK', async () => {
		const res = await request(server).get('/api/crew');
		expect(res.status).toEqual(200);
	});
});
