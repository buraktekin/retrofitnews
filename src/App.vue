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
  $color: #fc6502;
  body{
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
  }

  .tooltip > .tooltip-inner {color: #42b983 !important;}

  .text-muted {
    color: $color !important;
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
</style>
