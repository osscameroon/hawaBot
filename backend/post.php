<?php
    // configuration file
    include_once("config.php");


    // read json file in php
    $json_data = file_get_contents("comp.json");
    // convrts json data to php array
    $data = json_decode($json_data, true);

    // get details
    foreach($data as $row){
        $id = $data['id'];
        $type = $data['type'];
        $parent = $data['parent'];
        $text = $data['text'];
    }

    //insert sql query
    $sql = "INSERT INTO demo(id, `type`, parent, `text`) VALUES ('$id', '$type', '$parent', '$text')";

    // We execute the query
    $con->query($sql);

    echo "All questions saved !"
?>