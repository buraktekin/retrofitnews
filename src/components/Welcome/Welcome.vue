<template>
	<div id="welcome">
    <header class="masthead fixed-top">
      <div class="overlay">
      	<img src="../../assets/logo-new-white.png" />
      </div>
    </header>
    
    <div class="container">
	    <section>
	      <div class="row align-items-center">
	      	<div id="description" class="col-sm-12 col-md-12 col-lg-4">
	          <div class="p-4 mt-3 text-left">
	            <h2 class="display-5">For those who seek getting top latest news about their interests.</h2>
	            <p class="mt-3">
	              <b>Welcome to VueNews</b>
	              <p>VueNews is one of the <i>Hackernews</i> clients which is created for people want to follow only specific topics.</p>
	            </p>
	          </div>
	          <div class="row justify-content-md-center">
					    <div class="col-6 col-md-auto">
		        		<router-link to="./authentication#register" class="btn btn-md btn-block btn-theme">Sign Up</router-link>
					    </div>
					    <div class="col-6 col-md-auto">
		        		<router-link to="./authentication#login" class="btn btn-md btn-block btn-theme">Sign In</router-link>
					    </div>
		        </div>
	        </div>

	        <div class="col-5 col-sm-4 col-md-4 col-lg-3">
	        	<div class="row align-items-center">
	          	<div class="col-12">
	          		<div class="icons">
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-automobile"></i>
			            	<i class="fa fa-camera slide"></i>
			            	<i class="fa fa-gamepad"></i>
		            	</div>
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-heart"></i>
			            	<i class="fa fa-institution"></i>
			            	<i class="fa fa-magnet"></i>
		            	</div>
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-music"></i>
			            	<i class="fa fa-language slide"></i>
			            	<i class="fa fa-cube"></i>
		            	</div>
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-code slide"></i>
			            	<i class="fa fa-fire"></i>
			            	<i class="fa fa-globe"></i>
		            	</div>
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-glass"></i>
			            	<i class="fa fa-gamepad"></i>
			            	<i class="fa fa-database"></i>
		            	</div>
		            	<div class="vn-brand-animate row align-items-center text-center">
		            		<i class="fa fa-legal"></i>
			            	<i class="fa fa-paw"></i>
			            	<i class="fa fa-rocket slide"></i>
		            	</div>
		            </div>
	            </div>
	          </div>
	        </div>

	        <div class="col-4 col-sm-6 col-md-4 col-lg-3">
	        	<img id="picture" class="img-fluid" src="../../assets/hackernews.jpg" alt="">
	        </div>

	        <div class="col-3 col-sm-1 col-md-4 col-lg-2">
	        	<div class="icons">
		        	<div class="row align-items-center text-center">
	            	<i class="vn-brand-animate fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="row align-items-center text-center">
	            	<i class="vn-brand-animate fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="row align-items-center text-center">
	            	<i class="vn-brand-animate fa fa-2x fa-hacker-news"></i>
	          	</div>
	          	<div class="row align-items-center text-center">
	            	<i class="vn-brand-animate fa fa-2x fa-hacker-news"></i>
	          	</div>
	          </div>
	        </div>
	      </div>
	    </section>

	    <!-- Footer -->
	    <footer class="fixed-bottom p-3">
	        <div class="container">
	            <p class="m-0 text-center">VueNews 
	            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/512px-Copyleft.svg.png" width="16px" /> 2017</p>
	        </div>
	        <!-- /.container -->
	    </footer>
	    <!-- /.Footer -->
	  </div>
  </div>
</template>

<style type="text/css" src="./Welcome.css"></style>
<script type="text/javascript" src="./Welcome.js"></script>