exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: "Buy a frozen pizza from the store"
        },
        {
          recipe_id: 1,
          step_number: 2,
          instructions: "Add more pepperonis to the pizza"
        },
        {
          recipe_id: 1,
          step_number: 3,
          instructions: "Put pizza in oven and bake at 350 degrees for 20 min"
        },
        // cookie steps
        {
          recipe_id: 2,
          step_number: 1,
          instructions:
            "Put cookie dough on pan with extra chocolate chips added "
        },
        {
          recipe_id: 2,
          step_number: 2,
          instructions: "Bake cookies in oven"
        },
        {
          recipe_id: 2,
          step_number: 3,
          instructions: "Eat cookies - dont share with anyone"
        },
        // taco steps
        {
          recipe_id: 3,
          step_number: 1,
          instructions: "Cook pork on stove"
        },
        {
          recipe_id: 3,
          step_number: 2,
          instructions: "Add pork to taco shells"
        },
        {
          recipe_id: 3,
          step_number: 3,
          instructions: "Add anything else you want to go on top"
        },
        {
          recipe_id: 3,
          step_number: 4,
          instructions: "Eat the tacos"
        }
      ]);
    });
};
