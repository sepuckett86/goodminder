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
?><!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.3/js/all.js"></script>

</head>

<body>

<header>

  <nav class="navbar navbar-dark navbar-expand-sm">
  <a class="navbar-brand" href="#">goodminder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Log Out <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Examples</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
    </ul>
  </div>
  </nav>

</header>

<main>

 <div class="container" style="text-align:center; font-family: 'Comfortaa', cursive;">
    <div style="margin: 25px">
      <h1 style="color: white; text-shadow: 2px 2px 2px black;">Welcome, User</h1>
      <p style="text-align: left; color: white; text-shadow: 1px 2px 1px black; ">
        Here is your dailyminder:</p>

				<div class="box">
		      <p style="text-align: right;">Added <a href="#">Month Day, Year</a> from <a href="#">Prompt Collection Media</a></p>

		       <div class="media prompt">
		       <i class="fas fa-question-circle" style="font-size: 64px; margin-right: 20px;"></i>

		       <div class="media-body">
		 <span style="float: right;"><a href="#" class="button-clear" style="font-size: 16px;"><i class="fas fa-plus"></i> Respond Again</a></span>

		       <p class="lato" style="text-align: center; margin-right: 100px;">What is a song that made you smile in the past month?</p>
		      </div>
		      </div>
		      <br>

		      <div class="media answer" style="position: relative;">
		      <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
		      <div class="media-body">

		      <br>
		      <h4 class="lato" style="text-align: center; margin-right: 100px;">Legend of Kyrandia Emerald Room Song by Frank Klepacki</h4><br>

		        </div>

		      <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>
		      </div
		      </div>
		  <br>

		      <div class="media reason">
		      <i class="fas fa-lightbulb" style="font-size: 64px; margin-left: 15px; margin-right: 20px;"></i>

		      <div class="media-body lato" style="margin-right: 100px;">

		    After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.
		      </div>
		        </div>
		      <br>

		      <div class="container options" style="text-align: right;"><span style="float: left;"><a href="#" class="button-clear">
		        <i class="fas fa-star"></i>
		        <i class="fas fa-star"></i>
		        <i class="fas fa-star"></i>
		        <i class="fas fa-star"></i>
		        <i class="far fa-star"></i>

		        Rating</a></span>
		        <a href="#" class="button-clear"><i class="fas fa-edit"></i> Edit</a> |
		        <a href="#" class="button-clear"><i class="fas fa-print"></i> Print</a>

		      </div>

		    </div>

    <p style="color: black;"><a href="#" class='button-standard'><i class="fas fa-arrow-circle-right" style="margin-right: 3px;"></i>Next</a> &nbsp
      <a href="#" class='button-standard'><i class="fas fa-plus-circle" style="margin-right: 3px;"></i>Add</a> &nbsp
    <a href="#" class='button-standard'><i class="fas fa-dot-circle" style="margin-right: 3px;"></i></i>More</a></p>
    </div>
  </div>
   </main>


	 <footer class="fixed-bottom">
	 	<p><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
	 		 Visit us on facebook</a></span>Copyright 2018 | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> and
	 		 <a href="https://github.com/codegold79" class="button-clear">codegold79</a><span style="float: right"> Questions? <a href="faq.php" class="button-clear">Click Here</a>&nbsp&nbsp&nbsp&nbsp</span></p>
	 </footer>
</div>

<!--script below-->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
</body>
</html>
