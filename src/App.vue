<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Recipe App</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add Recipe</router-link>
            </li>
          </ul>
          <SearchBar @search="performSearch" />
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  },
  setup() {
    const performSearch = (query) => {
      console.log('Performing search with query:', query);
      // Add your search logic here
    };
    return {
      performSearch,
    };
  },
};
</script>


<style>
.navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
</style>
