export default {
  props: [ 'selections', 'fields' ],
  data() {
    return {
      selectedFields: this.selections
    }
  },
  computed: {
  	isActive: function() {
  		if(this.selectedFields.length > 0){
  			return "active";
  		} else {
  			return "";
  		}
  	}
  },
  methods: {
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