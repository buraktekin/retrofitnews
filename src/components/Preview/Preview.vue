<template>
  <div class="container">
    <loading :loader="isLoading"></loading>
    <div class="row">
      <div class="col-lg-3">
        <div class="featurette">
          <navbar></navbar>
          <div class="featurette-container">
            <div class="featurette-message">
              <h6 class="text-center"><b>Filter your selections</b></h6>
              <hr />
            </div>
            <div class="featurette-bookmark mx-auto">
              <span class="bookmark" v-for="bookmark in selectedFields.data">
                <button :id="bookmark.item.name.replace(/ /g, '-')" class="btn btn-xs btn-filter" @click="filter(bookmark.item.name)">
                  <i :class="bookmark.item.icon"></i>
                  <p class="text-truncate">{{ bookmark.item.name }}</p>
                </button>
              </span>
            </div>
          </div>
          <div class="featurette-footer">
            <p>
              Curated with <span><i class="fa fa-heart text-danger"></i> by <a class="cite" href="#"> Burak Tekin.</a></span> The content of this site is licensed under MIT.<br/>
              <p>Art graphic by <a class="cite" href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a class="cite" href="http://www.flaticon.com/">Flaticon</a> is licensed under <a class="cite" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a class="cite" href="http://logomakr.com" title="Logo Maker">Logo Maker</a></p>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="preview" v-if="!isLoading">
          <div class="news-container">
            <div class="list-group" v-for="item in results">
              <div class="news-category p-3">News related with the topic <span><h5><i :class="item.icon"></i> {{ item.query }}</h5></span></div>
              <div :id="item.query.replace(/ /g, '-')" class="list-group-item list-group-item-action" v-for="(i, index) in item.hits">
                <div class="news">
                  <div class="news-header">
                    <h6 class="text-left"><a :href="i.url">{{ i.title }}</a></h6>
                    <small>
                      <i class="fa fa-calendar text-primary"></i> : {{ dateTime(i).date }} | 
                      <i class="fa fa-clock-o text-danger"></i> : {{ dateTime(i).time }} |
                      <i class="fa fa-user text-success"></i> : {{ i.author }}
                    </small>
                  </div>
                  <div class="news-content">
                  </div>
                  <div class="news-footer">
                    <p :id="'url' + index" class="urls small">
                      {{ i.url }}
                    </p>
                    <a class="btn btn-copy btn-text btn-xs text-muted" data-placement="right" :data-clipboard-target="'#url' + index" alt="Copy">
                      <small><i class="fa fa-clipboard" alt="Copy to clipboard" /></small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Preview.css" scoped></style>
<script src="./Preview.js" type="text/javascript"></script>
