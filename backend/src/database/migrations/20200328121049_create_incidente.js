exports.up = function(knex) {
    return knex.schema.createTable('incidente', function (table) { /** create table */
      
      table.increments(); /**Chave Primaria/PrimaryKey */
      
      table.string('title').notNullable;
      table.string('description').notNullable;    /** Campos da Tabela */
      table.decimal('value').notNullable;
      
      table.string('ong_id').notNullable;     /** Relacionamento com tabela ongs */
      table.foreign('ong_id').references('id').inTable('ongs'); /** Chave Estrangeira */
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidente'); /** em caso de erro */
  };