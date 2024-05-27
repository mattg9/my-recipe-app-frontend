import { createApp } from "vue";
import Home from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(Home)
  .use(router)
  .use(store)
  .mount('#app');
