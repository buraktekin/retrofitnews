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
	// check user's authentication status
	// Initialize New Vue Object
	new Vue({
	  el: '#app',
	  data() {
	    return { 
	    	user,
	      state: this.fetchData(),
	      selectionsDone: false
	    }
	  },
	  methods: {
	  	fetchData() {
	  		if(user) {
	  			authHelper.Database.ref('/users/' + user.uid).once('value')
	  			.then(function(snapshot) {
	  				snapshot.val().fields.forEach(snap => {
	  					store.state.selections.push(snap);
	  				});
	  			}).catch(function() {
	  				authHelper.flashMessage(
	  					"OOPS! Something bad happend and we couldn't \
	  					provide you the results. Please try again later.",
	  					"danger"
	  				);
	  			});
	  		}
	  		return store.state.selections;
	  	}
	  },
	  render: h => h(App),
	  router
	});
});
