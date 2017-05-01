import fb from '../../modules/firebase.js'
import Router from '../../router/router.js'
import authHelper from '../Authentication/AuthHelper.js'
import store from '../../store/store.js'

import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"

let Store = store.state

export default {
  name: "Fields",
  components: { Loading, Navbar },

  data() {
    return {
      isLoading: true,
      fields: [],
      selectedFields: store.state.selections
    }
  },

  created() {
    authHelper.Database.ref('/data').once('value').then(function(snapshot) {
      return snapshot.val();
    }).then((res) => {
      this.fields = res;
    }).then(() => {
      this.isLoading = false;
    }).catch(function() {
      authHelper.flashMessage(
        "OOPS! Something bad happend and we couldn't provide you the results. Please try again later.",
        "danger"
      );
    });
  },

  methods: {
    selectField(event, index) {
      const temp = this.fields[index];
      temp.isActive = !temp.isActive;
      temp.isActive ? store.setNewField(temp) : store.removeField(temp);
      this.selectedFields = store.state.selections
    },

    submitSelection() {
      let user = authHelper.isUserLoggedIn();
      authHelper.updateUserData(user.uid, authHelper.getName(user), user.email, this.selectedFields);
      Router.push('/preview');
    },

    signOut() {
      authHelper.signOut();
    }
  },

  // Navigation Guards
  beforeRouteEnter: (to, from, next) => {
    if (authHelper.isUserLoggedIn()) {
      next(vm => {
        setTimeout(() => {
          if(vm.selectedFields.length > 0) {
            return {
              path: 'preview',
              redirect: to.path
            }
          } else {
            return {};
          }
        }, 1000);
      });
    } else {
      next({ 
        path: '/authentication',
        redirect: to.path
      });
    }
  },

  beforeRouteLeave(to, from, next) {
    if(this.selectedFields.length > 0) {
      if(to.fullPath == '/'){
        authHelper.flashMessage("Please use 'Ready!' button to continue", "warning");
        next(false);
      } else {
        next();
      }
    } else {
      if(authHelper.isUserActive()) {
        authHelper.flashMessage('Please select at least one category to go on.', 'warning');
        next(false);
      } else {
        next();
      }
    }
  }
  // End of Navigation Guards
}