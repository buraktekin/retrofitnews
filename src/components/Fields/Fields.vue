<template>
  <div class="container">
    <loading :loader="isLoading"></loading>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="featurette">
          <navbar></navbar>
          <div class="featurette-message">
            <h1><b>Please, indicate your interests</b></h1>
            <p class="small theme">You might change your selections later.</p>
          </div>
          <div class="featurette-footer">
            <p>
              Curated with <span><i class="fa fa-heart text-danger"></i> by <a class="cite" href="#"> Burak Tekin.</a></span> The content of this site is licensed under MIT.<br/>
              <p>Art graphic by <a class="cite" href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a class="cite" href="http://www.flaticon.com/">Flaticon</a> is licensed under <a class="cite" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a class="cite" href="http://logomakr.com" title="Logo Maker">Logo Maker</a></p>
            </p>
          </div>
        </div>
      </div>
      <div class="transitive col-xs-12 col-sm-6 col-md-8 col-lg-9">
        <div class="fields" v-if="!isLoading">
          <div class="row">
            <div class="col-xs-4 col-sm-6 col-md-3 col-lg-2" v-for="(f, index) in fields">
              <div class="card theme text-center" @click="addToSelections(index)">
                <i v-bind:class="f.icon + ' fa-2x icon'" aria-hidden="true"></i>
                <div class="card-text">
                  <h6><b>{{ f.name }}</b></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <sidebar :selections="selectedFields" :fields="fields"></sidebar>
    </div>
  </div>
</template>

<style src="./Fields.css"></style>
<script src="./Fields.js" type="text/javascript"></script>
