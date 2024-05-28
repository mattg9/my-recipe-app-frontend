<template>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
    <button class="btn btn-outline-success" type="button" @click="search">Search</button>
  </form>
</template>

<script>
import { searchRecipe } from '@/services/recipeService';

export default {
  data() {
    return {
      query: '',
      searchResults: []
    };
  },
  methods: {
  }
}
</script>
