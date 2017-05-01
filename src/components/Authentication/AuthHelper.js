import fb from '../../modules/firebase.js'
import Router from '../../router/router.js'

var authHelp = {
  Firebase: fb.Firebase,
  Database: fb.Database,

  // AUTHENTICATION
  firebaseAuth: function(email, password) {
    let errorHandle = this.flashMessage;
    this.Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userData) => {
      this.writeUserData(userData.uid, this.getName(userData), userData.email, "");
    })
    .then((userData) => {
      this.signInWithPassword(email, password);
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      errorHandle(errorMessage, "danger");
    });
  },

  signInWithPassword: function(email, password) {
    return this.Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => { 
      this.onSignedIn();
    }).catch((error) => { 
      this.errorMessage = error.message;
      this.flashMessage(error.message, 'danger');
    });
  },

  onSignedIn: function() {
    Router.push({
      path: '/fields'
    });
  },

  signOut: function() {
    this.Firebase.auth().signOut().then(function() {
      Router.go({
        path: '/'
      });
    }).catch(function(error) {
      flashMessage(error.message, "danger");
    });
  },

  isUserLoggedIn: function() {
    return this.Firebase.auth().currentUser;
  },
  // End of AUTHENTICATION

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
  updateUserData: function(uid, name, email, fields) {
    // Get a key for a new User.
    var updates = {};
    var userData = { uid, name, email, fields };
    updates['/users/' + uid] = userData;
    return this.Database.ref().update(updates)
    .then(function() {
      console.log("Update succsessfull!", "success");
    }, function(error) {
      this.flashMessage(error.message, "danger");
    });
  },

  writeUserData: function(uid, name, email, fields) {
    return this.Database.ref('/users/' + uid).set({
      uid,
      name,
      email,
      fields
    });
  },

  readUserData: function(path, container) {
    return this.Database.ref(path).once('value').then(function(snapshot) {
      snapshot.val().forEach(function(snap) {
        container.push(snap);
      });
    }, function(error) {
      this.flashMessage(error.message, "danger");
    });
  },

  getStoredData: function() {
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