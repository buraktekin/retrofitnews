import Vue from 'vue'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import fb from './modules/firebase.js'
import router from './router/router.js'
import store from './store/store.js'

window.$ = $;
window.Vue = Vue;
Vue.use(Toast);

var Firebase = fb.Firebase;

Firebase.auth().onAuthStateChanged(() => {
	// check user's authentication status
	// Initialize New Vue Object
	new Vue({
	  el: '#app',
	  data() {
	    return { 
	      data: [],
	      user: Firebase.auth().currentUser
	    }
	  },
	  render: h => h(App),
	  router
	});
});
