<template>
  <div class="container">
    <h2 class="mt-5">My Recipes</h2>
    <ul class="list-group mt-3">
      <li v-for="recipe in recipes" 
        :key="recipe.id" 
        class="list-group-item" 
        @click="viewRecipe(recipe)"
        style="cursor: pointer;"
      >
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getRecipes } from '@/services/recipeService';

export default {
  name: 'RecipeHomePage',
  methods: {
    viewRecipe(recipe) {
      this.$store.commit('setSelectedRecipe', recipe);
      this.$router.push({ name: 'Recipe' });
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  async created() {
    try {
      const response = await getRecipes();
      this.recipes = response.data;
    } catch (error) {
      this.error = 'Failed to load recipes. Please try again later.';
      console.error(error);
    }
  }
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>
