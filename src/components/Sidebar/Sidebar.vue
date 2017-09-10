<template>
	<div class="row">
		<div id="sidebar-wrapper" class="sidebar">
		  <div class="row">
        <transition name="fade">
        	<div class="container">
        		<p class="text-center mt-2 mb-2"><b>Filter</b></p>
        		<div class="featurette-filter m-0 p-0">
        			<span class="filter" v-for="filter in results">
	              <a :id="filter.query.replace(/ /g, '-')" class="btn btn-xs btn-filter" @click="filterNews($event, filter)">
	                <i :class="filter.icon"></i>
	                <p class="text-truncate">{{ filter.query }}</p>
	              </a>
	            </span>
	          </div>
          </div>
        </transition>
      </div>
		</div>
	</div>
</template>

<style type="text/css" src="./Sidebar.css"></style>
<script src="./Sidebar.js"></script>