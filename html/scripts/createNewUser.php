<?php
session_start();
require_once '../auth/class.user.php';

$email = trim($_POST['userEmail']);
$userName = trim($_POST['userName']);
$uniqueName = trim($_POST['userUniqueName']);
$userPass = trim($_POST['userPassword']);

$createNewUser = new CreateUser($email, $userName, $uniqueName, $userPass);

if ($createNewUser->isUserUnique()) {
    $createNewUser->saveUser();
} else {
    echo '<button class="close" data-dismiss="alert">&times;</button><strong>Sorry,</strong> email and/or user name already exists. Please try another one.';
}

class CreateUser
{
    protected $email;
    protected $userName;
    protected $uniqueName;
    protected $userPass;
    protected $code;
    protected $conn;
    public $regUser;

    public function __construct($email, $userName, $uniqueName, $userPass)
    {
        $this->email = $email;
        $this->userName = $userName;
        $this->uniqueName = $uniqueName;
        $this->userPass = $userPass;
        $this->code = md5(uniqid(rand()));

        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;

        $this->regUser = new USER();
    }

    public function isUserUnique()
    {
        try {						
            $stmt = $this->conn->prepare('SELECT * FROM usersTbl WHERE userEmail=:email_id or userName=:user_name');
            $stmt->execute(array(
                ":email_id"=>$this->email,
                ":user_name"=>$this->uniqueName
            ));

            if ($stmt->rowCount() > 0) {
                return false;
            }

            return true;

        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }

    public function saveUser()
    {
        if ( $this->regUser->register (
            $this->email, 
            $this->userName, 
            $this->uniqueName, 
            $this->userPass, 
            $this->code )) 
        {
            $id = $this->regUser->lasdID();
            $key = base64_encode($id);

            $emailTemplate = file_get_contents('../mailer/confirmEmailInline.html',true);
            $originals = array( '{{ user }}', '{{ confirm }}', '{{ browserPost }}' );
            $replacements = array( $this->uniqueName, 'http://goodminder.ihostfull.com/verify.php?id='. $key . '&code=' . $this->code, '?email=' . $this->email . '&id=' . $key . '&code=' . $this->code . '&user=' . $this->uniqueName );

            $message = str_replace($originals, $replacements, $emailTemplate);
            $subject = 'Confirm Registration';
            
            if ($this->regUser->send_mail($this->email, $message, $subject)) {
                echo "<button class='close' data-dismiss='alert'>&times;</button><strong>Success!</strong>  We've sent an email to " . $this->email . " Please click on the confirmation link in the email to create your account.";
            };   
        } else {
            echo '<button class="close" data-dismiss="alert">&times;</button><strong>Sorry,</strong> query could not execute.';
        }
    }
}