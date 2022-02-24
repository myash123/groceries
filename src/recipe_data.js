const recipes = [
  {
    name: "Spaghetti",
    id: 12345,
    amazonRef: "http://amazon.com",
    img: "images/spaghetti.jpeg",
    description: "Spaghetti is great and easy to make",
    ingredients: "spaghetti;tomato sauce;parmasean cheese;fresh pepper;basil",
    instructions: "Boil 1 quart of water;Put spaghetti into water; When spaghetti is of desired firmness, remove spaghetti from water;Pour the cheapest jarred sauce from your grocery store;Be too lazy to put anything else in"
  },
  {
    name: "Scrambled eggs",
    id: 23456,
    amazonRef: "http://www.amazon.com",
    img: "images/egg.jpeg",
    description: "Scrambled eggs, of course",
    ingredients: "eggs;shredded cheese;salt;pepper;hot sauce",
    instructions: "Boil 1 quart of water;Put spaghetti into water; When spaghetti is of desired firmness, remove spaghetti from water;Pour the cheapest jarred sauce from your grocery store;Be too lazy to put anything else in"
  },
  
  {
    name: "Steak",
    id: 34567,
    amazonRef: "http://www.amazon.com",
    img: "images/steak.jpeg",
    description: "It's a steak",
    ingredients: "Steak;butter;salt;garlic",
    instructions: "Boil 1 quart of water;Put spaghetti into water; When spaghetti is of desired firmness, remove spaghetti from water;Pour the cheapest jarred sauce from your grocery store;Be too lazy to put anything else in"
  },
  
  {
    name: "Tomato Soup",
    id: 2333456,
    amazonRef: "http://www.amazon.com",
    img: "images/tomato-soup.jpeg",
    description: "Ahh, tomato soup in the summertime",
    ingredients: "tomato soup;green onions;salt;pepper;hot sauce",
    instructions: "Boil 1 quart of water;Put spaghetti into water; When spaghetti is of desired firmness, remove spaghetti from water;Pour the cheapest jarred sauce from your grocery store;Be too lazy to put anything else in"
  },
  
  {
    name: "Tuna Salad",
    id: 23441234456,
    amazonRef: "http://www.amazon.com",
    img: "images/tuna-salad.jpeg",
    description: "Add mayo",
    ingredients: "canned tunafish;pickles;salt;pepper;mayo",
    instructions: "Boil 1 quart of water;Put spaghetti into water; When spaghetti is of desired firmness, remove spaghetti from water;Pour the cheapest jarred sauce from your grocery store;Be too lazy to put anything else in"
  }  
]

export function getRecipes() {
  return recipes;
}

export function getRecipe(number) {
  return recipes.find(
    recipe => recipes.number === number
  );
}