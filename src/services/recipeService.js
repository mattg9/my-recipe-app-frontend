import axios from 'axios';

const API_URL = 'http://localhost:8000/api/recipes/';

export const getRecipes = async () => {
  return await axios.get(API_URL);
};

export const addRecipe = async (recipe) => {
  console.log(recipe);
  return await axios.post(API_URL, recipe);
};
