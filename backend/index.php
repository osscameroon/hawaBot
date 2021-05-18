<?php
include_once("config.php");
$query = "SELECT * FROM `demo`";
$result = mysqli_query($con, $query);

$arr = array(); // create an array to loop over results and convert mysql data to an array
while($row = mysqli_fetch_assoc($result)){
  $arr[] = $row;
}

echo json_encode($arr); // conver php array to json string





?>


 
