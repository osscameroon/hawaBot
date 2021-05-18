<?php

    include_once("config.php");// configuration file

    $json_data = file_get_contents("comp.json"); // read json file in php
    $data = json_decode($json_data, true); // convrts json data to php array


    // get details
    foreach($data as $row){
        $id = $data['id'];
        $type = $data['type'];
        $parent = $data['parent'];
        $text = $data['text'];
        $date = $data['date'];
    }


    //insert
    $sql = "INSERT INTO demo(id, type, parent, text, date) VALUES ('$id', '$type', '$parent', '$text' '$date')";


    mysqli_query($con, $sql);
?>