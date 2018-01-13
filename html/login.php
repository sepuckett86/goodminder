<?php
session_start();
require_once 'auth/class.user.php';
$user_login = new USER();

if($user_login->is_logged_in()!="")
{
	$user_login->redirect('index.php');
}

if(isset($_POST['btn-login']))
{
	$email = trim($_POST['txtemail']);
	$upass = trim($_POST['txtupass']);
	
	if($user_login->login($email,$upass))
	{
		$user_login->redirect('index.php');
	}
}
?>

<!DOCTYPE html>

<html>
<head>
    <title>goodminder login</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
</head>

<body>
<div id="container">
    <header><ul>
    <li class="left"><a href="index.php">goodminder</a></li>
    <li class="right"><a href="examplePage.html">Examples</a></li>
    <li class="right"><a href="aboutPage.html">About</a></li>
    <li class="right"><a href="loginPage.php">Log In</a></li>
    </ul></header>
    <section>
        <p></p>
    </section>
    <aside style="text-align: left">
        <div style="margin: 25px">
        <div class="box">
        <h1>Log In</h1>
        <?php 
		if(isset($_GET['inactive']))
		{
			?>
            <div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Sorry!</strong> This Account is not Activated Go to your Inbox and Activate it. 
			</div>
            <?php
		}
		?>
        <form style="font-size: 18px" method="post">
		<?php
        if(isset($_GET['error']))
		{
			?>
            <div class='alert alert-success'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Wrong Details!</strong> 
			</div>
            <?php
		}
		?>
            <table>
            <tr>
                <td>Email: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="email" placeholder="my_email@awesome.com" name="txtemail" required></td>
            </tr>
            <tr><td></td></tr>
            <tr>
                <td>Password: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="password" placeholder="************" name="txtupass" required></td>
            </tr>
            </table>
            <br>
            <button class="button" type="submit" name="btn-login">Submit</button>
        </form>
        </div>
        <br>
        <br>
        <p>First time here? Go to: <p class='comfortaa'><a href="newUserPage.php" class='button'>New User Page</a></p></p>
        <p>Did you forget your password? Go to: <p class='comfortaa'><a href="resetPasswordPage.php" class='button'>Reset Password Page</a></p></p>
        </div>
    </aside>
 <section>
        <p></p>
    </section>
<footer>
    <p>Copyright 2017 <a href="https://github.com/sepuckett86">sepuckett86</a> and 
    <a href="https://github.com/codegold79">codegold79</a> </p>
</footer>
</div>
</body>
</html>
