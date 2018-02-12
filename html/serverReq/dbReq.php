<?php
session_start();
//require_once '../auth/class.user.php';
//use DbRequests;
$dbRequest = new DbRequests();
// $dbRequest->collectParameters();

class DbRequests 
{
    protected $user_home;
    protected $stmt;
    protected $userId;
    protected $collectionType;
    protected $answer;
    protected $reason;
    protected $promptId;
    protected $recordedDate;

    protected function __construct()
    {
        //$this->user_home = new USER();
        //$this->userId = $row['userId'];
        //$this->collectionType = trim($_POST['collectionType']);
        //$this->answer = trim($_POST['answer']); // main response
        //$this->reason = trim($_POST['reason']);
        //$this->promptId = trim($_POST['promptId']); // promptId
        //$this->recordedDate = time();
        echo "blah";
    }
    
    protected function collectParameters() 
    {
        if ($this->user_home->is_logged_in() ) {
            $this->stmt = $this->user_home->runQuery('SELECT * FROM usersTbl WHERE userID=:uid');
            $this->stmt->execute(array(':uid'=>$_SESSION['userSession']));
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        
        echo "userid: $this->userId, collectionType: $this->collectionType, answer: $this->answer, reason: $this->reason, promptId: $this->promptId, recordedDate: $this->recordedDate";
    }

    
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
