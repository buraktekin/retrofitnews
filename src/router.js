import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Welcome from './components/Welcome/Welcome.vue'
import Preview from './components/Preview/Preview.vue'
import Fields from './components/Fields/Fields.vue'
import Authentication from './components/Authentication/Authentication.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Welcome },
    { path: '/fields', component: Fields },
    { path: '/authentication', component: Authentication },
    { path: '/preview', component: Preview }
  ],
  mode: 'history'
});

export default router;