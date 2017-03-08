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
    width: 100vw;
    height: 100vh;
    font-family: 'Hind Guntur', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url(http://www.shivammediaworks.com/gallery_gen/4ef078c6c1028f8599431d92bfaffbc2_1950x1096.7492260062.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 0px;
  }

  h1, h2 {
    font-weight: normal;
  }

  h6 {
    margin: 10px !important;
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
  }

  a, a:hover {
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
