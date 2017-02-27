import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Preview from './components/Preview/Preview.vue'
import Fields from './components/Fields/Fields.vue'

Vue.use(VueRouter);

const followed = [];
const router = new VueRouter({
  routes: [
    { path: '/', component: Fields },
    { path: '/preview', component: Preview }
  ],
  mode: 'history'
})
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
