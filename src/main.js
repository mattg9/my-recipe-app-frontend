import { createApp } from "vue";
import Home from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(Home)
  .use(router)
  .mount('#app');
