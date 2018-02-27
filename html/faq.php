<?php
session_start();
require_once 'auth/class.user.php';
$user_home = new USER();

{
	$stmt = $user_home->runQuery("SELECT * FROM usersTbl WHERE userID=:uid");
	$stmt->execute(array(":uid"=>$_SESSION['userSession']));
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = $user_home->runQuery("SELECT points FROM socialTbl WHERE userID=:uid");
    $stmt->execute(array(":uid"=>$_SESSION['userSession']));
    $socialRow = $stmt->fetch(PDO::FETCH_ASSOC);
    $points = $socialRow['points'];
    if ($points === null) {
        $points = 0;
    }
}

if(isset($_POST['btn-faq'])){
    $email = trim($_POST['email']);
    $firstName = trim($_POST['firstName']);
    $lastName = trim($_POST['lastName']);
    $question = trim($_POST['question']);
    $emailBody = "Question from: " . $firstName . " " . $lastName . " (" . $email . "):<br><br>" . $question;
    $emailSubject = "Question from " . $email;
    $recipientEmail = "goodminder.site@gmail.com";
    $user_home->send_mail($recipientEmail, $emailBody, $emailSubject);

    $msg = "
        <div class='alert alert-success'>
            <button class='close' data-dismiss='alert'>&times;</button>
            <strong>Success!</strong> Your email has been sent to the Goodminder site admins.
        </div>
    ";
}
?><!DOCTYPE html>

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
				echo '<li class="nav-item active dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						'.$row['userName'].'<span class="sr-only">(current)</span>
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<a class="dropdown-item" href="userHome.php">User Home</a>
						<a class="dropdown-item" href="settings.php">Settings</a>
						<hr>
						<a class="dropdown-item" href="about.php">About</a>
						<a class="dropdown-item" href="example.php">Examples</a>
						<hr>
						<a class="dropdown-item" href="logout.php">Log out</a>
					</div>
				</li>
				<li class="nav-item">
					<button type="button" class="btn btn-goodminder" data-toggle="popover" title="Goodminder Points" data-content="Earn points by daily log-in and writing entries. These will come in handy later :) ">Points <span class="badge badge-light">' . $points . '</span></button>
				</li>';
			} else {
				echo '<li class="nav-item"><a class="nav-link" href="login.php">Log In</a></li>';
				echo '<li class="nav-item"><a class="nav-link" href="about.php">About</a></li>';
				echo '<li class="nav-item"><a class="nav-link" href="example.php">Examples</a></li>';
			}
			?>
    </ul>
  </div>
  </nav>

</header>
<main>
	<div class="bgimg-2">
	<div class="caption">
		<span class="border comfortaa">Questions/Contact</span>
	</div>
	</div>
	<div class="opaque-container">


  <div class="container">
		<br />
<h1>FAQ</h1>
<br />
			 <p><b>Q</b>: What is different about Goodminder compared to other quote websites?</p>
			 <p><b>A1</b>: Prompts inspire you to remember the positive moments.</p>
			 <p><b>A2</b>: All of your goodminders are private by default.
			 Self-honesty and your well-being are the focuses here.</p>


<hr />
<br />
			 <h2 style="text-align: center">Have another question? Want to donate, comment, or make a suggestion?</h2>
			 <br />
				 <h1>Contact us here:</h1>
			 <div id="contact" class="box">
			<form method="post">
				<div class="form-group" style="text-align: left;">
					<?php if(isset($msg)) echo $msg; ?>
                    <label for="exampleFormControlInput1">Email address:</label>
					<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email">
					<br>
				<label for="firstname">Name: </label><br>
				<div class="row">
						<div class="col">
							<input type="text" class="form-control" placeholder="First" name="firstName">
						</div>
						<div class="col">
							<input type="text" class="form-control" placeholder="Last" name="lastName">
						</div>
				</div>
				<br>
				<label for="exampleFormControlTextarea1">What would you like to say?</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="question"></textarea>
				</div>
				<div class="form-group row">
					<div class="col-sm-10">
						<button type="submit" class="btn btn-primary" name="btn-faq">Submit</button>
					</div>
				</div>
			</form>
</div>

<br><br>
</div>
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
