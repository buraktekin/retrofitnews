import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Clipboard from 'clipboard'
import Preview from './components/Preview/Preview.vue'
import Fields from './components/Fields/Fields.vue'

Vue.use(VueRouter);

const followed = [];
const router = new VueRouter({
  routes: [
    { path: '/', component: Fields },
    { path: '/preview', component: Preview }
  ],
  mode: 'history'
})
// Clipboard
var clipboard = new Clipboard('.btn-copy');
function setTooltip(btn, message) {
  $(btn).attr('data-original-title', message)
    .tooltip('show');
}
function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide').removeAttr("data-original-title");
  }, 1000);
}
clipboard.on('success', function(e) {
  setTooltip(e.trigger, 'Copied!');
  hideTooltip(e.trigger);
});
clipboard.on('error', function(e) {
  setTooltip(e.trigger, 'Failed!');
  hideTooltip(e.trigger);
});
// Initialize New Vue Object
new Vue({
  el: '#app',
  data() {
    return {
      data: followed
    }
  },
  render: h => h(App),
  router
})
