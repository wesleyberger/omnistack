/** importando Conexão: connection */
const connection = require('../database/connection');
/** Importando Crypto*/
const crypto = require('crypto');

module.exports = {
async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); /** Comando da documentação node p/ criar id drandomico*/

    /** Inserindo a tabela obs: o comando await serve para aguardar até que o insert seja completo, para ai dar o return*/
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
     })
        return response.json({ id });
  }
};