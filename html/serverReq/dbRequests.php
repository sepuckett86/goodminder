<?php
session_start();
require_once '../auth/class.user.php';

$userId = $_SESSION['userSession'];
$collectionType = trim($_POST['collectionType']);
$timeNow = new DateTime('NOW');
$recordedDate = $timeNow->format('Y-m-d H:i:s'); 

if ( $collectionType === 'prompt' ) {
    $promptIdFull = trim($_POST['promptId']); 
    $promptId = substr($promptIdFull, strpos($promptIdFull,'_'));
    $reason = trim($_POST['reason']);
    $answer = trim($_POST['answer']); // main response
    $addPrompt = new AddPrompt($userId, $collectionType, $answer, $reason, $promptId, $recordedDate);
    $addPrompt->addPromptToDatabase(); 
} elseif ( $collectionType === 'quote' ) {
    $quote = trim($_POST['quote']); // main response
    $who = trim($_POST['who']);
    $source = trim($_POST['source']);
    $author = trim($_POST['author']);
    $reason = trim($_POST['reason']);
    $category = trim($_POST['category']);
    $addQuote = new AddQuote($userId, $collectionType, $quote, $who, $source, $author, $reason, $category, $recordedDate);
    $addQuote->addQuoteToDatabase();
} elseif ( $collectionType === 'custom') {
    $customText = trim($_POST['customText']);
    $category = trim($_POST['category']);
    $addCustom = new AddCustom($userId, $collectionType, $customText, $category, $recordedDate);
    $addCustom->addCustomToDatabase();
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
            echo $this->recordedDate;	
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}

class AddQuote
{   
    protected $userId;
    protected $collectionType;
    protected $quote;
    protected $who;
    protected $source;
    protected $author;
    protected $reason;
    protected $category;
    private $conn;
    
    public function __construct($userId, $collectionType, $quote, $who, $source, $author, $reason, $category, $recordedDate)
    {
        $this->userId = $userId;
        $this->collectionType = $collectionType;
        $this->quote = $quote;
        $this->who = $who;
        $this->source = $source;
        $this->author = $author;
        $this->reason = $reason;
        $this->category = $category;
        $this->recordedDate = $recordedDate;
        
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function addQuoteToDatabase()
    {
        try
        {							
            $stmt = $this->conn->prepare('INSERT INTO collectionItemsTbl (userId, collectionType, mainResponse, author, reason, source, recordedDate, who, category) VALUES (:user_id, :collection_type, :main_response, :author, :reason, :source, :recorded_date, :who, :category)');
            $stmt->bindparam(":user_id",$this->userId);
            $stmt->bindparam(":collection_type",$this->collectionType);
            $stmt->bindparam(":main_response",$this->quote);
            $stmt->bindparam(":author",$this->author);
            $stmt->bindparam(":reason",$this->reason);
            $stmt->bindparam(":source",$this->source);
            $stmt->bindparam(":recorded_date",$this->recordedDate);
            $stmt->bindparam(":who",$this->who);
            $stmt->bindparam(":category",$this->category);
            $stmt->execute();	
            echo $this->recordedDate;
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}

class AddCustom
{   
    protected $userId;
    protected $collectionType;
    protected $customText;
    protected $category;
    private $conn;
    
    public function __construct($userId, $collectionType, $customText, $category, $recordedDate)
    {
        $this->userId = $userId;
        $this->collectionType = $collectionType;
        $this->customText = $customText;
        $this->category = $category;
        $this->recordedDate = $recordedDate;
        
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function addCustomToDatabase()
    {
        try
        {							
            $stmt = $this->conn->prepare('INSERT INTO collectionItemsTbl (userId, collectionType, mainResponse, category, recordedDate) VALUES (:user_id, :collection_type, :main_response, :category, :recorded_date)');
            $stmt->bindparam(":user_id",$this->userId);
            $stmt->bindparam(":collection_type",$this->collectionType);
            $stmt->bindparam(":main_response",$this->customText);
            $stmt->bindparam(":category",$this->category);
            $stmt->bindparam(":recorded_date",$this->recordedDate);
            $stmt->execute();	
            echo $this->recordedDate;
            return $stmt;
        }
        catch(PDOException $ex)
        {
            echo $ex->getMessage();
        }
    }
}