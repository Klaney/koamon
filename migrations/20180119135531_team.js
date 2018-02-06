exports.up = function(knex, Promise) {
  return knex.schema.createTable("team", t => {
    t
      .increments("id")
      .unsigned()
      .primary();
    t.dateTime("createdAt").notNull();
    t.dateTime("updatedAt").nullable();
    t.dateTime("deletedAt").nullable();
    t.string("name").notNull();
    t.specificType("pokemon", "integer[]").nullable();
    // t.integer('user_id').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("team");
};
