<template>
  <div id="preview">
    <loading :loader="isLoading"></loading>
    <div class="row preview-wrapper" v-if="!isLoading">
      <div class="p-0 col-xs-12 col-sm-12 col-lg-3">
        <div class="featurette">
          <div class="featurette-heading"><navbar></navbar></div>
          <div class="featurette-container">
            <div class="featurette-message">
              <h6 class="text-center"><b></b></h6>
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

      <div class="p-0 col-xs-12 col-sm-12 col-lg-9">
        <div class="preview">
          <div class="col-md-1 col-lg-1 featurette-filter m-0 p-0">
            <span class="filter" v-for="filter in results">
              <a :id="filter.query.replace(/ /g, '-')" class="btn btn-xs btn-filter" @click="filterNews($event, filter)">
                <i :class="filter.icon"></i>
                <p class="text-truncate">{{ filter.query }}</p>
              </a>
            </span>
          </div>
          <sidebar :results="results"></sidebar>
          <div class="news-container m-0 p-0 col-xs-12 col-sm-12 col-md-12 col-lg-11">
            <div :id="item.query.replace(/ /g,'-')" class="list-group" v-for="item in results">
              <div class="news-category p-3">News related with the topic <span><h5><i :class="item.icon"></i> {{ item.query }}</h5></span></div>
                <div class="list-group-item list-group-item-action" v-for="(i, index) in item.hits" v-if="i.visible">
                  <div class="news">
                    <div class="news-header">
                      <h6 class="text-left"><a class="theme" :href="i.url" target="_blank">{{ i.title }}</a></h6>
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
                      <a class="btn btn-copy btn-tooltip btn-text btn-xs text-muted" @click="copyToClipboard">
                        <small><i class="fa fa-clipboard" alt="Copy to clipboard" /></small>
                        <p class="theme tooltip">Copy URL</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div>
                <p v-for="item in list">
                  Line:
                  <span v-text="item"></span>
                </p>
                <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
              </div> -->
          </div>

          <div class="vn-featurette-footer">
            <p>
              Curated with
              <span><i class="fa fa-heart text-danger"></i> by <a class="cite" href="https://github.com/buraktekin"> Burak Tekin.</a></span> 
              The content of this site is licensed under MIT.<br/>
              <p>Art graphic by <a class="cite" href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a class="cite" href="http://www.flaticon.com/">Flaticon</a> is licensed under <a class="cite" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a class="cite" href="http://logomakr.com" title="Logo Maker">Logo Maker</a></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Preview.css" scoped></style>
<script src="./Preview.js" type="text/javascript"></script>
