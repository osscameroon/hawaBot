<?php
header("Content-Type: application.json; charset:UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once("configg.php");
include_once("demo.php");



$database = new Database();
$db = $database->getConnection();
$result = new Ques_ans($db);

 $data = json_decode($json_data);

//make sure data is not empty
if(
    !empty($data->type)&&
    !empty($data->parent)&&
    !empty($data->text)
){
    // set value
    $result->type = $data->type;
    $result->parent = $data->parent;
    $result->text = $data->
    
     ;

    //add a question or answer
    if($result->create()){
        echo json_encode(array("message" => "Succesfully added to db"));

    }
    else{
        http_response_code(503);
    }
    
}
else{
    http_response_code(400);
    echo json_encode(array("message" => "Not saved"));
}





?>