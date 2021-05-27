<?php 

    $host = "localhost";
    $login = "root";
    $password = "";
    $database = "hawabot";


    class Connection{
        function getConnection(){
            try {
                // setting the connection using PDO
                $con = new PDO('mysql:host='.$host.';dbname='.$database, $login, $password);
                echo 'Connected to the database';
            } catch(PDOException $e) {
                // We exit the script after throwing an error
                exit('Failed to connect to database: '.$e->getMessage());

            }
        }
    }



?>