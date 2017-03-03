<template>
  <div class="container">
    <loading :loader="isLoading"></loading>
    <div class="row">
      <div :class="changeGrid">
        <div class="fields" v-if="!isLoading">
          <h1>Please, indicate your interests...</h1>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" v-for="(f, index) in fields">
              <div class="card" @click="addToSelections(index)">
                <div class="card-block">
                  <i v-bind:class="f.icon + ' fa-2x icon'" aria-hidden="true"></i>
                  <h6 class="card-title">{{ f.name }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="row">
          <transition name="fade">
            <div v-if="selectedFields.length > 0">
              <div class="selectedFields">
                <ul class="list-group">
                  <li class="text-center"><h6>Your Selections</h6></li>
                  <li class="field list-group-item" v-for="(item, index) in selectedFields" @click="removeFromSelection(index)">
                    <span style="float:left; width:90%;" class="small">{{ item.item.name }}</span>
                    <span style="color:#f60;float:right; width:10%;" class="fa fa-times"></span>
                  </li>
                </ul>
              </div>
              <span class="done">
                <a :class="'btn btn-default btn-sm btn-done'" @click="submitSelection()">Ready!</a>
               </span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Fields.css"></style>
<script src="./Fields.js" type="text/javascript"></script>
