<?php 

class Ques_ans{
  
    // database connection and table name
    private $conn;
    private $table_name = "ques_ans";
  
    // object properties
    public $type;
    public $parent;
    public $text;
    
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
}


function create(){
  
    // query to insert record
    $query = "INSERT INTO
                " . $this->ques_ans . "
            SET
                type=:type, parent=:parent, text=:text";
  
    // prepare query
    $stmt = $this->conn->prepare($query);
  
    // sanitize
    $this->type=htmlspecialchars(strip_tags($this->type));
    $this->parent=htmlspecialchars(strip_tags($this->parent));
    $this->text=htmlspecialchars(strip_tags($this->text));

  
    // bind values
    $stmt->bindParam(":type", $this->type);
    $stmt->bindParam(":parent", $this->parent);
    $stmt->bindParam(":text", $this->text);
   
  
    // execute query
    if($stmt->execute()){
        return true;
    }
  
    return false;
      
}


?>