<?php
session_start();
require_once 'auth/class.user.php';
$user_home = new USER();

if($user_home->is_logged_in())
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
				echo '<li class="nav-item active">
				  <a class="nav-link" href="about.php">About</a><span class="sr-only">(current)</span>
				</li>';
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
	<span class="border comfortaa">About</span>
</div>
</div>
<div class="opaque-container" style="text-align:center; ">
        <div class="container">
					<br />
				<h1>Living in a digital age</h1>
        <p>
        It is easy to succumb to social media and entertainment rather than
        focusing on our own real lives. While we are connected more than ever,
				anxiety is becoming more prevalent. How can we remember to focus on the positive
			  things in our day-to-day reality while continuing to participate in this digital age?</p>
				<hr />
        <h1>Enter <img src="favicon.png" alt="logoDark" height="60px" style="padding-bottom:10px"/>goodminder</h1>
				<p><b>Goodminder: Specifically you.</b></p>
        <p>How many times have you laughed or smiled,
					only to forget that happy event days later?
					Goodminder is a similar to a journal, yet it has a focus.
        Prompts help you think of things worth recording in your life.
				You can also save quotes or custom text that is meaningful to you.
				Having a bad day? Log into Goodminder and read a randomly chosen memory --
				a <b>reminder</b> of the <b>good</b> in your life.</p>
				<hr />
        <h1>Inspirations</h1>
				<p>
				 "A human being is not one in pursuit of happiness but rather in search
				 of a reason to be happy."
				</p>
        <p><a href="https://www.amazon.com/Mans-Search-Meaning-classic-Holocaust-ebook/dp/B00EKOC0HI">--Man's Search for Meaning</a>
				 by Viktor E. Frankl</p>

				<hr />
        <h1>Who we are</h1>

      <p>  <a href="https://github.com/sepuckett86">sepuckett86</a> and
    <a href="https://github.com/codegold79">codegold79</a></p>
		<p>
			We are two friends who met in college and majored in something other
			than computer science. We both currenty share a passion for learning
			coding and web development.
		</p>
<hr />
			<h1>Resources</h1>
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
						<li><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a></li>
						<li><a href="https://www.codecademy.com/" target="_blank">codecademy</a></li>
						<li>
							<a href="https://stackoverflow.com/" target="_blank">stack overflow</a>
						</li>
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
			<p>If you'd like to donate, please contact us <a href="faq.php#contact">here</a>. Thanks a lot!</p>

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


<br><br><br><br>
</div></div>
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
