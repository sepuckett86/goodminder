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
	$uname = $email;
	$upass = trim($_POST['txtpass']);
	$cpass = trim($_POST['txtcpass']);
	$code = md5(uniqid(rand()));

	$stmt = $reg_user->runQuery("SELECT * FROM usersTbl WHERE userEmail=:email_id");
	$stmt->execute(array(":email_id"=>$email));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);

	if($stmt->rowCount() > 0) {
		$msg = "
		      <div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Sorry,</strong> email already exists. Please try another one.
			  </div>
			  ";
	} elseif($cpass !== $upass ) {
		$msg = "<div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Sorry!</strong> Passwords do not match.
				</div>";
	} elseif($reg_user->register($uname,$email,$upass,$code)){
		$id = $reg_user->lasdID();
		$key = base64_encode($id);
		$id = $key;

		$message = "
			Hello $uname,
			<br /><br />
			Welcome to Goodminder!<br/>
			To complete your registration, please click the following link:<br/>
			<br /><br />
			<a href='http://goodminder.ihostfull.com/verify.php?id=$id&code=$code'>Click HERE to Activate :)</a>
			<br /><br />
			Thanks,";

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
		echo "Sorry , query could no execute...";
	}
}
?>

<!doctype html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
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
		<a class="navbar-brand" href="index.php">goodminder</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active">
					<a class="nav-link" href="about.php">Log In</a>
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
        <div style="margin: 25px">
        <div class="box">
        <h1>Create New Account</h1>
        <?php if(isset($msg)) echo $msg; ?>
        <form style="font-size: 18px" method="post">
            <table>
            <tr>
                <td>Email: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="text" placeholder="my_email@awesome.com" name="txtemail" required></td>
            </tr>
            <tr><td></td></tr>
            <tr>
                <td>Password: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="password" placeholder="************" name="txtpass" required></td>
            </tr>
            <tr><td></td></tr>
            <tr>
                <td>Re-type Password: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="password" placeholder="************" name="txtcpass" required></td>
            </tr>
            </table>
            <br>
            <button class="button" type="submit" name="btn-signup">Submit</button>
        </form>
        </div>
        <br>
        <br>
        <p>Already have an account? Go to: <p class='comfortaa'><a href="login.php" class='button'>Log In Page</a></p></p>
        </div>
    </div>
<br>
<br>
</main>

<footer class="fixed-bottom">
	<p><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
		 Visit us on facebook</a></span>Copyright 2018 | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> and
		 <a href="https://github.com/codegold79" class="button-clear">codegold79</a><span style="float: right"> Questions? <a href="#" class="button-clear">Click Here</a>&nbsp&nbsp&nbsp&nbsp</span></p>
</footer>

<!--script below-->

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script src="main.js"></script>
</body>
</html>
