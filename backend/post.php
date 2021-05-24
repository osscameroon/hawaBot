<?php
    // configuration file
    include_once("config.php");


    // read json file in php
   /* $json_data = file_get_contents("comp.json");
    // convets json data to php array
    $data = json_decode($json_data, true);

    // get details
    print_r($data);
    foreach($data as $d){
        print_r($d);

        $id = $d['id'];
        $type = $d['type'];
        $parent = $d['parent'];
        $text = $d['text'];*/

        //insert sql query
        $sql = "INSERT INTO ans_ques(id, `type`, parent, `text`) VALUES (1, 'Q', 1, 'Goals of Oss'),
         (2, 'A',2,'Founders'),
         (3, 'Q', 2, 'Bring developers together')";
        
        
        // We execute the query
        $con->query($sql);
   // }

    echo "All questions saved !";
?>