<?php
  // configuration file
  include_once("config.php");


  // The array of questions
  $result = array();
  $result['questions'] = [];

  // query
  $query = "SELECT * FROM `ans_ques`";
  // using PDO...
  $req = $con->query($query);
  while($row = $req->fetch()){
    $result['questions'][] = $row;
  }

  /// convert php array to json string
  echo json_encode($result);
?>
