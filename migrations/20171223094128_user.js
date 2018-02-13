exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", function(t) {
      t
        .increments("id")
        .unsigned()
        .primary();
      t.dateTime("createdAt").notNull();
      t.dateTime("updatedAt").nullable();
      t.dateTime("deletedAt").nullable();
      t.string("username").notNull();
      t.string("password").notNull();
      t.decimal("token_key").nullable();
    }),
    knex.schema.createTable("team", t => {
      t
        .increments("id")
        .unsigned()
        .primary();
      t.dateTime("createdAt").notNull();
      t.dateTime("updatedAt").nullable();
      t.dateTime("deletedAt").nullable();
      t.string("name").notNull();
      t.specificType("pokemon", "integer[]").nullable();
      t
        .integer("user_id")
        .unsigned()
        .inTables("users")
        .references("id")
        .notNull();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("team").then(() => {
    knex.schema.dropTable("users");
  });
};
