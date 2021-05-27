<?php 
require_once('../helpers/connection.php');

class H_model{
    function __construct(){
        $db = new Connection();
        $this->connection = $db->getConnection();

    }


}




?>