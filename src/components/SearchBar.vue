<template>
  <form class="d-flex" @submit.prevent="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery" @keyup.enter="search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</template>

<script>
import { searchRecipe } from '@/services/recipeService';

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      console.log(searchRecipe(this.searchQuery));
    }
  }
}
</script>
