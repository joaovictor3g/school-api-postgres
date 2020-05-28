const request = require('supertest');
const app = require('../../src/index');
const connection = require('../../src/database/connection');

describe('User', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new Studant', async () => {
        const response = await request(app)
            .get('/get-studant/1')

        expect(response.body.name).toEqual("Manu");
        expect(response.body.id).toEqual(1);           
    });
});