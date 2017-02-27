<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h1>News</h1>
        <div class="preview">
          <ul class="list-group" v-for="item in results">
            <li class="list-group-item" v-for="(i, index) in item.hits">
              <a :href="i.url"><h6><b>{{ i.title }}</b></h6></a>
              <small>Author: {{ i.author }}</small>
              <p class="small">
                {{ new Date(i.created_at).toLocaleString() }}
              </p>
              <small>Score: {{ i. points }}</small>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <h1>Favorites</h1>
        <div class="preview">
          <ul class="list-group" v-for="item in results">
            <li class="list-group-item">
              <a><h6><b>{{ item.hits[0] }}</b></h6></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Preview",
    data() {
      return {
        selectedFields: this.$root.$data,
        results: []
      }
    },
    methods: {
      fetchNews(array) {
        const news = [];
        array.data.map(function(x) {
          const url = `http://hn.algolia.com/api/v1/search?query=${x.item.name}&tags=story&hitsPerPage=1000`;
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
      this.fetchNews(this.selectedFields)
    }
  }
</script>

<style>
  #app > div > div > div > div.preview {
    height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    color: #FFF !important;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.5);
    background-color: rgba(76, 31, 78, 0.5);
  }
  .preview ul {
    left: 0;
    width: 100%;
    background: none;
  }
  .preview li {
    color: #FFF;
    width: 100%;
    text-align: left;
    background: none;
    list-style: none;
  }

  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }
    @include media-breakpoint-only(xl) {
      column-count: 5;
    }
  }
</style>
