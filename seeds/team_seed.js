exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("team")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("team").insert([
        {
          id: 1,
          createdAt: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          name: "taco",
          user_id: knex("users")
            .where({ id: 1 })
            .select("id")
        }
      ]);
    });
};
