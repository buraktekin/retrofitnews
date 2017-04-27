import fb from '../../modules/firebase.js'
import Router from '../../router.js'

var Firebase = fb.Firebase;
var Database = fb.Database;

var authHelp = {
  Firebase: fb.Firebase,
  Database: fb.Database,

  firebaseAuth: function(email, password) {
    let errorHandle = this.flashMessage;
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userData) => {
      this.writeUserData(userData.uid, this.getName(userData), userData.email);
      this.signInWithPassword(email, password);
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      errorHandle(errorMessage, "danger");
    });
  },

  signInWithPassword: function(email, password) {
    return Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userData) => {
      this.onSignedIn();
    }).catch((error) => { 
      this.errorMessage = error.message;
      this.flashMessage(error.message, 'danger');
    });
  },

  onSignedIn: function() {
    Router.go({
      path: '/fields'
    });
  },

  signOut: function() {
    if (confirm('Are you sure you want to sign out?')) {
      let flashMessage = this.flashMessage;
      Firebase.auth().signOut().then(function() {
        Router.go({
          path: '/'
        });
      }).catch(function(error) {
        flashMessage(error.message, "danger");
      });
    } else {}
  },

  getName: function(userData) {
    switch(userData.providerData[0].providerId) {
       case 'password':
         return userData.email.replace(/@.*/, '');
       // TODO: Auth options should be implemented.
       case 'twitter':
         return userData.twitter.displayName;
       case 'facebook':
         return userData.facebook.displayName;
    }
  },

  // DATABASE 
  writeUserData: function(userId, name, email) {
    Database.ref('users/' + userId).set({
      'username': name,
      'email': email
    });
  },
  // END of DATABASE

  // MESSAGE FLASHING
  flashMessage: function(errorMessage, errorType) {
    Vue.toast('<i class="fa fa-exclamation-triangle fa-3x"></i>' +  errorMessage, {
      id: "toast",
      duration: 3000,
      className: ['vn-toast', 'toast-'.concat(errorType)]
    });
  }
  // END of MESSAGE FLASHING
}

export default authHelp;