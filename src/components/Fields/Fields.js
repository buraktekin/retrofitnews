import Loading from "../Loading/Loading.vue"
import Navbar from "../Navbar/Navbar.vue"

export default {
  name: "Fields",
  components: { Loading, Navbar },
  methods: {
    selectField(event, index) {
      const temp = this.fields[index];
      temp.isActive = !temp.isActive;
      temp.isActive ? this.selectedFields.push(temp) : this.removeField(temp.id);
      this.sortArray(this.selectedFields);
    },
    removeField(id) {
      const index = this.selectedFields.findIndex(item => item.id === id);
      this.selectedFields.splice(index, 1)[0];
    },
    submitSelection() {
      this.$root.$data.data = this.selectedFields;
      this.$router.push('Preview');
    },
    sortArray(array) {
      array.sort(function(a, b) {
        return a.id - b.id;
      });
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
