import fb from '../../modules/firebase.js'
import Router from '../../router.js'
import authHelper from '../Authentication/AuthHelper.js'

import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"

var Firebase = fb.Firebase;

export default {
  name: "Fields",
  components: { Loading, Navbar },

  data() {
    return {
      isLoading: true,
      fields: [],
      selectedFields: []
    }
  },

  created() {
    fetch('./data.json')
    .then((res) => { return res.json() })
    .then((res) => { this.fields = res.data; })
    .then(()=>{
      this.isLoading = false;
    }).catch(function() {
      authHelper.flashMessage(
        "OOPS! Something bad happend and we couldn't provide you the results. Please try again.",
        "danger"
      );
    });
  },

  methods: {
    selectField(event, index) {
      const temp = this.fields[index];
      temp.isActive = !temp.isActive;
      temp.isActive ? this.selectedFields.push(temp) : this.removeField(temp.id);
      console.log(this.selectedFields.length)
    },

    removeField(id) {
      const index = this.selectedFields.findIndex(item => item.id === id);
      this.selectedFields.splice(index, 1)[0];
    },

    submitSelection() {
      // TODO: 
      // Decide checking selectedFields has an item inside is important or not?
      this.$root.data = this.selectedFields;
      Router.push('/preview');
    },

    signOut() {
      authHelper.signOut();
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
      if(Firebase.auth().currentUser) {
        authHelper.flashMessage('Please select at least one category to go on.', 'warning');
        next(false);
      } else {
        next();
      }
    }
  }
}