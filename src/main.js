import Vue from 'vue'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import router from './router.js'

window.Vue = Vue;
Vue.use(Toast);

const followed = [];

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
