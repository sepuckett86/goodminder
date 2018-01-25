<?php
session_start();
require_once 'auth/class.user.php';
$user_home = new USER();

if($user_home->is_logged_in())
{
	$stmt = $user_home->runQuery("SELECT * FROM usersTbl WHERE userID=:uid");
	$stmt->execute(array(":uid"=>$_SESSION['userSession']));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>

<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
		<link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed" rel="stylesheet"/>
    <script defer src="https://use.fontawesome.com/releases/v5.0.3/js/all.js"></script>


</head>

<body>

<header>

  <nav class="navbar navbar-dark navbar-expand-sm">
  <a class="navbar-brand" href="index.php"><img src="logo.png" width="30" height="30" style="margin-right: 5px;" class="d-inline-block align-top" alt="logo">goodminder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
			<?php if($user_home->is_logged_in()){
				echo '<li class="nav-item active"><a class="nav-link" href="logout.php">Log Out ' . $row['userEmail'] .'<span class="sr-only">(current)</span></a></li>';
			} else {
				echo '<li class="nav-item active"><a class="nav-link" href="login.php">Log In<span class="sr-only">(current)</span></a></li>';
			}
			?>
      <li class="nav-item">
        <a class="nav-link" href="about.php">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="example.php">Examples</a>
      </li>
			<?php if($user_home->is_logged_in()){
				echo '<li class="nav-item"><a class="nav-link" href="settings.php">Settings</a></li>';
			}
			?>
    </ul>
  </div>
  </nav>

</header>
<main>
	<div class="bgimg-2">
		<div class="caption">
			<span class="border comfortaa">Examples</span>
		</div>
	</div>
	<div class="opaque-container">
		<br>
		<div class="container">
			<div class="card" style="border:solid 5px;">
				<div class="card-body">
				<h5 class="card-title">goodminder <span style="font-size:12px;"><i>noun</i></h5>
			<p class="card-text">A quote, a prompt response, or a custom entry entered by <b>you</b></p>
		</div>
	</div>
		<br>
		<h5 class="comfortaa">Here's what you can do with your account:</h5>
			<div class="row">
				<div class="col">
					<div class="card" style="height: 32vw;">
  					<a href="example1.jpg"><img class="card-img-top" src="example1.jpg" alt="example1"></a>
  				<div class="card-body">
    				<h5 class="card-title">Print</h5>
    				<p class="card-text">Easily print out any of your goodminders to hang on your wall or save in a book.</p>

  				</div>
					</div>
				</div>
			<div class="col">
				<div class="card" style="height: 32vw;">
  			<a href="example-screen.jpg"><img class="card-img-top" src="example-screen.jpg" alt="example1"></a>
  			<div class="card-body">
    			<h5 class="card-title">Read</h5>
    			<p class="card-text">Enjoy your goodminders on your computer with our appealing layout.</p>

				</div>
  			</div>
			</div>
			</div>

		</div>
		<br><br><br><br><br><br><br>
	</div>

</main>
<footer class="fixed-bottom">
	<p><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
		 Visit us on facebook</a></span>Copyright 2018 | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> and
		 <a href="https://github.com/codegold79" class="button-clear">codegold79</a><span style="float: right"> Questions? <a href="faq.php" class="button-clear">Click Here</a>&nbsp&nbsp&nbsp&nbsp</span></p>
</footer>

<!--script below-->

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script src="main.js"></script>
<script>
$('.carousel').carousel({
  interval: false
})
</script>
</body>
</html>
