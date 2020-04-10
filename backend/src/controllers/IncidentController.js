const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const [count] = await connection('incidente').count();

        const { page = 1} = request.query;

        const inc_id = await connection('incidente')
        .join('ongs', 'ongs.id', '=', 'incidente.ong_id')
        .limit(5)
        .offset((page - 1) * 5)  /** paginação limite a 5 */
        .select([
            'incidente.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf' 
        ]);

        response.header('X-Total-Count', count['count(*)']);  

        return response.json(inc_id);
    },
    
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; /** comando para autenticação dos valores do request */

        const [id] = await connection('incidente').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },  

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
       
        const incident = await connection('incidente').where('id', id).select('ong_id').first();

        if(incident.ong_id !== ong_id) {
            return response.status(401).json({ erro: 'Operation not permitted.' });
        }
        await connection('incidente').where('id', id).delete();
        return response.status(204).send();
        
    }
};