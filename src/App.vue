<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	global.jQuery = require('jquery');
	var $ = global.jQuery;
	window.$ = $;
	
  export default {
    name: 'App'
  }
</script>

<style src="./App.css"></style>
