<?php
  // configuration file
  include_once("config.php");

  function format_question($row){
    foreach($row as $key => $value)
      if (is_int($key))
        unset($row[$key]);
  
    return $row;
  }

  // The array of questions
  $result = array();
  $result['questions'] = [];

  // query
  $query = "SELECT FROM `ans_ques` WHERE id = 2";
  // using PDO...
  $req = $con->query($query);
  //while($row = $req->fetch()){
    $result['questions'][] = format_question($row);
  //}

  /// convert php array to json string
  echo json_encode($result);
?>
