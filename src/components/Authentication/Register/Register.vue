<template>
	<div class="vn-register mt-1">
	  <form data-toggle="validator">
	    <div class="form-group row">
	      <div class="col-sm-12">
	        <input type="email" name="email" class="form-control" id="vn-register-email" placeholder="Email" v-model="email">
	        <input type="password" name="password" class="form-control" id="vn-register-pass" placeholder="Password" v-model="password">
	        <input type="password" name="pass-confirm" class="form-control" id="vn-register-pass-confirm" placeholder="Repeat Password" v-model="passConfirm">
	      </div>
	    </div>
	    <button type="submit" class="btn-theme btn-sm mt-2" @click="formSubmit">Submit</button>
	    <!-- <p class="small mt-5"><a href="#login" class="pull-left theme" data-toggle="tab" role="tab">Already registered?</a></p> -->
	  </form>
	</div>
</template>

<style type="text/css" src="./Register.css"></style>
<script type="text/javascript" src="./Register.js"></script>