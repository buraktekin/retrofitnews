import FBApp from '../../modules/firebase.js'
import Router from '../../router.js'

var authHelp = {
  firebaseAuth: function(email, password) {
    let errorHandle = this.flashMessage;
    FBApp.auth().createUserWithEmailAndPassword(email, password)
    .then(() => this.signInWithPassword(email, password))
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      errorHandle(errorMessage, "danger");
    });
  },

  signInWithPassword: function(email, password) {
    return FBApp.auth().signInWithEmailAndPassword(email, password)
    .then((userData) => {
      this.onSignedIn();
    }).catch((error) => { 
      this.errorMessage = error.message;
      this.flashMessage(error.message, 'danger');
    });
  },

  onSignedIn: function() {
    Router.push('/fields');
  },

  signOut: function() {
    let flashMessage = this.flashMessage;
    FBApp.auth().signOut().then(function() {
      window.location.href = '/';
    }).catch(function(error) {
      flashMessage(error.message, "danger");
    });
  },

  flashMessage: function(errorMessage, errorType) {
    Vue.toast('<i class="fa fa-exclamation-triangle fa-3x"></i>' +  errorMessage, {
      id: "toast",
      duration: 3000,
      className: ['vn-toast', 'toast-'.concat(errorType)]
    });
  }
}

export default authHelp;