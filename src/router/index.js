import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddRecipe from '@/views/AddRecipe.vue'; // Assuming AddRecipe is a .vue file, not .js

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
