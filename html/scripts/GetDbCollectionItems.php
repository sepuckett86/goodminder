<?php
session_start();
require_once '../auth/class.user.php';

$userId = $_SESSION['userSession'];
$collectionId = trim($_POST['collectionId']);
$getQuote = new GetQuote($userId, $collectionId);
$getQuote->addQuoteToDatabase();

class GetQuote
{   
    protected $userId;
    protected $collectionType;
    protected $prevCollectionId;
    private $conn;
    
    public function __construct($userId, $collectionId)
    {
        $this->userId = $userId;
        $this->collectionType = 'quote';
        $this->prevCollectionId = $collectionId;
        
        $database = new Database();
		$db = $database->dbConnection();
        $this->conn = $db;
    }

    public function addQuoteToDatabase()
    {
        try {							
            $stmt = $this->conn->prepare('SELECT collectionId, recordedDate, category, mainResponse, who, source, author, reason, rating FROM collectionItemsTbl WHERE userId=:user_id AND collectionType=:collection_type ORDER BY RAND()');
            $stmt->execute(array(
                ":user_id"=>$this->userId,
                ":collection_type"=>$this->collectionType
            ));

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            while ($row['collectionId'] === $this->prevCollectionId) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
            }

            $prevCollectionId = $row['collectionId'];

            echo json_encode($row);

            return $stmt;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
}

/*id="quote-add-date-collection">Quote added <a href="#">Month Day, Year</a> to <a href="#">
Quote Collection: Inspirational</a></p>

<h4 class="lato" style="text-align: left; margin-right: 100px;" id="quote-random">
May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p class="lato" style="text-align: right; margin-right: 100px;" id="quote-who-source-author">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p>

<div class="media-body lato" style="margin-right: 100px;" id="quote-reason">
    Will and I were reading Tolkien out loud and this was the best line in the entire book.
      </div>
*/
