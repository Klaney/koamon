
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(t) {
    t.increments('id').unsigned().primary();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
    t.dateTime('deletedAt').nullable();
    t.string('username').notNull();
    t.string('password').notNull();
    t.decimal('token_key').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
