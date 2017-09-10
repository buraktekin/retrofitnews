import store from '../../store/store.js'
import authHelper from '../Authentication/AuthHelper.js'
import InfiniteLoading from 'vue-infinite-loading'

import Loading from '../Loading/Loading.vue'
import Navbar from '../Navbar/Navbar.vue'
import Sidebar from '../Sidebar/Sidebar.vue'

let Store = store.state;
var counter = 0;

export default {
  name: "Preview",
  components: { Loading, Navbar, InfiniteLoading, Sidebar },

  data() {
    return {
      isLoading: true,
      results: [],
      list: [],
    }
  },

  methods: {
    copyToClipboard(event) {
      let activeEl = $(event.target).closest('a');
      let urlToClipboard = activeEl.prev().text();
      let fakeurl = document.createElement('textarea');
      fakeurl.id = 'fakeurl';
      fakeurl.style.height = 0;
      document.body.appendChild(fakeurl);
      try {
        fakeurl.value = urlToClipboard;
        let selector = document.querySelector('#fakeurl');
        selector.select();
        document.execCommand('copy');
        activeEl.find('p.tooltip').addClass('copied').text('Copied!');
        setTimeout(function () {
          $(".copied").text('Copy URL').removeClass('copied');
        }, 2000);
      } catch(e) {
        authHelper.flashMessage("Oooops! Something went wrong and URL could not be copied.\n", "danger");
      }
      document.body.removeChild(fakeurl);
    },

    // onInfinite() {
    //   this.results.map((items) => {
    //     for(let currentIndex = this.list.length; currentIndex < currentIndex + 20; currentIndex++){
    //       this.list.push(items.hits[currentIndex]);
    //     }
    //   })
    // },
    
    fetchNews() {
      Store.selections.map((category) => {
        let url = `https://hn.algolia.com/api/v1/search_by_date?query=${category.name}&tags=story&hitsPerPage=50`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((res) => {
          res.hits.map((response) => {
            if(response.url == "" || response.url == null) {
              response['visible'] = false;
            } else {
              response['visible'] = true;
            }
          });
          res['id'] = category.id;
          res['icon'] = category.icon;
          this.results.push(res);
        }).then(() => {
          this.isLoading = false;
        }).catch(function() {
          authHelper.flashMessage(
            "OOPS! Something bad happend and we couldn't provide you the results. Please try again.",
            "danger"
          );
        });
      });
    },
    
    dateTime(item) {
      const date = new Date(item.created_at).toLocaleString().split(',');
      return {
        date: date[0],
        time: date[1]
      }
    },
    
    filterNews(event, item) {
      const itemFilter = item.query.replace(/ /g,'-');
      var selector = $(`[id="${itemFilter}"]`);
      selector.toggleClass('remove');
      if(counter < this.results.length - 1) {
        if(selector.hasClass('remove')) {
          counter++;
        } else {
          counter--;
        }
      } else {
        selector = $('span.filter > a').not('.remove');
        selector.attr('disabled', true);
      }

      console.log(counter, this.results.length);
    }
  },

  // Navigation Guards
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchNews();
    });
  },

  beforeRouteLeave(to, from, next) {
    next(false);
    authHelper.flashMessage("<p>You can use <b class='fa fa-cog text-success'></b>\
     - (Settings) - button to make changes.</p>", "info");
  }
  // End of Navigation Guards
}
