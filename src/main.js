import Vue from 'vue'
import VueRouter from 'vue-router'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import Welcome from './components/Welcome/Welcome.vue'
import Preview from './components/Preview/Preview.vue'
import Fields from './components/Fields/Fields.vue'
import Authentication from './components/Authentication/Authentication.vue'

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Toast);

const followed = [];
const router = new VueRouter({
  routes: [
    { path: '/', component: Welcome },
    { path: '/fields', component: Fields },
    { path: '/authentication', component: Authentication },
    { path: '/preview', component: Preview }
  ],
  mode: 'history'
});

// Initialize New Vue Object
new Vue({
  el: '#app',
  data() {
    return {
      data: followed
    }
  },
  render: h => h(App),
  router
})
