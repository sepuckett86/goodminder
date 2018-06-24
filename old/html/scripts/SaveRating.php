<?php
session_start();
require_once '../auth/class.user.php';

$userId = $_SESSION['userSession'];
$rating = $_POST['rating'];
$collectionTypeId = $_POST['collectionTypeId'];
$collectionId = substr($collectionTypeId, strpos($collectionTypeId, '_')+1);

$saveRating = new saveRating($collectionId, $rating);
$saveRating->saveRating();

class SaveRating
{   
    protected $collectionId;
    protected $rating;
    private $conn;
    
    public function __construct($collectionId, $rating)
    {
        $this->collectionId = $collectionId;
        $this->rating = $rating;
        
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function saveRating()
    {
        try
        {							
            $stmt = $this->conn->prepare('UPDATE collectionItemsTbl SET rating = :rating WHERE collectionId = :collection_id LIMIT 1');
            $stmt->bindparam(":collection_id",$this->collectionId);
            $stmt->bindparam(":rating",$this->rating);
            $stmt->execute();
            echo $this->collectionId . "'s rating set with " . $this->rating;
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}