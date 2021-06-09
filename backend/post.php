<?php
    // configuration file
    header('Content-Type: application/json');
    include_once("config.php");

    // The array of questions
    $result = array();

    // read json file in php
    $json_data = file_get_contents("php://input");
    // convets json data to php array
    $data = json_decode($json_data, true);

     //get details
    foreach($data as $d){
        $type = $d['type'];
        $parent = $d['parent'];
        $text = $d['text']; 
        
     
       $result = array();
       if (isset($_GET['id']))
       {
           $id = $_GET['id'];
       }
        
       $select_id = "SELECT * FROM ans_ques WHERE 'id' = $id ";
       $res = $con->query($select_id);
       $result = array($res);
       $result['id'] = []; 
       print_r($selected_id);
       foreach($result as $value){
           if($parent == $value){
             $sql = "INSERT INTO ans_ques(`type`, parent, `text`) VALUES ('".$type.", ".$parent.", '".$text."')";
        
            
             // We execute the query
             $con->query($sql);
            
            }else{
               $result["status"] = "failed";
               $result["message"] = "Cannot insert orphan question";
            }
        }
       
      
    }

     $result["status"] = "success";
     $result["message"] = "All questions saved !";
     // convert php array to json string
     echo json_encode($result);

?>