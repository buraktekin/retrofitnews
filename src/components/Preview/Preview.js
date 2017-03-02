import Loading from '../Loading/Loading.vue'
export default {
  name: "Preview",
  data() {
    return {
      isLoading: true,
      selectedFields: this.$root.$data,
      results: []
    }
  },
  components: { Loading },
  methods: {
    conditions(i) {
      if((i.url === null) || (i.url === "")){
        return false;
      }
      else {
        return true;
      }
    },
    fetchNews(array) {
      const news = [];
      array.data.map(function(x) {
        const url = `http://hn.algolia.com/api/v1/search_by_date?query=${x.item.name}&tags=story&hitsPerPage=1000`;
        fetch(url)
        .then((res) => { return res.json() })
        .then((res) => {
          news.push(res);
        })
      })
      this.results = news;
    }
  },
  created() {
    setTimeout(() => {
      this.fetchNews(this.selectedFields);
      this.isLoading = false;
    }, 1000)
  }
}
