const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (request, response) => {
  Recipes.getRecipes()
    .then(recipes => {
      response.json(recipes);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        response.json(recipe);
      } else {
        response
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (request, response) => {
  const { id } = request.params;

  Recipes.getShoppingList(id)
    .then(shoppingList => {
      if (shoppingList.length) {
        response.json(shoppingList);
      } else {
        response
          .status(404)
          .json({ message: "Could not find shopping list for given recipe" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get shopping list" });
    });
});

router.get("/:id/instructions", (request, response) => {
  const { id } = request.params;

  Recipes.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        response.json(instructions);
      } else {
        response
          .status(404)
          .json({ message: "Could not find instructions for given recipe" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get instructions" });
    });
});

module.exports = router;
