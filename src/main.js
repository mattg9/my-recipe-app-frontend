import Vue from 'vue';
import App from './App.vue';
// import router from './router'; // Import the router
// import store from './store'; // Import the Vuex store
// import './assets/styles.css'; // Import global CSS if you have any

Vue.config.productionTip = false;

new Vue({
    // router, // Register the router
    // store, // Register the store
    render: h => h(App)
}).$mount('#app'); // Mount the app to the DOM element with id "app"
