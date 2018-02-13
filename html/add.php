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
    <script defer src="https://use.fontawesome.com/releases/v5.0.3/js/all.js"></script>
    <script src="serverReq/jquery-3.3.1.min.js"></script>
    <script src="serverReq/serverExchange.js"></script>

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
      <h1 class="main-header">Add</h1>
<div class="container">
<div class="box">
	<p>Choose an entry type</p>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Prompt</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Quote</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Custom</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<br>

    <form>
        <div class="form-group">
            <p class="paragraph-prompt" id="promptId_4">From Prompt Collection: <a href='#' class="button-clear">Happy</a></p>
            <h4 class="lato" style="color:black; font-size: 36px;">Who is your favorite celebrity?</h4>
            <br>
            <p><span style="text-align: right;">Next prompt from:
            <a href="#" class="button-clear"><i class="fas fa-arrow-circle-right"></i> Same collection</a> |
            <a href="#" class="button-clear"><i class="fas fa-arrow-circle-right"></i> All collections</a></span></p>
            <label for="answer">Answer</label>
            <textarea class="form-control" id="prompt-answer" rows="3"></textarea>
            <br>
            <label for="reason">Reason</label>
            <textarea class="form-control" id="prompt-reason" rows="3"></textarea>
        </div>
        <button id="btn-prompt-submit" type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <br>

    <form>
        <div class="form-group">
            <label for="answer">Quote</label>
            <textarea class="form-control" id="quote" rows="3" placeholder="Example: May your beer be laid under an enchantment of surpassing excellence for seven years!"></textarea>
            <br>
            <div class="form-group">
                <label for="who">Who said it (optional)</label>
                <input type="text" class="form-control" id="quote-who" placeholder="Example: Gandalf">
            </div>
            <br>
            <div class="form-group">
                <label for="source">Source (optional)</label>
                <input type="text" class="form-control" id="quote-source" placeholder="Example: The Fellowship of the Ring">
            </div>
            <br>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" class="form-control" id="quote-author" placeholder="Example: J. R. R. Tolkien">
            </div>
            <br>
            <label for="reason">Reason</label>
            <textarea class="form-control" id="quote-reason" rows="3" placeholder="Example: When I was reading this out loud with my husband, we laughed like hyenas"></textarea>
            <br>
            <div class="form-group">
                <label for="q-collection">Collection (optional)</label>
                <input type="text" class="form-control" id="quote-category" placeholder="Example: Funny">
            </div>
        </div>
        <br>
        <button id="btn-quote-submit" type="submit" class="btn btn-primary">Submit</button>
    </form>

    <br>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    
    <form>
        <div class="form-group">
            <br>
            <label for="x">Enter Anything</label>
            <textarea class="form-control" id="customText" rows="3"></textarea>
            <br>
            <div class="form-group">
                <label for="category">Custom Category</label>
                <input type="text" class="form-control" id="custom-category" placeholder="Example: Affirmations">
            </div>
        </div>
        <button id="btn-custom-submit" type="submit" class="btn btn-primary">Submit</button>
    </form>

</div>
</div>

  </div>
  <br>
	<div style="text-align:center;">
  <p style="color: black;"><a href="userHome.php" class='button-standard'><i class="fas fa-arrow-circle-left" style="margin-right: 3px;"></i>Home</a> &nbsp
  <a href="more.php" class='button-standard'><i class="fas fa-dot-circle" style="margin-right: 3px;"></i></i>More</a></p>
</div>
</div>
   </main>
<br><br>

<br>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script src="main.js"></script>
</body>
</html>
