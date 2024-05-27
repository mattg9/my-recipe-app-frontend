import { createApp } from "vue";
import Home from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

createApp(Home)
  .use(router)
  .use(vuetify)
  .mount('#app');
