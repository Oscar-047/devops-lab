const request = require('supertest');
const app = require('./app');

describe('GET /api/hello', () => {
    it('should return a JSON message', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Hello from DevOps Lab Backend!');
    });
});

describe('GET /api/stories', () => {
    it('should return a list of stories', async () => {
        const res = await request(app).get('/api/stories');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(3);
        expect(res.body[0]).toHaveProperty('title');
        expect(res.body[0]).toHaveProperty('content');
    });
});