import Vue from 'vue'
import VueRouter from 'vue-router'
import fb from './modules/firebase.js'

import App from './App.vue'
import Welcome from './components/Welcome/Welcome.vue'
import Preview from './components/Preview/Preview.vue'
import Fields from './components/Fields/Fields.vue'
import Authentication from './components/Authentication/Authentication.vue'

Vue.use(VueRouter);
var Firebase = fb.Firebase;

const router = new VueRouter({
	mode: 'history',
  routes: [
    {
    	name: 'Welcome',
    	path: '/',
    	component: Welcome,
    	meta: { requiresAuth: false }
    },
    { 
    	name: 'Auth',
    	path: '/authentication', 
    	component: Authentication,
    	meta: { requiresAuth: false }
    },
    { 
    	name: 'Fields',
    	path: '/fields', 
    	component: Fields,  
    	meta: { requiresAuth: true }
    },
    { 
    	name: 'Preview',
    	path: '/preview', 
    	component: Preview,
    	meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
	const toPath = to.path.toLowerCase();
  const fromPath = from.path.toLowerCase();

  console.log(to);
  console.log(from);
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Firebase.auth().currentUser) {
    	next({
    		path: '/authentication',
    		query: null
    	});
    } else {
    	next();
    }
  } else {
    next();
  }
});

// beforeEnter: (to, from, next) => {
//   // react to route changes...
//   // router logic: Users have to be registered
//   if (Firebase.auth().currentUser) {
//     next({
//       path: '/fields',
//       redirect: to.fullPath
//     });
//   } else {
//     next();
//   }
// }

export default router;