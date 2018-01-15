<?php
class Database
{
	/* private $host = "sql306.ihostfull.com";
	private $db_name = "uoolo_21329894_goodminderDb";
	private $username = "uoolo_21329894";
	private $password = "bDrednimdoog886"; */

	private $host = "localhost";
	private $db_name = "goodminderDb";
	private $username = "goodminderAdmin";
	private $password = "bDrednimdoog";
	
    public $conn;

    public function dbConnection()
	{

	    $this->conn = null;
        try
		{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
		catch(PDOException $exception)
		{
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
