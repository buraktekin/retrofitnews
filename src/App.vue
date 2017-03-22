<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  $color: rgba(255, 255, 234, 1);
  body{
    width: 100%;
    height: 100%;
    font-family: 'Hind Guntur', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-repeat: no-repeat;
  }
  #app:before {
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    content: ' ';
    /*background: rgba(0, 0, 0, 0.2);*/
    background: rgba(78, 88, 177, 0.53);
  }
  #app {
    width: 100%;
    height: 100%;
    background: url(https://farm2.staticflickr.com/1590/24994155621_dce78df3b8_k.jpg);
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  p{
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }

  a, a:hover {
    text-decoration: none !important;
    outline: none;
    cursor: pointer;
    color: #42b983;
  }

  div[class~="col-lg-2"] {
    padding: 0 0.25rem;
  }

  .tooltip > .tooltip-inner {
    color: #42b983 !important;
  }

  .text-muted {
    color: $color !important;
  }
</style>
