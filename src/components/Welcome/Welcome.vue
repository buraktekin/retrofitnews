<template>
	<div id="welcome">
    <header class="masthead">
      <div class="overlay">
      	<img src="../../assets/logo-new-white.png" />
      </div>
    </header>
    
    <div class="container">
	    <section>
	      <div class="row align-items-center">
	      	<div id="description" class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
	          <div class="text-center mt-3"><h2><b>Welcome to VueNews</b></h2></div>
	          <div class="p-4 mt-3 text-left">
	            <h2 class="display-5"><b>For those who seek getting top latest news about their interests.</b></h2>
	            <p class="mt-3">
	              <p>VueNews is a <i>Hackernews</i> client which is created for people want to follow only specific topics they are interested in.</p>
	            </p>
	          </div>
	          <div class="row justify-content-md-center">
					    <div class="col-6 col-md-auto">
		        		<router-link to="./authentication#register" class="btn btn-md btn-block btn-info">Sign Up</router-link>
					    </div>
					    <div class="col-6 col-md-auto">
		        		<router-link to="./authentication#login" class="btn btn-md btn-block btn-info">Sign In</router-link>
					    </div>
		        </div>
	        </div>

	        <div class="animation content-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-6">
		        <div class="col-5 col-sm-4 col-md-4 col-lg-3">
		        	<div class="row align-items-center">
		          	<div class="col-12">
		          		<div class="icons">
			            	<div class="vn-brand-animate">
			            		<i class="fa fa-automobile"></i>
				            	<i class="fa fa-camera slide"></i>
				            	<i class="fa fa-gamepad"></i>
			            	</div>
			            	<div class="vn-brand-animate">
			            		<i class="fa fa-heart"></i>
				            	<i class="fa fa-institution"></i>
				            	<i class="fa fa-magnet"></i>
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
		        </div>
		      

		        <div class="col-4 col-sm-6 col-md-4 col-lg-3">
		        	<img id="picture" class="img-fluid" src="../../assets/hackernews.jpg" alt="">
		        </div>

		        <div class="col-3 col-sm-1 col-md-4 col-lg-2">
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
	    </section>
	  </div>
	  <!-- Footer -->
	  <footer class="bottom ">
	  	<div class="container">
	  		<p class="m-0 text-center">VueNews <span class="copyleft">&copy;</span> 2017</p>
	    </div>
	    <!-- /.container -->
	  </footer>
	  <!-- /.Footer -->
  </div>
</template>

<style type="text/css" src="./Welcome.css"></style>
<script type="text/javascript" src="./Welcome.js"></script>