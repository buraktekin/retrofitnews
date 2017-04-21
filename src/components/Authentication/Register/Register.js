import FBApp from '../../../modules/firebase.js'

export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
      passConfirm: ''
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      const email = this.email;
      const password = this.password;
      const passConfirm = this.passConfirm;
      const passCheck = this.passwordConfirm(password, passConfirm);
      // Authenticate by Firebase if credentials are ok.
      if(passCheck.status){
        this.firebaseAuth();
      } else {
        this.passErrorMessage(passCheck.message, 'warning');
      }
    },

    firebaseAuth() {
      let errorHandle = this.passErrorMessage;
      FBApp.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => this.signInWithPassword())
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        errorHandle(errorMessage, "danger");
      });
    },

    signInWithPassword() {
      return FBApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((userData) => {
        this.onSignedIn();
        console.log(userData);
      }).catch((error) => { this.errorMessage = error.message });
    },

    onSignedIn() {
      this.$router.push('/fields');
    },
    
    passwordConfirm(pass, passConf) {
      const match = pass.length < 6 ? {"status": false, "message": "<i class='fa fa-exclamation-triangle fa-3x'></i> <p>Password should has at least 6 characters</p>"} : 
                    pass === passConf ? {"status": true, "message": "<i class='fa fa-exclamation-triangle fa-3x'></i> <p>Thank you for being registered. Have fun!</p>"} :
                    {"status": false, "message": "<i class='fa fa-exclamation-triangle fa-3x'></i> <p>Password and Password Confirmation should be matched!</p>"};
      return match;
    },

    passErrorMessage(errorMessage, errorType) {
      Vue.toast(errorMessage, {
        id: "toast",
        duration: 2000,
        className: ['vn-toast', 'toast-'.concat(errorType)]
      });
    }
  }
}