<template>
  <div class="container">
    <h2 class="mt-5">My Recipes</h2>
    <ul class="list-group mt-3">
      <li
        v-for="recipe in recipes"
        :key="recipe.id"
        class="list-group-item"
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