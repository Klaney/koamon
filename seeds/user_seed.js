exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          createdAt: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          username: "taco",
          password: "taco"
        }
      ]);
    });
};
