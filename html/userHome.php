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
?><!DOCTYPE HTML>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
		<link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="goodminder.css" rel="stylesheet" type="text/css" />
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
				echo '<li class="nav-item active"><a class="nav-link" href="userHome.php">'.$row['userName'].'<span class="sr-only">(current)</span></a></li>';
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
 <div class="container" style="text-align:center; font-family: 'Comfortaa', cursive;">
    <div style="margin: 25px">
      <h1 style="color: white; text-shadow: 2px 2px 2px black;">
        <?php echo "Welcome, " . $row['userNameFamiliar'];
        ?>
      </h1>
      <p style="text-align: left; color: white; text-shadow: 1px 2px 1px black; ">
        Here is your dailyminder:</p>
			</div>

    <div class="box">
      <p style="text-align: right;">Quote added <a href="#">Month Day, Year</a> to <a href="#">
        Quote Collection: Inspirational</a></p>
      <div class="media answer" style="position: relative;">
      <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
      <div class="media-body">

      <br>

      <h4 class="lato" style="text-align: left; margin-right: 100px;">
        May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p class="lato" style="text-align: right; margin-right: 100px;">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p>
        <br>
      </div>

      <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>
      </div>
      <br>

      <div class="media reason">
      <i class="fas fa-lightbulb" style="font-size: 64px; margin-left: 15px; margin-right: 20px;"></i>

      <div class="media-body lato" style="margin-right: 100px;">
    Will and I were reading Tolkien out loud and this was the best line in the entire book.
      </div>
        </div>
      <br>

      <div id="rating" class="options" style="text-align: right;"><span style="float: left;">
				<!-- Rating Stars Box -->
 		 	 <!-- Note that fas = solid and far = empty-->
 		 	 <button class='star-button' onclick="stars('fa1')"><i id="fa1" class="far fa-star"></i></button>
 		 	 <button class='star-button' onclick="stars('fa2')"><i id="fa2" class="far fa-star"></i></button>
 		 	 <button class='star-button' onclick="stars('fa3')"><i id="fa3" class="far fa-star"></i></button>
 		 	 <button class='star-button' onclick="stars('fa4')"><i id="fa4" class="far fa-star"></i></button>
 		 	 <button class='star-button' onclick="stars('fa5')"><i id="fa5" class="far fa-star"></i></button>

      </span>

        <a href="edit.php" class="button-clear"><i class="fas fa-edit"></i> Edit</a> |
        <a href="print.php" class="button-clear"><i class="fas fa-print"></i> Print</a>

      </div>

    </div>



    <p style="color: black;"><a href="userHome2.php" class='button-standard'><i class="fas fa-arrow-circle-right" style="margin-right: 3px;"></i>Next</a> &nbsp
      <a href="add.php" class='button-standard'><i class="fas fa-plus-circle" style="margin-right: 3px;"></i>Add</a> &nbsp
    <a href="more.php" class='button-standard'><i class="fas fa-dot-circle" style="margin-right: 3px;"></i></i>More</a></p>
    </div>
	<br><br>
   </main>

<br><br><br>
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
<script src="stars.js"></script>

</body>
</html>
