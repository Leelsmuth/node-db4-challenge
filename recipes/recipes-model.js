const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

// using getRecipeById(id) helper for GET to /:id in recipes router
function getRecipeById(id) {
  return db("recipes").where({ id: id });
}

// using getShoppingList() helper for GET to /:id/shoppingList in recipes router
// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .join("recipes as r", "ri.recipe_id", "=", "r.id")
    .join("ingredients as i", "ri.ingredient_id", "=", "i.id")
    .select("r.recipe_name", "i.ingredient_name", "ri.ingredient_quantity")
    .where("r.id", id);
}

// using getInstructions() helper for GET to /:id/instructions in recipes router
// should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  return db("recipe_steps as rs")
    .join("recipes as r", "rs.recipe_id", "=", "r.id")
    .select("r.recipe_name", "rs.step_number", "rs.instructions")
    .where("r.id", id);
}
