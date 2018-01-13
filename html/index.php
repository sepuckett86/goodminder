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

<!DOCTYPE html>

<html>
<head>
    <title>goodminder</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed" rel="stylesheet"/>
</head>

<body>

<div id="container">
    <header>
    <ul>
    <li class="left"><a href="index.php">goodminder</a></li>
    <li class="right"><a href="examplePage.html">Examples</a></li>
    <li class="right"><a href="aboutPage.html">About</a></li>
	<?php if($user_home->is_logged_in()){
		echo '<li class="right"><a href="logout.php">Logout ' . $row['userEmail'] .'</a></li>';
	} else {
		echo '<li class="right"><a href="loginPage.php">Log In</a></li>';
	}
	?>
    </ul>
    </header>
    <section>
        <p></p>
    </section>
    <aside>
        <div style="margin: 25px">
            <p class='barlow'>Tired of social media bumming you out?</p>
        </div>
    </aside>
    <article>
        <div style="margin: 25px">
            <p class='marker'>Step into a place where the focus is on the good in your life</p>
        </div>
    </article>
    <aside>
        <div style="margin: 25px">
        <p class='arial'>
            <ul style="background-color: transparent">
            <li style="margin: 5px;">Record positive life experiences to read at a later date. </li>
            <li style="margin: 5px;">Collect inspiring sayings, quotes, snippets.</li>
            <li style="margin: 5px;">Be inspired by prompts that help you remember what you live for.</li>
            <li style="margin: 5px;">Create a personal random thought generator.</li>
            <li style="margin: 5px;">Export all of your saved thoughts, including as a PDF that can be printed as a book. </li>
            </ul>
        </p>
        </div>
        
    </aside>
    <section>
        <br>
        <p class='comfortaa'><a href="newUserPage.php" class='button'>Get Started</a></p>
        <br><br><br></b>
    </section>
    <footer><p>Copyright 2017 <a href="https://github.com/sepuckett86">sepuckett86</a> and 
    <a href="https://github.com/codegold79">codegold79</a> </p></footer>
</div>
</body>
</html>