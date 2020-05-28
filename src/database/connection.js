const knex = require('knex');

const configuration = require('../../knexfile');

//const config = configuration.development;
const config = configuration.test;

const connection = knex(config);

module.exports = connection;