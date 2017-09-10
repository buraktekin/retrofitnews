import authHelper from '../Authentication/AuthHelper.js'

import Modal from '../Modal/Modal.vue'

export default {
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
  watch: {
    userActive: function() {
      this.isUserActive;
    }
  },
  components: { Modal },
  methods: {
    isActive() {
      $('#sidebar-wrapper').toggleClass('active');
    },

    getUser() {
      return authHelper.isUserLoggedIn() || { "email": "" };
    },

    isUserActive() {
      return this.getUser() ? true : false;
    },
    
    signOut: function() {
      authHelper.signOut();
    }
  }
}