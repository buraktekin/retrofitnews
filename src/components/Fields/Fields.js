import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"
import Sidebar from "../Sidebar/Sidebar.vue"
import 'whatwg-fetch'

export default {
  name: "Fields",
  components: { Loading, Navbar, Sidebar },
  methods: {
    addToSelections(index) {
      // TODO \\
      // Returns an object which has id/index of the
      // selected element and element itself.
      const selected = (function(index, array) {
        const temp = array.splice(index, 1)[0];
        return {
          item: temp
        }
      });
      const item = selected(index, this.fields);
      this.selectedFields.push(item);
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
