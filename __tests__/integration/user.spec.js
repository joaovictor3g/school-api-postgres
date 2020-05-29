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

    it('should be able to create e new Studant', async () => {
        const name = "Manu";
        const age = 15;
        
        await connection('new_studant').insert({ name, age });

        
    })

    it('should be able to get a Studant', async () => {
        const response = await request(app)
            .get('/get-studant/1')

        expect(response.body.name).toEqual("Manu");
        expect(response.body.id).toEqual(1);           
    });

});
