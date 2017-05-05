<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>	
  export default {    
    name: 'App',
    data () {
    return {
		    transitionName: 'component-fade'
		  }
		},
		beforeRouteUpdate (to, from, next) {
		  const toDepth = to.path.split('/').length
		  const fromDepth = from.path.split('/').length
		  this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		  next()
		}
  }
</script>

<style src="./App.css"></style>
