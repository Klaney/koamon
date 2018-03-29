exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("team")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("team").insert([
        {
          createdAt: new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          name: "taco",
          pokemon: [1, 2, 3, 4, 5, 6],
          trainer: 1
        }
      ]);
    });
};
