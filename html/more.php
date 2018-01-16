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
 <div class="container" style="text-align:center; font-family: 'Comfortaa', cursive;">
    <div style="margin: 25px">
      <h1 style="color: white; text-shadow: 2px 2px 2px black;">More</h1>
      <p style="text-align: left; color: white; text-shadow: 1px 2px 1px black; ">
        Other things to do:</p>

<div class="box">
<h4>Export your data</h4>
<h4>Make a PDF</h4>
</div>
  <br>
  <p style="color: black;"><a href="userHome.php" class='button-standard'><i class="fas fa-arrow-circle-left" style="margin-right: 3px;"></i>Home</a> &nbsp
  <a href="add.php" class='button-standard'><i class="fas fa-dot-circle" style="margin-right: 3px;"></i></i>Add</a></p>
</div>
</div>
   </main>
<br><br>

<br>
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