exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "pepperonis"
        }, // id 1 will be generated
        {
          ingredient_name: "cookie dough"
        }, //id  2
        {
          ingredient_name: "pork"
        }, //id  3
        {
          ingredient_name: "chocolate chips"
        }, //id  4
        {
          ingredient_name: "taco shells"
        } //id  5
      ]);
    });
};
