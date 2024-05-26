import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import AddRecipe from '@/views/AddRecipe/AddRecipe.js';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddRecipe',
      component: AddRecipe
    }
  ]
});
