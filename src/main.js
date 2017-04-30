import Vue from 'vue'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import authHelper from './components/Authentication/AuthHelper.js'

window.$ = $;
window.Vue = Vue;
Vue.use(Toast);

var Firebase = authHelper.Firebase;
Firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		authHelper.Database.ref('/users/' + user.uid).once('value').then(function(snapshot) {
			console.log(user.uid, snapshot.val());
		});
	}
	// check user's authentication status
	// Initialize New Vue Object
	new Vue({
	  el: '#app',
	  data() {
	    return { 
	      state: store.state,
	      user
	    }
	  },
	  render: h => h(App),
	  router
	});
});
