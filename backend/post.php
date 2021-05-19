<?php
    // configuration file
    include_once("config.php");


    // read json file in php
    $json_data = file_get_contents("comp.json");
    // convrts json data to php array
    $data = json_decode($json_data, true);

    // get details
    print_r($data);
    foreach($data as $d){
        print_r($d);

        $id = $d['id'];
        $type = $d['type'];
        $parent = $d['parent'];
        $text = $d['text'];

        //insert sql query
        $sql = "INSERT INTO demo(id, `type`, parent, `text`) VALUES ($id, '$type', $parent, '$text')";
        
        echo $sql;
        // We execute the query
        $con->query($sql);
    }

    
    echo "All questions saved !"
?>