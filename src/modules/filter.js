var counter = 0;
var filter = {
  filterNews(event, item, data) {
    const itemFilter = item.query.replace(/ /g,'-');
    var selector = $(`[id="${itemFilter}"]`);

    if(counter < data.length - 1) {
      selector.toggleClass('remove');
      if(selector.hasClass('remove')) {
        counter++;
      } else {
        counter--;
      }
    } else {
      if(selector.hasClass('remove')) {
        selector.toggleClass('remove');
        counter--;
      }
      var selector_button = $('span.filter > a').not('.remove');
      selector_button.attr('disabled', true);
    }
  }
};

export default filter;