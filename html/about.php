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
  <a class="navbar-brand" href="index.php"><img src="logo.png" width="30" height="30" style="margin-right: 5px;" class="d-inline-block align-top" alt="logo">goodminder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
			<?php if($user_home->is_logged_in()){
				echo '<li class="nav-item"><a class="nav-link" href="logout.php">Log Out ' . $row['userEmail'] .'</a></li>';
			} else {
				echo '<li class="nav-item"><a class="nav-link" href="login.php">Log In</a></li>';
			}
			?>
      <li class="nav-item active">
        <a class="nav-link" href="about.php">About<span class="sr-only">(current)</span></a>
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

      <div class="container" style="text-align:center;">
           <h1 class="main-header"><span><img src="logoDark.png" alt="logo" width="auto" height="60px" ></span>About</h1>

<div class="box" style="text-align:center;">
        <h1>Our Philosophy</h1>

        <p>Why do you live?</p>
        <p>It is easy to focus on negatives rather than positives.
        And it is easy to succumb to social media and entertainment rather than
        focusing on our own real lives. Here, we aim to help you catalogue the good
        in your life.</p>
        <h1>What is goodminder?</h1>
				<p><b>goodminder: Specifically you.</b></p>
        <p>goodminder is a similar to a journal, yet it has a focus.
        Prompts help you think of things worth recording in your life.
        There is also an element of randomness that reminds you of ideas or events
        in your past.</p>
        <h1>Inspirations</h1>
        <p>Man's Search for Meaning by Viktor E. Frankl</p>
        <h1>Who we are</h1>

      <p>  <a href="https://github.com/sepuckett86">sepuckett86</a> and
    <a href="https://github.com/codegold79">codegold79</a></p>
<div class="box">
        <h1 style="text-align: center;">Contact us</h1>

 			 <form>
   <div class="form-group" style="text-align: left;">
     <label for="exampleFormControlInput1">Email address</label>
     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
 		<br>
 <label for="firstname">Name: </label><br>
 	<div class="row">
 	    <div class="col">
 	      <input type="text" class="form-control" placeholder="First">
 	    </div>
 	    <div class="col">
 	      <input type="text" class="form-control" placeholder="Last">
 	    </div>
 	  </div>
 		<br>
     <label for="exampleFormControlTextarea1">Enter comment here:</label>
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   </div>
 </form>
</div>
</div>
<br><br><br><br>
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
