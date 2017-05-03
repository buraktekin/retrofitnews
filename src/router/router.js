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
        requiresAuth: false
      },
      beforeEnter: (to, from, next) => {
        if(Firebase.auth().currentUser){
          next('/fields');
        } else {
          next()
        }
      }
    },

    {
      name: 'Auth',
      path: '/authentication',
      component: Authentication,
      meta: {
        requiresAuth: false
      },
      beforeEnter: (to, from, next) => {
        if(Firebase.auth().currentUser){
          next('/fields');
        } else {
          next()
        }
      }
    },

    {
      name: 'Fields',
      path: '/fields',
      component: Fields,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        setTimeout(() => {
          if(Store.selections.length > 0){
            router.push('/preview');
          } else {
            next();
          }
        }, 1000);
      }
    },

    {
      name: 'Preview',
      path: '/preview',
      component: Preview,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        setTimeout(() => {
          if(Store.selections.length == 0){
            router.push('/fields');
          } else {
            next()
          }
        }, 1000);
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Firebase.auth().currentUser) {
      // TO AUTH REQUIRED + USER NOT ACTIVE
      // Preview || Fields
      next('/authentication');
    } else {
      // TO AUTH REQUIRED + USER ACTIVE
      // Preview || Fields
      next();
    }
  } else {
    // TO AUTH NOT REQUIRED
    // Welcome || Authentication
    next();
  }
});

export default router;