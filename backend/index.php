<?php
  // configuration file
  include_once("config.php");


  // The array of questions
  $result = array();
  $result['questions'] = [];

  // query
  $query = "SELECT * FROM `demo`";
  // using PDO...
  $req = $con->query($query);
  while($row = $req->fetch()){
    $result['questions'][] = $row;
  }

  /// conver php array to json string
  echo json_encode($result);
?>
