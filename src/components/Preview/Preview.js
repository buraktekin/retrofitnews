import Loading from '../Loading/Loading.vue'
import Navbar from '../Navbar/Navbar.vue'
import 'whatwg-fetch'

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
    fetchNews(array) {
      const news = [];
      array.data.map(function(x) {
        const url = `http://hn.algolia.com/api/v1/search_by_date?query=${x.item.name}&tags=story&hitsPerPage=1000`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((res) => {
          if((res.hits.map !== null) || (res.url !== "")){
            res['icon'] = x.item.icon;
            news.push(res);
          }
        })
      })
      this.results = news;
      this.isLoading = false;
    },
    dateTime(item) {
      const date = new Date(item.created_at).toLocaleString().split(',');
      return {
        date: date[0],
        time: date[1]
      }
    },
    filter(item) {
      console.log(item);
      item = item.replace(/ /g, '-');
      $("#"+item).toggleClass('checked');
      $(".list-group-item#"+item).toggleClass('remove');
    }
  },
  created() {
    // TODO: this part should fetch news from DB||Firebase \\
    setTimeout(() => {
      this.fetchNews(this.selectedFields);
    }, 1000)
  }
}
