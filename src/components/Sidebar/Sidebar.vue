<template>
	<div class="row">
		<div id="sidebar-wrapper" :class="'sidebar ' + isActive">
		  <div class="row">
        <transition name="fade">
        	<div class="container">
	          <div class="selectedFields">
	          	<h6 class="text-center"><b>Your Selections ({{ selectedFields.length }})</b></h6>
	            <ul class="list-group">
	              <li class="field list-group-item" v-for="(item, index) in selectedFields" @click="removeFromSelection(index)">
	              	<p class="text-truncate">
		                <span class="small pull-left"><i :class="'small ' + item.item.icon"></i> {{ item.item.name }}</span>
		                <span class="pull-right"><i class="fa fa-times"></i></span>
		              </p>
	              </li>
	            </ul>
	          </div>
	          <span class="done">
	            <a class="btn btn-default btn-md btn-done" @click="submitSelection()">Ready!</a>
            </span>
          </div>
        </transition>
      </div>
		</div>
	</div>
</template>

<style type="text/css" src="./Sidebar.css"></style>
<script src="./Sidebar.js"></script>