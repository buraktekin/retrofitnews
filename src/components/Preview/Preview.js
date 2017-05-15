import store from '../../store/store.js'
import authHelper from '../Authentication/AuthHelper.js'
import InfiniteLoading from 'vue-infinite-loading';

import Loading from '../Loading/Loading.vue'
import Navbar from '../Navbar/Navbar.vue'

let Store = store.state;

export default {
  name: "Preview",
  components: { Loading, Navbar, InfiniteLoading },

  data() {
    return {
      isLoading: true,
      results: [],
      list: []
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
        alert("Oooops! Something went wrong and URL could not be copied.\n" + e);
      }
      document.body.removeChild(fakeurl);
    },

    onInfinite() {

      Store.selections.map((category) => {
        let url = `https://hn.algolia.com/api/v1/search_by_date?query=${category.name}&tags=story`;
        fetch(url, {
          params: {
            page: this.list.length / 20 + 1
          },
        }).then((res) => { 
          return res.json() 
        }).then((res) => {
          console.log(res);
          res.hits.map((response) => {
            if(response.url == "" || response.url == null) {
              response['visible'] = false;
            } else {
              response['visible'] = true;
            }
          });
        }).then((res) => {
          res.map((item) => {
            this.list.push(item);
          });
          
          
          // if (res.data.hits.length) {
          //   this.list = this.list.concat(res.data.hits);
          //   this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          //   if (this.list.length / 20 === 10) {
          //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          //   }
          // } else {
          //   this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          // }


        }).then((res) => {
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
    
    fetchNews() {
      Store.selections.map((category) => {
        let url = `https://hn.algolia.com/api/v1/search_by_date?query=${category.name}&tags=story&hitsPerPage=200`;
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
          // this.results.push(res);
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
    
    filterNews(item) {
      const itemFilter = item.query.replace(/ /g,'-');
      $(`[id="${itemFilter}"]`).toggleClass('remove');
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
