<?php
class Ques_ans{
  
    // database connection and table name
    private $conn;
    private $table_name = "ques_ans";
  
    // object properties
    public $type;
    public $parent;
    public $text;
    ;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
}
?>