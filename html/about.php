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
				echo '<li class="nav-item"><a class="nav-link" href="userHome.php">'.$row['userName'].'</a></li>';
			}
			?>
      <li class="nav-item active">
        <a class="nav-link" href="about.php">About</a><span class="sr-only">(current)</span>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="example.php">Examples</a>
      </li>
      <?php if($user_home->is_logged_in()){
        echo '<li class="nav-item"><a class="nav-link" href="settings.php">Settings</a></li>';
				echo '<li class="nav-item"><a class="nav-link" href="logout.php">Log Out</a></li>';
			} else {
				echo '<li class="nav-item"><a class="nav-link" href="login.php">Log In</a></li>';
			}
			?>
			<li class="nav-item">
				<button type="button" class="btn btn-goodminder">Points <span class="badge badge-light">9</span></button>
			</li>
    </ul>
  </div>
  </nav>

</header>

<main>
<div class="bgimg-2">
<div class="caption">
	<span class="border comfortaa">About</span>
</div>
</div>
<div class="opaque-container" style="text-align:center; ">
        <div class="container">
					<br>
				<h1>Why do you live?</h1>
        <p>It is easy to focus on negatives rather than positives.
        And it is easy to succumb to social media and entertainment rather than
        focusing on our own real lives. Here, we aim to help you catalogue the good
        in your life.</p>
				<hr />
        <h1>Enter <img src="logoDark.png" alt="logoDark" height="60px" style="padding-bottom:10px"/>goodminder</h1>
				<p><b>goodminder: Specifically you.</b></p>
        <p>goodminder is a similar to a journal, yet it has a focus.
        Prompts help you think of things worth recording in your life.
        There is also an element of randomness that reminds you of ideas or events
        in your past.</p>
				<hr />
        <h1>Inspirations</h1>
        <p><a href="https://www.amazon.com/Mans-Search-Meaning-classic-Holocaust-ebook/dp/B00EKOC0HI">Man's Search for Meaning</a>
				 by Viktor E. Frankl</p>

				<hr />
        <h1>Who we are</h1>

      <p>  <a href="https://github.com/sepuckett86">sepuckett86</a> and
    <a href="https://github.com/codegold79">codegold79</a></p>
<hr />
			<h1>Resources</h1>
			<p>We are new to web development and goodminder is helping us learn.</p>
				 <p>A big thanks go to all of the great resources available online for free listed here:
				</p>

			<div class="container">
			<div class="row">
			  <div class="col-sm">
					<ul style="text-align: left;">
						<lh><b>Visual Elements</b></lh>
						<li><a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank">Bootstrap 4</a></li>
						<li><a href="https://fontawesome.com/icons?d=gallery" target="_blank">Font Awesome 5</a></li>
						<li><a href="https://www.freelogodesign.org/index.html" target="_blank">Free Logo Design</a></li>
						<li><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>
						<!-- <li><a href="" target="_blank"></a></li> -->
					</ul>
			  </div>
			  <div class="col-sm">
					<ul style="text-align: left;">
						<lh><b>Tutorials and Help</b></lh>
						<li title="Tania Rascia"><a href="https://www.taniarascia.com/" target="_blank">Tania Rascia</a></li>
						<li><a href="https://www.w3schools.com/" target="_blank">w3schools</a></li>

					</ul>
			  </div>
			  <div class="col-sm">

			  </div>
			</div>
			</div>

			<p>
			  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseExample">
			    Show goodminder fonts
			  </button>
				<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
			    Show something else
			  </button>
			</p>
			<div class="collapse" id="collapse1">
			  <div class="card card-body">
					<ul style="text-align: left;">
						<lh><b>Fonts</b></lh>
						<li><a class="comfortaa" style="font-size:36px;"href="https://fonts.google.com/specimen/Comfortaa" target="_blank">Comfortaa</a></li>
						<li><a class="lato" style="font-size:36px;"href="https://fonts.google.com/specimen/Lato" target="_blank">Lato</a></li>
						<li><a class="marker" style="font-size:36px;"href="https://fonts.google.com/specimen/Permanent+Marker" target="_blank">Permanent Marker</a></li>
						<li><a class="barlow" style="font-size:36px;"href="https://fonts.google.com/specimen/Barlow+Semi+Condensed" target="_blank">Barlow Semi Condensed</a></li>
					</ul>
			  </div>
			</div>
			<div class="collapse" id="collapse2">
			  <div class="card card-body">
			    Hi there!
			  </div>
			</div>


<hr />

			<h1>Support Us!</h1>
			<p>The more support we get, the more we will work on this site to improve it.</p>
			<p>If you'd like to donate, please contact us below. Thanks a lot!</p>

			<p>
			  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapseExample">
			    "Secret" Projects!!
			  </button>
			</p>
			<div class="collapse" id="collapse3">
			  <div class="card card-body">
					<ul style="list-style-type: none;">
						<lh><b>Projects for the future</b></lh>
						<li>Goodminder phone app</li>
						<li>More layout options</li>
						<li>Fun rewards for using our site</li>
					</ul>
			  </div>
				</div>

<hr />
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

<br><br><br><br>
</div></div>
</main>

<footer class="fixed-bottom">
	<!--For big screens-->
	<p class="full-text"><span style="float: left">&nbsp&nbsp&nbsp&nbsp <a href="#" class="button-clear"><i class="fab fa-facebook"></i>
		 Visit us on facebook</a></span>Copyright 2018 | <a href="https://github.com/sepuckett86" class="button-clear">sepuckett86</a> and
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
