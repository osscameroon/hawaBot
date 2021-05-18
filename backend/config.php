<?php
    $con = mysqli_connect("localhost","root","","osscameroon"); //connect to db
    if (mysqli_connect_errno()){
        echo 'Failed to connect to database: ' .mysqli_connect_errno(); // check connection
    }
?>