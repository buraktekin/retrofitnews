<template>
	<div class="vn-login mt-1">
	  <form>
	    <div class="form-group row">
	      <div class="col-sm-12">
	        <input type="email" class="form-control form-control-success" id="vn-register-email" placeholder="Email">
	        <input type="password" class="form-control form-control-warning" id="vn-register-pass" placeholder="Password">
	      </div>
	    </div>
	    <button type="submit" class="btn-theme btn-sm">Submit</button>
	    <!-- <p class="small mt-5"><a href="#register" class="pull-left theme" data-toggle="tab" role="tab">Not registered?</a></p> -->
	  </form>
	</div>
</template>

<style type="text/css">
	.vn-login{
		width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
	}
</style>