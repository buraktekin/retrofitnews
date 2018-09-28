<template>
	<div id="welcome">
    <header class="masthead">
      <img src="../../assets/logo-new-white.png" />
    </header>
    
    <div id="hero" class="container">
      <div class="row align-items-center">
      	<div id="description" class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <h1><b>Welcome to VueNews</b></h1>
          <div class="mt-3 text-left">
            <h2 class="display-5 detail"><b>For those who seek getting top latest news about their interests.</b></h2>
            <p>VueNews is a <i>Hackernews</i> client which is created for people want to follow only specific topics they are interested in.</p>
          </div>
          <div class="row mt-3 clearfix">
				    <div class="col-xs-6">
	        		<router-link to="./authentication#register" class="btn btn-md btn-block btn-info">Give it a try</router-link>
				    </div>
	        </div>
        </div>

        <div class="animation content-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-6">
	        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
	        	<div class="row align-items-center text-center">
          		<div class="icons">
	            	<div class="vn-brand-animate">
	            		<i class="fa fa-automobile"></i>
		            	<i class="fa fa-camera slide"></i>
		            	<i class="fa fa-gamepad"></i>
	            	</div>
	            	<div class="vn-brand-animate">
	            		<i class="fa fa-music"></i>
		            	<i class="fa fa-language slide"></i>
		            	<i class="fa fa-cube"></i>
	            	</div>
	            	<div class="vn-brand-animate">
	            		<i class="fa fa-code slide"></i>
		            	<i class="fa fa-fire"></i>
		            	<i class="fa fa-globe"></i>
	            	</div>
	            	<div class="vn-brand-animate">
	            		<i class="fa fa-glass"></i>
		            	<i class="fa fa-gamepad"></i>
		            	<i class="fa fa-database"></i>
	            	</div>
	            	<div class="vn-brand-animate">
	            		<i class="fa fa-legal"></i>
		            	<i class="fa fa-paw"></i>
		            	<i class="fa fa-rocket slide"></i>
	            	</div>
	            </div>
	          </div>
	        </div>
	      

	        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	        	<img id="picture" src="../../assets/hackernews.jpg" alt="hackernews logo" width="100px">
	        </div>

	        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
	        	<div class="icons">
		        	<div class="vn-brand-animate">
	            	<i class="fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="vn-brand-animate">
	            	<i class="fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="vn-brand-animate">
	            	<i class="fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="vn-brand-animate">
	            	<i class="fa fa-2x fa-hacker-news"></i>
	          	</div>
	          </div>
	        </div>
	      </div>
      </div>
	  </div>
	  <!-- Footer -->
	  <footer class="bottom ">
	  	<p class="m-0 text-center">VueNews <span class="copyleft">&copy;</span> 2017</p>
	  </footer>
	  <!-- /.Footer -->
  </div>
</template>

<style type="text/css" src="./Welcome.css"></style>
<script type="text/javascript" src="./Welcome.js"></script>