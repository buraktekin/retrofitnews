import authHelper from '../Authentication/AuthHelper.js'

import Modal from '../Modal/Modal.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      userActive: this.isUserActive(),
      modal: {
        title: 'Proceeding Sign Out',
        body: 'Are you 100% sure to sign out, dude?',
        button: 'Yes, please!',
        event: this.signOut
      }
    }
  },
  components: { Modal },
  methods: {
    getUser() {
      return authHelper.Firebase.auth().currentUser;
    },

    isUserActive() {
      return this.getUser() ? true : false;
    },
    
    signOut: function() {
      authHelper.signOut();
    }
  }
}