import Vue from 'vue'
import VueRouter from 'vue-router'
import fb from '../modules/firebase.js'
import store from '../store/store.js'

import App from '../App.vue'
import Welcome from '../components/Welcome/Welcome.vue'
import Fields from '../components/Fields/Fields.vue'
import Authentication from '../components/Authentication/Authentication.vue'
import Preview from '../components/Preview/Preview.vue'

Vue.use(VueRouter);
let Firebase = fb.Firebase;
var Store = store.state;

const router = new VueRouter({
  mode: 'history',
  routes: [{
      name: 'Welcome',
      path: '/',
      component: Welcome,
      meta: {
        requiresAuth: false,
        allowed: ['/', '/authentication']
      }
    },

    {
      name: 'Auth',
      path: '/authentication',
      component: Authentication,
      meta: {
        requiresAuth: false,
        allowed: ['/', '/authentication', '/fields', '/preview']
      }
    },

    {
      name: 'Fields',
      path: '/fields',
      component: Fields,
      meta: {
        requiresAuth: true,
        allowed: ['/', '/fields', '/preview']
      }
      // Navigation Guards implemented into the component.
    },

    {
      name: 'Preview',
      path: '/preview',
      component: Preview,
      meta: {
        requiresAuth: true,
        allowed: ['/', 'preview']
      }
      // Navigation Guards implemented into the component.
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (!Firebase.auth().currentUser) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // TO AUTH REQUIRED + USER NOT ACTIVE
      next('/authentication');
    } else {
      // TO AUTH NOT REQUIRED + USER NOT ACTIVE
      next();
    }
  } else {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // TO AUTH REQUIRED + USER ACTIVE
      next();
    } else {
      // TO AUTH NOT REQUIRED + USER ACTIVE
      if(store.state.selections.lenght > 0){
        router.push('/preview');
      } else {
        router.push('/fields');
      }
    }
  }
});

export default router;