<template>
  <div class="container">
    <loading :loader="isLoading"></loading>
    <div class="row">
      <div :class="'transitive ' + changeGrid.parent">
        <div class="fields" v-if="!isLoading">
          <h4 class="text-muted">Please, indicate your interests...</h4>
          <div class="row">
            <div :class="'col-xs-12 col-sm-6 col-md-3 transitive ' + changeGrid.child" v-for="(f, index) in fields">
              <div class="card" @click="addToSelections(index)">
                <div class="card-block">
                  <i v-bind:class="f.icon + ' fa-2x icon'" aria-hidden="true"></i>
                  <h6 class="card-title"><b>{{ f.name }}</b></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="row">
          <transition name="fade">
            <div class="fieldContainer" v-if="selectedFields.length > 0">
              <div class="selectedFields">
                <ul class="list-group">
                  <li class="text-center"><h6><b>Your Selections ({{ selectedFields.length }})</b></h6></li>
                  <li class="field list-group-item" v-for="(item, index) in selectedFields" @click="removeFromSelection(index)">
                    <span style="float:left; width:90%; color: rgb(21, 181, 181);" class="small"><i :class="'small ' + item.item.icon"></i> {{ item.item.name }}</span>
                    <span style="color:rgb(245, 228, 221);float:right; width:10%;" class="fa fa-times"></span>
                  </li>
                </ul>
              </div>
              <span class="done">
                <a :class="'btn btn-default btn-md btn-done'" @click="submitSelection()">Ready!</a>
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
