<template>
  <div class="top-wrapper" v-if="isLoading">
    <div class="wrapper">
      <div class="loading">
        <h1>Loading...</h1>
        <i class="fa fa-hacker-news fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i><br />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'loader' ],
    data() {
      return {
        isLoading: this.loader
      }
    },
    methods: {
      started () {
        console.log(this.isLoading);
      }
    },
    watch : {
      loader : function (value) {
        this.isLoading = value;
      }
    }
  }
</script>

<style>
  .top-wrapper{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
    left: 0;
    top: 0;
    z-index: 9999;
  }
  .loading {
    color: rgba(220, 98, 109, .8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
