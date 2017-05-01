var store = {
	name: 'Store',
  state: {
  	selections: []
  },
  setNewField (field) {
    this.state.selections.push(field);
  },
  removeField (field) {
  	const index = this.state.selections.findIndex(item => item.id === field.id);
    this.state.selections.splice(index, 1);
  }
};

export default store;