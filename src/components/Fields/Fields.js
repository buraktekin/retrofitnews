import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"
import Router from '../../router.js'
import authHelper from '../Authentication/AuthHelper.js'

export default {
  name: "Fields",
  components: { Loading, Navbar },
  data() {
    return {
      isLoading: true,
      fields: [],
      selectedFields: []
    }
  },

  methods: {
    selectField(event, index) {
      const temp = this.fields[index];
      temp.isActive = !temp.isActive;
      temp.isActive ? this.selectedFields.push(temp) : this.removeField(temp.id);
    },

    removeField(id) {
      const index = this.selectedFields.findIndex(item => item.id === id);
      this.selectedFields.splice(index, 1)[0];
    },

    submitSelection() {
      // TODO: 
      // Decide checking selectedFields has an item inside is important or not?
      this.$root.data = this.selectedFields;
      Router.push('Preview');
    },

    signOut() {
      authHelper.signOut();
    }
  },

  created() {
    setTimeout(() => {
      fetch('./data.json')
      .then((res) => { return res.json() })
      .then((res) => {
        this.fields = res.data;
        this.isLoading = false;
      })
    }, 1000)
  },

  beforeRouteLeave (to, from, next) {
    // vue-router built-in method.
    // Avoid geniuses to go to 'preview' without any selection
    this.selectedFields.length > 1 ? next() : authHelper.flashMessage(
      "Please select at least 1 category.", 'info');
  }
}
