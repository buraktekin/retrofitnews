<template>
	<div class="vn-login mt-1">
	  <form>
	    <div class="form-group mb-10">
	      <div class="col-sm-12">
	        <input type="email" class="form-control form-control-success" id="vn-register-email" placeholder="Email" v-model="email">
	        <input type="password" class="form-control form-control-warning" id="vn-register-pass" placeholder="Password" v-model="password">
	      </div>
	    </div>
	    <button type="submit" class="btn btn-md btn-block btn-success" @click="formSubmit">Submit</button>
	    <!-- <p class="small mt-5"><a href="#register" class="pull-left theme" data-toggle="tab" role="tab">Not registered?</a></p> -->
	  </form>
	</div>
</template>

<style type="text/css" src="./Login.css"></style>
<script type="text/javascript" src="./Login.js"></script>