import axios from 'axios';

const API_URL = 'http://localhost:8000/api/recipes/';

export const getRecipes = async () => {
  return await axios.get(API_URL);
};

export const addRecipe = async (recipe) => {
  console.log(recipe);
  return await axios.post(API_URL, recipe);
};

export const searchRecipe = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?query=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};
