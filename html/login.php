<?php
session_start();
require_once 'auth/class.user.php';
$user_login = new USER();

if($user_login->is_logged_in()!="")
{
	$user_login->redirect('userHome.php');
}

if(isset($_POST['btn-login']))
{
	$email = trim($_POST['txtemail']);
	$upass = trim($_POST['txtupass']);

	if($user_login->login($email,$upass))
	{
		$user_login->redirect('userHome.php');
	}
}
?>

<!doctype html>
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
				<li class="nav-item active">
	        <a class="nav-link" href="login.php">Log In</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="about.php">About</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="example.php">Examples</a>
	      </li>
	    </ul>
	  </div>
	  </nav>

	</header>

<main>
    <div style="text-align: left">
        <div class="box" style="margin: 25px">
        <h1>Log In</h1>
        <?php
		if(isset($_GET['inactive']))
		{
			?>
            <div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Sorry!</strong> This account is not activated. Check your email inbox for the activation link.
			</div>
            <?php
		}
		?>
        <form style="font-size: 18px" method="post">
		<?php
        if(isset($_GET['error']))
		{
			?>
            <div class='alert alert-success'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Email or password is incorrect. Please try again.</strong>
			</div>
            <?php
		}
		?>
<br>
				<form id="needs-validation" novalidate>
				  <div class="form-group row">
				    <label class="col-sm-2 col-form-label" for="exampleInputEmail1">Email address</label>
						<div class="col-sm-10">
						<input type="email" class="form-control" id="exampleInputEmail1" name="txtemail" placeholder="Enter email" required>
					</div>
					</div>

				  <div class="form-group row">
				    <label class="col-sm-2 col-form-label" for="exampleInputPassword1">Password</label>
						<div class="col-sm-10">
						<input type="password" class="form-control" id="exampleInputPassword1" name="txtupass" placeholder="Password" required>
				  </div></div>
				  <button type="submit" class="btn btn-primary" name="btn-login">Submit</button>
				</form>
        </div>
				<div class="box">
        <p>First time here? <a href="newUser.php" class='btn btn-goodminder btn-sm'><i class="fas fa-arrow-circle-right" style="margin-right: 3px;"></i>Make New User</a></p>
				<p>Forget your password? <a href="resetPassword.php" class='btn btn-goodminder btn-sm'><i class="fas fa-arrow-circle-right" style="margin-right: 3px;"></i>Reset Password</a></p>
				</div>

			</div></div>
<br><br>


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
	</body>
	</html>
