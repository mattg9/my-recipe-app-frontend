<template>
  <div class="container mt-5">
    <h2>Add Recipe</h2>
    <form @submit.prevent="submitRecipe" class="mt-3">
      <div class="mb-3">
        <label for="title" class="form-label">Title:</label>
        <input type="text" v-model="title" id="title" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients:</label>
        <textarea v-model="ingredients" id="ingredients" class="form-control" rows="5" required></textarea>
      </div>
      <div class="mb-3">
        <label for="instructions" class="form-label">Instructions:</label>
        <textarea v-model="instructions" id="instructions" class="form-control" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Recipe</button>
    </form>
  </div>
</template>

<script>
import { addRecipe } from '@/services/recipeService';

export default {
  name: 'AddRecipe',
  data() {
    return {
      title: '',
      ingredients: '',
      instructions: ''
    };
  },
  methods: {
    async submitRecipe() {
      const recipe = {
        title: this.title,
        ingredients: this.ingredients,
        instructions: this.instructions
      };
      await addRecipe(recipe);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>