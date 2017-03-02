<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <loading :loader="isLoading"></loading>
        <div class="preview" v-if="!isLoading">
          <ul class="list-group" v-for="item in results">
            <!-- News List -->
            <li :class="'list-group-item'" v-for="(i, index) in item.hits" v-if="conditions(i)">
              <div class="news_info">
                <div class="text-muted">
                  <span>Author: {{ i.author }}</span>
                </div>
                <a :href="i.url"><h3>{{ i.title }}</h3></a>
                <p :id="'url' + index" class="spiderman small">
                  {{ i.url }}
                  <a class="btn btn-copy btn-text btn-xs" data-placement="right" :data-clipboard-target="'#url' + index" alt="Copy">
                    <i class="fa fa-clipboard" alt="Copy to clipboard">
                  </a>
                </p>
                <span>[ Score: {{ i.points }} ]</span> -
                <span>{{ new Date(i.created_at).toLocaleString() }}</span>
              </div>
            </li>
            <!-- End of News List -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Preview.css"></style>
<script src="./Preview.js" type="text/javascript"></script>
