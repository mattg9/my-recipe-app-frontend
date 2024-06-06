<template>
  <div class="container mt-5">
    <h2>{{ recipe.title }}</h2>
    <div class="mb-3">
      <h4>Ingredients:</h4>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
    </div>
    <div class="mb-3">
      <h4>Instructions:</h4>
      <ol>
        <li v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</li>
      </ol>
    </div>
    <button @click="deleteRecipe" class="btn btn-danger">Delete Recipe</button>
  </div>
</template>

<script>
import { deleteRecipe } from '@/services/recipeService';
export default {
  name: 'RecipePage',
  computed: {
    recipe() {
      return this.$store.state.selectedRecipe;
    }
  },
  methods: {
    async deleteRecipe() {
      try {
        await deleteRecipe(this.recipe.id);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  }
};
</script>
