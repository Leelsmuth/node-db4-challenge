exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Pepperoni Pizza"
        }, // id 1 will be generated
        {
          recipe_name: "Chocolate Chip Cookies"
        }, //id  2
        {
          recipe_name: "Pork Tacos"
        } //id  3
      ]);
    });
};
