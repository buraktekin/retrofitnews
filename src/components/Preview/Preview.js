import store from '../../store/store.js'
import authHelper from '../Authentication/AuthHelper.js'

import Loading from '../Loading/Loading.vue'
import Navbar from '../Navbar/Navbar.vue'

let Store = store.state;

export default {
  name: "Preview",
  components: { Loading, Navbar },

  data() {
    return {
      isLoading: true,
      selectedFields: Store.selections,
      results: []
    }
  },

  created() {
    this.fetchNews(this.selectedFields);
  },

  mounted() {
    this.isLoading = false;
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
    
    fetchNews(array) {
      const news = [];
      array.map(function(category) {
        let url = `http://hn.algolia.com/api/v1/search_by_date?query=${category.name}&tags=story&hitsPerPage=100`;
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
          news.push(res);
        }).catch(function() {
          authHelper.flashMessage(
            "OOPS! Something bad happend and we couldn't provide you the results. Please try again.",
            "danger"
          );
        });
      });
      this.results = news;
    },
    
    dateTime(item) {
      const date = new Date(item.created_at).toLocaleString().split(',');
      return {
        date: date[0],
        time: date[1]
      }
    },
    
    filterNews(item) {
      const item_filter = item.name.replace(/ /g,'-');
      $("[id="+item_filter+"]").toggleClass('remove');
    }
  },

  // Navigation Guards
  beforeRouteLeave(to, from, next) {
    next(false);
    authHelper.flashMessage("<p>You can use <b class='fa fa-cog text-success'></b>\
     - (Settings) - button to make changes.</p>", "info");
  }
  // End of Navigation Guards
}
