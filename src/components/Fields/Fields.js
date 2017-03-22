import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"
export default {
  name: "Fields",
  computed: {
    changeGrid: function() {
      if (this.selectedFields.length === 0) {
        return {
          'parent': "col-xs-12 col-sm-6 col-md-8 col-lg-9"
        }
      }
      else {
        return {
          'parent': "col-xs-10 col-sm-4 col-md-6 col-lg-7"
        }
      }
    }
  },
  components: { Loading, Navbar },
  methods: {
    addToSelections(index) {
      // TODO \\
      // Returns an object which has id/index of the
      // selected element and element itself.
      const selected = (function(index, array) {
        const temp = array.splice(index, 1)[0];
        return {
          index: index,
          item: temp
        }
      });
      const item = selected(index, this.fields);
      this.selectedFields.push(item);
    },
    removeFromSelection(index) {
      // Removes the item from selections and inserts
      // back to its original index.
      const item = this.selectedFields.splice(index,1)[0];
      this.fields.splice(item.id, 0, item.item);
    },
    submitSelection() {
      this.$root.$data.data = this.selectedFields;
      this.$router.push('Preview');
    }
  },
  data() {
    return {
      isLoading: true,
      fields: [],
      selectedFields: []
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
  }
}
