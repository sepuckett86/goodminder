<?php
session_start();
require_once '../auth/class.user.php';

$userId = $_SESSION['userSession'];
$collectionType = trim($_POST['collectionType']);
$answer = trim($_POST['answer']); // main response
$reason = trim($_POST['reason']);
$promptIdFull = trim($_POST['promptId']); 
$promptId = substr($promptIdFull, strpos($promptIdFull,'_'));

$timeNow = new DateTime('NOW');
$recordedDate = $timeNow->format('Y-m-d H:i:s'); 

if ( $collectionType === 'prompt' ) {
    $addPrompt = new AddPrompt($userId, $collectionType, $answer, $reason, $promptId, $recordedDate);
    $addPrompt->addPromptToDatabase();
} elseif ( $collectionType === 'quote' ) {

} elseif ( $collectionType === 'custom') {

} else {
    echo "Error: collection type is not recognized.";
}

class AddPrompt
{   
    protected $userId;
    protected $collectionType;
    protected $answer;
    protected $reason;
    protected $promptId;
    protected $recordedDate;
    private $conn;
    
    public function __construct($userId, $collectionType, $answer, $reason, $promptId, $recordedDate)
    {
        $this->userId = $userId;
        $this->collectionType = $collectionType;
        $this->answer = $answer;
        $this->reason = $reason;
        $this->promptId = $promptId;
        $this->recordedDate = $recordedDate;
        
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function addPromptToDatabase()
    {
        try
        {							
            $stmt = $this->conn->prepare('INSERT INTO collectionItemsTbl (userId, collectionType, mainResponse, reason, promptId, recordedDate) VALUES (:user_id, :collection_type, :main_response, :reason, :prompt_id, :recorded_date)');
            $stmt->bindparam(":user_id",$this->userId);
            $stmt->bindparam(":collection_type",$this->collectionType);
            $stmt->bindparam(":main_response",$this->answer);
            $stmt->bindparam(":reason",$this->reason);
            $stmt->bindparam(":prompt_id",$this->promptId);
            $stmt->bindparam(":recorded_date",$this->recordedDate);
            $stmt->execute();	
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}

class addQuote
{   
    public function addPrompt($userId, $collectionType, $answer, $reason, $promptId, $recordedDate)
    {
        try
        {							
            $stmt = $this->conn->prepare('INSERT INTO collectionItemsTbl (userId, collectionType, mainReponse, reason, promptId, recordedDate) VALUES(:user_id, :collection_type, :main_response, :reason, :prompt_id, :recorded_date)');
            $stmt->bindparam(":user_id",$userId);
            $stmt->bindparam(":collection_type",$collectionType);
            $stmt->bindparam(":main_response",$answer);
            $stmt->bindparam(":reason",$reason);
            $stmt->bindparam(":prompt_id",$promptId);
            $stmt->bindparam(":recorded_date",$recordedDate);
            $stmt->execute();	
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}

class addCustom
{   
    public function addPrompt($userId, $collectionType, $answer, $reason, $promptId, $recordedDate)
    {
        try
        {							
            $stmt = $this->conn->prepare('INSERT INTO collectionItemsTbl (userId, collectionType, mainReponse, reason, promptId, recordedDate) VALUES(:user_id, :collection_type, :main_response, :reason, :prompt_id, :recorded_date)');
            $stmt->bindparam(":user_id",$userId);
            $stmt->bindparam(":collection_type",$collectionType);
            $stmt->bindparam(":main_response",$answer);
            $stmt->bindparam(":reason",$reason);
            $stmt->bindparam(":prompt_id",$promptId);
            $stmt->bindparam(":recorded_date",$recordedDate);
            $stmt->execute();	
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}