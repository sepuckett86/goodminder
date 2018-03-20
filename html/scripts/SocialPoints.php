<?php
session_start();
require_once 'auth/class.user.php';

class SocialPoints
{   
    private $conn;
    private $userId;
    public $debug;

    public function __construct()
    {
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function addDailyLogInPoint($userId)
    {   
        $nowDateTime = new DateTime('NOW');
        $todayDate = $nowDateTime->format('Y-m-d');
        $todayDateTime = $nowDateTime->format('Y-m-d H:i:s');
        $lastLoginDateTime = $this->getLastLoginTime($userId);
        
        if( !empty($lastLoginDateTime) ) {
            $lastLoginDateTime = new DateTime($lastLoginDateTime);
            $lastLoginDate=$lastLoginDateTime->format('Y-m-d');
        } else {
            $lastLoginDate = null; 
        }
        
        if($lastLoginDate === null || $lastLoginDate < $todayDate) {
            try
            {
                $stmt = $this->conn
                    ->prepare('UPDATE socialTbl SET points = points + 1, lastLogin = :last_login, lastUpdated =:last_login WHERE userId = :user_id LIMIT 1;');
                $stmt->bindparam(":user_id", $userId);
                $stmt->bindparam(":last_login", $todayDateTime);
                $stmt->execute();
            } 
            catch(PDOException $ex)
            {
                echo $ex->getMessage();
            }
        }
    }

    public function getLastLoginTime($userId)
    {
        $stmt = $this->conn->prepare('SELECT lastLogin FROM socialTbl WHERE userId=:user_id');
        $stmt->execute(array(
            ":user_id"=>$userId
        ));

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $lastLogin = $row['lastLogin'];

        return $lastLogin;
    }

    public function debug()
    {
        return $this->debug;
    }
}
