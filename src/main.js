import { createApp } from "vue";
import AddRecipe from './views/AddRecipe.vue';
import router from './router';

createApp({ router, render: h => h(AddRecipe) })
  .use(router)
  .$mount('#app');
