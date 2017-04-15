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
      let errorHandle = this.passErrorMessage;
      const passCheck = this.passwordConfirm(password, passConfirm);
      // Authenticate by Firebase
      if(passCheck.status){
        this.firebaseAuth();
      } else {
        this.passErrorMessage(passCheck.error, 'warning');
      }
    },

    firebaseAuth() {
      let errorHandle = this.passErrorMessage;
      FBApp.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
        errorHandle(errorMessage, "danger");
      }).then(function() {});
    },
    
    passwordConfirm(pass, passConf) {
      const match = pass.length < 6 ? {"status": false, "error": "Password should has at least 6 characters"} : 
                    pass === passConf ? {"status": true} : {"status": false, "error": "Password and Password Confirmation should be matched!"};
      return match;
    },

    passErrorMessage(errorMessage, errorType) {
      Vue.toast(errorMessage, {
        id: "toast",
        duration: 3000,
        className: ['vn-toast', 'toast-'.concat(errorType)]
      });
    }
  }
}