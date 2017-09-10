import store from '../../store/store.js'
import FilterNews from '../../modules/filter.js'

let Store = store.state;
var counter = 0;

export default {
  props: ['results'],
  data() {
    return {
      selectedFields: this.results
    }
  },
  methods: {
    filterNews(event, item) {
      FilterNews.filterNews(event, item, this.selectedFields);
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
  }
}