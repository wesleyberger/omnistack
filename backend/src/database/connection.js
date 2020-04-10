
/** Inportanto o Knex e o arquivo de configuração Knexfile */
const knex = require('knex');
const configuration = require('../../knexfile');

/** Conectando */
const connection = knex(configuration.development);

/** Exportando */
module.exports = connection;