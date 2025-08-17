import request from 'supertest';
import app = require('../../main');


jest.mock('../../services/requestConverterApi');

describe('Welcome Resource', () => {
    it('should return 200 and the HTML PAGE', async () => {
        const response = await request(app).get('/api/v1/welcome');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toBe(
            'text/html; charset=utf-8'
        );
    });
});

describe('Converter Resource success case', () => {
    it('should return 200 and convert the currency', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                from: 'USD',
                to: 'BRL',
                value: 100,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('result');
    });
});

describe('Converter Resource Error case', () => {
    it('should return 400 and the error message Missing fields.', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                to: 'BRL',
                value: 100,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('status');
        expect(response.body['message']).toBe('the body request is missing');
    });
});

describe('Converter Resource Error case', () => {
    it('should return 400 and the error The Value for quantity must be at least 1', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                from: 'USD',
                to: 'BRL',
                value: -2,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('status');
        expect(response.body['message']).toBe(
            'The value for quantity must be at least 1.'
        );
    });
});
describe('Converter Resource Error case', () => {
    it('should return 400 and the error The value for FROM is not supported', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                from: 'DDD',
                to: 'BRL',
                value: 100,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('status');
        expect(response.body['message']).toBe(
            'The value for FROM is not supported'
        );
    });
});

describe('Converter Resource Error case', () => {
    it('should return 400 and the error The value for TO is not supported', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                from: 'USD',
                to: 'AAA',
                value: 100,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('status');
        expect(response.body['message']).toBe(
            'The value for TO is not supported'
        );
    });
});

describe('Converter Resource Error case', () => {
    it('should return 400 and the error The value for FROM and TO are the same.', async () => {
        const response = await request(app)
            .post('/api/v1/convert')
            .set('content-type', 'application/json')
            .send({
                from: 'USD',
                to: 'USD',
                value: 100,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('code');
        expect(response.body).toHaveProperty('status');
        expect(response.body['message']).toBe(
            'The value for FROM and TO are the same.'
        );
    });
});
