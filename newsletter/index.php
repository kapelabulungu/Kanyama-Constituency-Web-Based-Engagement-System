<?php 
include('inc/header.php');
?>
<title>Kanyama Newsletter</title>
<script src="js/subscribe.js"></script>
<link rel="stylesheet" href="css/style.css">
<?php include('inc/container.php');?>
<div class="content" > 
	<div class="container-fluid">
		
		<div class="row">
			<div class="col-lg-12">
				<div class="main-content" >
					<div class="susbcribe-container" style="background-color: ; margin: auto;">
						<div class="top">
							<h2>Kanyama Newsletter</h2>
							
							<li>you'll recieve Constituency updates</li>
							<li>Get articles and latest news</li>
						</div>
						<div class="bottom">							
							<div class="status"></div>						
							<form action="#" id="subscribeForm" method="post">							
								<input type="text" class="form-control" id="name" placeholder="Full Name" required="">	
								<span class="text-danger hidden" id="nameError"></span>
								<input type="email" class="form-control" id="email" placeholder="E-mail" required="">
								<span class="text-danger hidden" id="emailError"></span>
								<input type="button" id="subscribe" value="Subscribe Now" style="background-color: green;>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>	 
	</div>       
</div>   		
<?php include('inc/footer.php');?>

