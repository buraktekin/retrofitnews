<template>
	<div id="authentication">
		<div class="container">
			<div class="row">
				<div class="vn-authentication theme">
					<!-- Nav tabs -->
					<div class="navbar-brand">
						<a href="/"><img src="../../assets/logo-new-white.png" /></a>
					</div>
					<hr />
					<div class="col-sm-12 mt-5">
						<div class="tab-container">
							<ul class="nav nav-tabs" role="tablist">
							  <li class="nav-item">
							    <a class="nav-link active" data-toggle="tab" href="#register" role="tab">Register</a>
							  </li>
							  <li class="nav-item">
							    <a class="nav-link" data-toggle="tab" href="#login" role="tab">Log In</a>
							  </li>
							</ul>

							<!-- Tab panes -->
							<div class="tab-content vn-rl">
							  <div class="tab-pane active" id="register" role="tabpanel">
							  	<register></register>
							  </div>
							  <div class="tab-pane" id="login" role="tabpanel">
							  	<login></login>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" src="./Authentication.css"></style>
<script type="text/javascript" src="./Authentication.js"></script>