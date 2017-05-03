<template>
  <div class="top-wrapper" v-if="isLoading">
    <div class="wrapper">
      <div class="loading">
        <h1 class="display1">
          <i class="fa fa-hacker-news fa-spinner fa-pulse fa-3x fa-fw"></i><br />
        </h1>
        <h3>Loading...</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'loader' ],
    data() {
      return {
        isLoading: true
      }
    },
    watch : {
      loader : function() {
        this.isLoading = this.loader;
      }
    }
  }
</script>

<style scoped>
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
    text-align: center;
    color: rgba(113, 87, 169, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .loading > i {
    position: static;
    opacity: 1;
  }
</style>
