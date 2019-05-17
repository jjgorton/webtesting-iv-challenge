const request = require('supertest');

const server = require('./server');

describe('server', () => {
	it('should return an OK status code from the index route', async () => {
		const expectedStatusCode = 200;

		const response = await request(server).get('/');

		expect(response.status).toEqual(expectedStatusCode);
	});

	it('should return 200 OK', (done) => {
		request(server).get('/').then((res) => {
			expect(res.status).toEqual(200);
			done();
		});
	});

	describe('GET(/api/crew)', () => {
		it('should return 200 OK', async () => {
			const res = await request(server).get('/api/crew');
			expect(res.status).toEqual(200);
		});
	});

	describe('POST(/api/crew)', () => {
		it('should return status(201)', () => {
			request(server).post('/api/crew').then((res) => {
				expect(res.status).toEqual(201);
			});
		});
	});
});
