import Loading from '../Loading/Loading.vue'
import Navbar from '../Navbar/Navbar.vue'

export default {
  name: "Preview",
  data() {
    return {
      isLoading: true,
      selectedFields: this.$root.$data,
      results: []
    }
  },
  components: { Loading, Navbar },
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
      array.data.map(function(x) {
        const url = `http://hn.algolia.com/api/v1/search_by_date?query=${x.name}&tags=story&hitsPerPage=100`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((res) => {
          res.hits.map((y) => {
            if(y.url == "" || y.url == null) {
              y['visible'] = false;
            } else {
              y['visible'] = true;
            }
          });
          res['id'] = x.id;
          res['icon'] = x.icon;
          news.push(res);
        })
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
    },
    sortArray(array) {
      array.sort(function(a, b) {
        return a.id - b.id;
      });
    }
  },
  created() {
    // TODO: this part should fetch news from DB||Firebase \\
    setTimeout(() => {
      this.fetchNews(this.selectedFields);
    }, 1000);
    this.isLoading = false;
  }
}
