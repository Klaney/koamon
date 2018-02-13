exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", function(t) {
      t.increments("user_id");
      t.dateTime("createdAt").notNull();
      t.dateTime("updatedAt").nullable();
      t.dateTime("deletedAt").nullable();
      t.string("username").notNull();
      t.string("password").notNull();
      t.decimal("token_key").nullable();
    })
    .createTable("team", t => {
      t.increments("team_id");
      t.dateTime("createdAt").notNull();
      t.dateTime("updatedAt").nullable();
      t.dateTime("deletedAt").nullable();
      t.string("name").notNull();
      t.specificType("pokemon", "integer[]").nullable();
      t
        .integer("trainer")
        .unsigned()
        .notNullable();
      t
        .foreign("trainer")
        .references("user_id")
        .inTable("users");
    });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("team").dropTable("users");
};
