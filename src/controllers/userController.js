const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, age } = req.body;

        await conn('new_studant')
            .insert({
                name,
                age
            })
        return res.json({ message: 'deu certo' });
    },

    async getStudantById(req, res) {
        const { id } = req.params;

        const [response] = await conn('new_studant')
            .select('*')
            .where('id', id);

        return res.json(response);
    },

    async updateStudant(req, res) {
        const { id } = req.params;
        const { name, age } = req.body;

        await conn('new_studant').where('id', id)
            .update({ name, age })
                                                     
        return res.status(204).send();
    },

    async deleteStudant(req, res) {
        const { id } = req.params;

        await conn('new_studant').where('id', id)
            .del();

        return res.status(204).json({ message: 'studant was deleted!!!' })
    }

};