
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('updatedAt').nullable();
    t.string('name').notNull();
    t.string('type').notNull();
    t.string('subtype').nullable();
    t.integer('attack').notNull();
    t.integer('defense').notNull();
    t.integer('speed').notNull();
    t.integer('special_attack').notNull();
    t.integer('special_defense').notNull();
    t.integer('hp').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon')
};
