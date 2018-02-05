<?php
session_start();
require_once 'auth/class.user.php';

$reg_user = new USER();

if($reg_user->is_logged_in()!="")
{
	$reg_user->redirect('userHome.php');
}


if(isset($_POST['btn-signup']))
{
	$email = trim($_POST['txtemail']);
    $uname2 = trim($_POST['txtuname2']);
	$uname = trim($_POST['txtuname']);
	$upass = trim($_POST['txtpass']);
	$cpass = trim($_POST['txtcpass']);
	$code = md5(uniqid(rand()));

	$stmt = $reg_user->runQuery("SELECT * FROM usersTbl WHERE userEmail=:email_id or userName=:user_name");
	$stmt->execute(array(":email_id"=>$email, ":user_name"=>$uname));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);

	if($stmt->rowCount() > 0) {
		$msg = "
		      <div class='alert alert-warning'>
				<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Sorry,</strong> email or user name already exists. Please try another one.
			  </div>
			  ";
	} elseif($cpass !== $upass ) {
		$msg = "<div class='alert alert-warning'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Sorry!</strong> Passwords do not match.
				</div>";
	} elseif($reg_user->register($email,$uname2,$uname,$upass,$code)){
		$id = $reg_user->lasdID();
		$key = base64_encode($id);

        $emailTemplate = file_get_contents("mailer/confirmEmailInline.html",true);
        $originals = array( "{{ user }}", "{{ confirm }}", "{{ browserPost }}" );
        $replacements = array( $uname2, "http://goodminder.ihostfull.com/verify.php?id=$key&code=$code", "?email=$email&id=$key&code=$code&user=$uname2" );
        $message = str_replace($originals, $replacements, $emailTemplate);

		$subject = "Confirm Registration";

		$reg_user->send_mail($email,$message,$subject);
		$msg = "
				<div class='alert alert-success'>
					<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Success!</strong>  We've sent an email to $email.
				Please click on the confirmation link in the email to create your account.
				</div>
				";
	} else {
		$msg = "Sorry , query could not execute.";
	}
}
?><!DOCTYPE html>

<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
		<link rel="icon" type="images/png" href="favicon.png">
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
        <div class="box">
        <h1>Create New Account</h1>
        <?php if(isset($msg)) echo $msg; ?>
				<br>
				<form id="needs-validation" method="post">
					<div class="form-group row">
    				    <label for="inputName" class="col-sm-2 col-form-label">Your Name</label>
					   <div class="col-sm-10">
    				        <input type="text" class="form-control" id="inputName" placeholder="Bob" name="txtuname2" required>
                        </div>
					</div>
					<div class="form-group row">
    				    <label for="inputUserName" class="col-sm-2 col-form-label">Unique User Name</label>
					   <div class="col-sm-10">
    				        <input type="text" class="form-control" id="inputUserName" placeholder="abc_man5000" name="txtuname" required>
                        </div>
					</div>
					<div class="form-group row">
				        <label for="inputEmail" class="col-sm-2 col-form-label">Email address</label>
						<div class="col-sm-10">
				            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="example@awesome.com" name="txtemail" required>
				            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				        </div>
				  </div>
				  <div class="form-group row">
				    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
				        <div class="col-sm-10">
				            <input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelpBlock" placeholder="********" name="txtpass" required>
							<small id="passwordHelpBlock" class="form-text text-muted">
  						Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
							</small>
						</div>
				  </div>
					<div class="form-group row">
				        <label for="inputPassword2" class="col-sm-2 col-form-label">Re-Type Password</label>
				        <div class="col-sm-10">
				            <input type="password" class="form-control" id="inputPassword2" placeholder="********" name="txtcpass" required>
				        </div>
				    </div>
				    <div class="form-group row">
				        <div class="col-sm-10">
				            <button type="submit" class="btn btn-primary" name="btn-signup">Submit</button>
				        </div>
				    </div>
				</form>
        </div>

				<div class="box">
        <p>Already have an account? <a href="login.php" class='btn btn-goodminder btn-sm'><i class="fas fa-arrow-circle-right" style="margin-right: 3px;"></i>Log In</a></p>
				</div>
			</div>

<br>
<br>
</main>

<footer class="fixed-bottom">
	<!--For big screens-->
	<p class="full-text"><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
		 Visit us on facebook</a></span>Copyright &copy 2018 | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> and
		 <a href="https://github.com/codegold79" class="button-clear">codegold79</a><span style="float: right"> Questions?
			 <a href="faq.php" class="button-clear">Click Here</a>&nbsp&nbsp&nbsp&nbsp</span></p>
	<!--For small screens-->
  <p class="short-text"><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
	</a></span> &copy 2018  | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> &
	<a href="https://github.com/codegold79" class="button-clear">codegold79</a><span style="float: right"><a href="faq.php" class="button-clear">FAQ</a>&nbsp&nbsp&nbsp&nbsp</span></p>
</footer>

<!--script below-->

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script src="main.js"></script>
</body>
</html>
