import Vue from 'vue'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import fb from './modules/firebase.js'
import router from './router.js'

window.Vue = Vue;
Vue.use(Toast);

var $ = global.jQuery;
window.$ = $;

var Firebase = fb.Firebase;

Firebase.auth().onAuthStateChanged(() => {
	console.log(Firebase.auth().currentUser);
	// Initialize New Vue Object
	new Vue({
	  el: '#app',
	  data() {
	    return { 
	      data: [],
	      user: {}
	    }
	  },
	  render: h => h(App),
	  router
	});
});
