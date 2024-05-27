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
      <p>{{ recipe.instructions }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipePage',
  computed: {
    recipe() {
      return this.$store.state.selectedRecipe;
    }
  }
};
</script>
