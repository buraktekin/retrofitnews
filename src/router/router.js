import Vue from 'vue'
import VueRouter from 'vue-router'
import fb from '../modules/firebase.js'

import App from '../App.vue'
import Welcome from '../components/Welcome/Welcome.vue'
import Preview from '../components/Preview/Preview.vue'
import Fields from '../components/Fields/Fields.vue'
import Authentication from '../components/Authentication/Authentication.vue'

Vue.use(VueRouter);
let Firebase = fb.Firebase;

const router = new VueRouter({
	mode: 'history',
  routes: [
    {
    	name: 'Welcome',
    	path: '/',
    	component: Welcome,
    	meta: { requiresAuth: false },
    	beforeEnter: (to, from, next) => {
				if (Firebase.auth().currentUser) {
				  next({
				    path: '/fields',
				  });
				} else {
				  next();
				}
			}
    },
    { 
    	name: 'Auth',
    	path: '/authentication', 
    	component: Authentication,
    	meta: { requiresAuth: false },
    	beforeEnter: (to, from, next) => {
				if (Firebase.auth().currentUser) {
				  next({
				    path: '/fields',
				    redirect: to.path
				  });
				} else {
				  next();
				}
			}
    },
    { 
    	name: 'Fields',
    	path: '/fields', 
    	component: Fields,
    	meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (Firebase.auth().currentUser) {
          next();
        } else {
          next({
            path: '/authentication',
            redirect: to.path
          });
        }
      }
    },
    { 
    	name: 'Preview',
    	path: '/preview', 
    	component: Preview,
    	meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (Firebase.auth().currentUser) {
          next();
        } else {
          next({
            path: '/authentication',
            redirect: to.path
          });
        }
      }
    }
  ]
});

export default router;