<template>
    <div>
      <h2>Add Recipe</h2>
      <form @submit.prevent="submitRecipe">
        <div>
          <label for="title">Title:</label>
          <input v-model="title" id="title" required>
        </div>
        <div>
          <label for="ingredients">Ingredients:</label>
          <textarea v-model="ingredients" id="ingredients" required></textarea>
        </div>
        <div>
          <label for="instructions">Instructions:</label>
          <textarea v-model="instructions" id="instructions" required></textarea>
        </div>
        <button type="submit">Add Recipe</button>
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
          ingredients: this.ingredients.split('\n'),
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
  