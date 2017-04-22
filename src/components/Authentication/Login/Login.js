import FBApp from '../../../modules/firebase.js'
import authHelper from '../AuthHelper.js'
 
export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		formSubmit(e) {
			e.preventDefault();
			const email = this.email;
			const password = this.password;
			authHelper.signInWithPassword(this.email, this.password);
		}
	}
}