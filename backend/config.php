<?php
    header("Content-Type:text/json; Charset=UTF-8");
    
    $host = "localhost";
    $login = "root";
    $password = "";
    $database = "hawabot";

    $table = "ans_ques";

    try {
        // setting the connection using PDO
        $con = new PDO('mysql:host='.$host.';dbname='.$database, $login, $password);
    } catch(PDOException $e) {
        // We exit the script after throwing an error
        exit('Failed to connect to database: '.$e->getMessage());
    }


    function remove_id_numbers($row){
        foreach($row as $key => $value)
          if (is_int($key))
            unset($row[$key]);
      
        return $row;
    }
    
?>