<?php
session_start();
require_once 'auth/class.user.php';
$user = new USER();

if($user->is_logged_in()!="")
{
	$user->redirect('index.php');
}

if(isset($_POST['btn-submit']))
{
	$email = $_POST['txtemail'];
	
	$stmt = $user->runQuery("SELECT userId FROM usersTbl WHERE userEmail=:email LIMIT 1");
	$stmt->execute(array(":email"=>$email));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);	
	if($stmt->rowCount() == 1)
	{
		$id = base64_encode($row['userId']);
		$code = md5(uniqid(rand()));
		
		$stmt = $user->runQuery("UPDATE usersTbl SET tokenCode=:token WHERE userEmail=:email");
		$stmt->execute(array(":token"=>$code,"email"=>$email));
		
		$message= "
				   Hello , $email
				   <br /><br />
				   We got requested to reset your password, if you do this then just click the following link to reset your password, if not just ignore this email,
				   <br /><br />
				   Click Following Link To Reset Your Password 
				   <br /><br />
				   <a href='http://goodminder.ihostfull.com/resetpass.php?id=$id&code=$code'>click here to reset your password</a>
				   <br /><br />
				   thank you :)
				   ";
		$subject = "Password Reset";
		
		$user->send_mail($email,$message,$subject);
		
		$msg = "<div class='alert alert-success'>
					<button class='close' data-dismiss='alert'>&times;</button>
					We've sent an email to $email.
                    Please click on the password reset link in the email to generate new password. 
			  	</div>";
	}
	else
	{
		$msg = "<div class='alert alert-danger'>
					<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Sorry!</strong>  this email not found. 
			    </div>";
	}
}
?>

<!DOCTYPE html>

<html>
<head>
    <title>goodminder reset</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
</head>

<body>
<div id="container">
<header>
    <ul>
    <li class="left"><a href="index.php">goodminder</a></li>
    <li class="right"><a href="examplePage.html">Examples</a></li>
    <li class="right"><a href="aboutPage.html">About</a></li>
    <li class="right"><a href="loginPage.php">Log In</a></li>
    </ul>
</header>
 <section>
        <p></p>
    </section>
<aside style="text-align: left">
    <div style="margin: 25px">
        <h1>Reset Password</h1>
        <form style="font-size: 18px">
            <?php
			if(isset($msg))
			{
				echo $msg;
			}
			else
			{
				?>
              	<div class='alert alert-info'>
				Please enter your email address. You will receive a link to create a new password via email.!
				</div>  
                <?php
			}
			?>
			<p>Type in your email and when you hit submit, you'll get a link in your email
            inbox allowing you to reset your password</p>
            <table>
            <tr>
                <td>Email: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="email" placeholder="my_email@awesome.com" name="txtemail" required></td>
            </tr>
            </table>
            <br>
            <button class="button" type="submit" name="btn-submit">Submit</button>
        </form>
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
