<?php
session_start();
require_once 'auth/class.user.php';

$reg_user = new USER();

if($reg_user->is_logged_in()!="")
{
	$reg_user->redirect('login.php');
}


if(isset($_POST['btn-signup']))
{
	$email = trim($_POST['txtemail']);
	$uname = $email;
	$upass = trim($_POST['txtpass']);
	$cpass = trim($_POST['txtcpass']);
	$code = md5(uniqid(rand()));
	
	$stmt = $reg_user->runQuery("SELECT * FROM usersTbl WHERE userEmail=:email_id");
	$stmt->execute(array(":email_id"=>$email));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	
	if($stmt->rowCount() > 0) {
		$msg = "
		      <div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Sorry,</strong> email already exists. Please try another one.
			  </div>
			  ";
	} elseif($cpass !== $upass ) {
		$msg = "<div class='alert alert-error'>
				<button class='close' data-dismiss='alert'>&times;</button>
				<strong>Sorry!</strong> Passwords do not match.
				</div>";
	} elseif($reg_user->register($uname,$email,$upass,$code)){
		$id = $reg_user->lasdID();		
		$key = base64_encode($id);
		$id = $key;
		
		$message = "					
			Hello $uname,
			<br /><br />
			Welcome to Goodminder!<br/>
			To complete your registration, please click the following link:<br/>
			<br /><br />
			<a href='http://goodminder.ihostfull.com/verify.php?id=$id&code=$code'>Click HERE to Activate :)</a>
			<br /><br />
			Thanks,";
					
		$subject = "Confirm Registration";
					
		$reg_user->send_mail($email,$message,$subject);	
		$msg = "
				<div class='alert alert-success'>
					<button class='close' data-dismiss='alert'>&times;</button>
					<strong>Success!</strong>  We've sent an email to $email.
				Please click on the confirmation link in the email to create your account. 
				</div>
				";
	} else {
		echo "Sorry , query could no execute...";		
	}
}
?>

<!DOCTYPE html>

<html>
<head>
    <title>goodminder new user</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
</head>

<body>
<div id="container">
    <header><ul>
    <li class="left"><a href="index.php">goodminder</a></li>
    <li class="right"><a href="example.php">Examples</a></li>
    <li class="right"><a href="about.php">About</a></li>
    <li class="right"><a href="login.php">Log In</a></li>
    </ul></header>
     <section>
        <p></p>
    </section>
    <aside style="text-align: left">
        <div style="margin: 25px">
        <div class="box">
        <h1>Create New Account</h1>
        <?php if(isset($msg)) echo $msg; ?>
        <form style="font-size: 18px" method="post">    
            <table>
            <tr>
                <td>Email: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="text" placeholder="my_email@awesome.com" name="txtemail" required></td>
            </tr>
            <tr><td></td></tr>
            <tr>
                <td>Password: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="password" placeholder="************" name="txtpass" required></td>
            </tr>
            <tr><td></td></tr>
            <tr>
                <td>Re-type Password: </td>
                <td><input class="submissionfield" style="font-size:16px;" type="password" placeholder="************" name="txtcpass" required></td>
            </tr>
            </table>
            <br>
            <button class="button" type="submit" name="btn-signup">Submit</button>
        </form>
        </div>
        <br>
        <br>
        <p>Already have an account? Go to: <p class='comfortaa'><a href="login.php" class='button'>Log In Page</a></p></p>
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
