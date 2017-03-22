<template>
  <div class="container">
    <loading :loader="isLoading"></loading>
    <div class="row">
      <div class="col-lg-2">
        <navbar></navbar>
      </div>
      <div class="col-lg-10">
        <div class="preview" v-if="!isLoading">
          <div class="card-deck">
            <div class="card-container" v-for="item in results">
              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-6" v-for="(i, index) in item.hits" v-if="conditions(i)">
                  <div class="card">
                    <div class="card-header">
                      <h4><a :href="i.url">{{ i.title }}</a></h4>
                      <span class="small">{{ new Date(i.created_at).toLocaleString() }}</span>
                      <!-- <span class="pull-right">[ Score: {{ i.points }} </span> -->
                      <span class="small text-muted pull-right">({{ i.author }})</span>
                    </div>
                    <div class="card-footer">
                      <p :id="'url' + index" class="urls small">
                        {{ i.url }}
                      </p>
                      <a class="btn btn-copy btn-text btn-xs" data-placement="right" :data-clipboard-target="'#url' + index" alt="Copy" title="Copy URL">
                        <i class="fa fa-clipboard" alt="Copy to clipboard" />
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
  </div>
</template>

<style src="./Preview.css" scoped></style>
<script src="./Preview.js" type="text/javascript"></script>
