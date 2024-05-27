<template>
  <div>
    <h2>My Recipes</h2>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
    </ul>
  </div>
</template>

<script>
import { getRecipes } from '@/services/recipeService';

export default {
  name: 'RecipeHomePage',
  data() {
    return {
      recipes: []
    };
  },
  async created() {
    const response = await getRecipes();
    this.recipes = response.data;
  }
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>