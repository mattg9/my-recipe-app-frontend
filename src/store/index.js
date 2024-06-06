import { createStore } from 'vuex';

// Load the selectedRecipe state from local storage if it exists
const initialState = {
  selectedRecipe: JSON.parse(localStorage.getItem('selectedRecipe')) || null
};

const store = createStore({
  state: initialState,
  mutations: {
    setSelectedRecipe(state, recipe) {
      state.selectedRecipe = recipe;
      // Persist the selectedRecipe state to local storage
      localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    }
  }
});

export default store;
