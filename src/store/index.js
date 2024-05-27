import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedRecipe: null
  },
  mutations: {
    setSelectedRecipe(state, recipe) {
      state.selectedRecipe = recipe;
    }
  }
});

export default store;
