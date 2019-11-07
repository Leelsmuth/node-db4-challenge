exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2 }, // pizza and pepperonis
        { recipe_id: 2, ingredient_id: 2, ingredient_quantity: 4 }, // cookies and cookie dough
        { recipe_id: 3, ingredient_id: 3, ingredient_quantity: 5 }, // tacos and pork
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 10 }, // cookies and chocolate chips
        { recipe_id: 3, ingredient_id: 5, ingredient_quantity: 3 } // tacos and taco shells
      ]);
    });
};
