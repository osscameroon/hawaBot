<?php
    // configuration file
    include_once("config.php");

    // The array of questions
    $result = array();

    // read json file in php
    $json_data = file_get_contents("comp.json");
    // convets json data to php array
    $data = json_decode($json_data, true);

    // get details
    foreach($data as $d){
        $type = $d['type'];
        $parent = $d['parent'];
        $text = $d['text'];

        //insert sql query
        $sql = "INSERT INTO ans_ques(`type`, parent, `text`) VALUES ('".$type."', ".$parent.", '".$text."')";
        
        // We execute the query
        $con->query($sql);
    }

    $result["status"] = "success";
    $result["message"] = "All questions saved !";
    // convert php array to json string
    echo json_encode($result);
?>