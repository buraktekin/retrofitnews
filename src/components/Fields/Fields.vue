<template>
  <div id="fields">
    <loading :loader="isLoading"></loading>
    <div class="container" v-if="!isLoading">
      <div class="row">
        <div class="field-wrapper">
          <div class="featurette">
            <navbar></navbar>
            <div class="featurette-message">
              <h2 class="text-theme"><b>Please, indicate your interests</b></h2>
              <h4 class="theme">You might change your selections later.</h4>
            </div>
            <div class="featurette-footer">
              <p>
                Curated with <span><i class="fa fa-heart text-danger"></i> by <a class="cite" href="#"> Burak Tekin.</a></span> The content of this site is licensed under MIT.<br/>
                <p>Art graphic by <a class="cite" href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a class="cite" href="http://www.flaticon.com/">Flaticon</a> is licensed under <a class="cite" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a class="cite" href="http://logomakr.com" title="Logo Maker">Logo Maker</a></p>
              </p>
            </div>
          </div>

          <div class="transitive">
            <div class="done" v-if="selectedFields.length > 0">
              <a class="btn btn-default btn-md btn-done" @click="submitSelection">Ready!</a>
            </div>
            <div class="fields">
              <div class="row">
                <div class="col-6 col-sm-12 col-md-4 col-lg-3 col-xl-2" v-for="(field, index) in fields">
                  <div class="card card-fields theme text-center" v-bind:class="{ active: field.isActive }" v-on:click="selectField($event,index)">
                    <i v-bind:class="field.icon + ' fa-2x icon'" aria-hidden="true"></i>
                    <div class="card-text">
                      <h6><b>{{ field.name }}</b></h6>
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

<style src="./Fields.css"></style>
<script src="./Fields.js" type="text/javascript"></script>
