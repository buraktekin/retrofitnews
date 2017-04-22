import FBApp from '../../../modules/firebase.js'
import authHelper from '../AuthHelper.js'

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
        authHelper.firebaseAuth(this.email, this.password);
      } else {
        authHelper.flashMessage(passCheck.message, 'warning');
      }
    },
    
    passwordConfirm(pass, passConf) {
      const match = pass.length < 6 ? {"status": false, "message": "<p>Password should has at least 6 characters</p>"} : 
                    pass === passConf ? {"status": true, "message": "<p>Thank you for being registered. Have fun!</p>"} :
                    {"status": false, "message": "<p>Password and Password Confirmation should be matched!</p>"};
      return match;
    },
  }
}