const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, age, phone } = req.body;

        await conn('new_studant')
            .insert({
                name,
                age,
                phone
            })
        return res.json({ message: 'deu certo' });
    },

    async getStudantById(req, res) {
        const { id } = req.params;

        const response = await conn('new_studant')
            .select('*')
            .where('id', id)
            .first();

        return res.json(response);
    },

    async updateStudant(req, res) {
        const { id } = req.params;
        const { name, age, phone } = req.body;

        await conn('new_studant').where('id', id)
            .update({ name, age, phone })
                                                     
        return res.status(204).send();
    },

    async deleteStudant(req, res) {
        const { id } = req.params;

        await conn('new_studant').where('id', id)
            .del();

        return res.status(204);
    },

    async listAllRegisters(req, res) {
        const response = await conn('new_studant').select('*');

        return res.json(response);
    },

    async orderPerId(req, res) {
        const response = await conn('new_studant')
            .select('*')
            .orderBy('id');

        return res.json(response);
    },

    async orderByName(req, res) {
        const response = await conn('new_studant')
            .select('*')
            .orderBy('name');

        return res.json(response);
    }

};