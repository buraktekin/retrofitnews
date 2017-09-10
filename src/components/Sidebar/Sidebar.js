import store from '../../store/store.js'

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
      const itemFilter = item.query.replace(/ /g,'-');
      var selector = $(`[id="${itemFilter}"]`);
      if(counter < this.selectedFields.length - 1) {
        selector.toggleClass('remove');
        if(selector.hasClass('remove')) {
          counter++;
        } else {
          counter--;
        }
      } else {
        var selector_button = $('span.filter > a').not('.remove');
        selector_button.attr('disabled', true);
      }
      console.log(counter, this.selectedFields.length);
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