<?php
    header("Content-Type:text/json; Charset=UTF-8");
     
class Database{
    
    public $host = "localhost";
    public $username = "root";
    public $password = "";
    public $database = "hawabot";
    public $con;

    function getConnection(){

        $this -> con = null;
        try {
            // setting the connection using PDO
           $this->con = new PDO('mysql:host='.$host.';dbname='.$database, $username, $password);
        } catch(PDOException $e) {
            // We exit the script after throwing an error
            exit('Failed to connect to database: '.$e->getMessage());
        }
        return $this->con;
    }

}