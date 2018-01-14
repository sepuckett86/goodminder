<?php
require_once 'auth/class.user.php';
$user = new USER();

if(empty($_GET['id']) && empty($_GET['code']))
{
	$user->redirect('login.php');
}

if(isset($_GET['id']) && isset($_GET['code']))
{
	$id = $_GET['id'];
	$code = $_GET['code'];
	
	$stmt = $user->runQuery("SELECT * FROM usersTbl WHERE userId=:uid AND tokenCode=:token");
	$stmt->execute(array(":uid"=>$id,":token"=>$code));
	$rows = $stmt->fetch(PDO::FETCH_ASSOC);
	
	if($stmt->rowCount() == 1)
	{
		if(isset($_POST['btn-reset-pass']))
		{
			$pass = $_POST['pass'];
			$cpass = $_POST['confirm-pass'];
			
			if($cpass!==$pass)
			{
				$msg = "<div class='alert alert-block'>
						<button class='close' data-dismiss='alert'>&times;</button>
						<strong>Sorry!</strong> Passwords do not match. Try again. 
						</div>";
			}
			else
			{
				$password = md5($cpass);
				$stmt = $user->runQuery("UPDATE usersTbl SET userPass=:upass WHERE userId=:uid");
				$stmt->execute(array(":upass"=>$password,":uid"=>$rows['userId']));
				
				$msg = "<div class='alert alert-success'>
						<button class='close' data-dismiss='alert'>&times;</button>
						Password changed successfully!
						</div>";
				header("refresh:5;login.php");
			}
		}	
	}
	else
	{
		$msg = "<div class='alert alert-success'>
				<button class='close' data-dismiss='alert'>&times;</button>
				No Account Found, Try again
				</div>";				
	}
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Password Reset</title>
  </head>
	<body id="login">
    <div class="container">
    	<div class='alert alert-success'>
			<strong>Hello, </strong>  <?php echo $rows['userName'] ?>! You are here to reset your forgotten password.
		</div>
        <form class="form-signin" method="post">
        <h3 class="form-signin-heading">Password Reset.</h3><hr />
        <?php
        if(isset($msg))
		{
			echo $msg;
		}
		?>
		<input type="password" class="input-block-level" placeholder="New Password" name="pass" required />
        <input type="password" class="input-block-level" placeholder="Confirm New Password" name="confirm-pass" required />
     	<hr />
        <button class="btn btn-large btn-primary" type="submit" name="btn-reset-pass">Reset Your Password</button>
      </form>
    </div> <!-- /container -->
	</body>
</html>