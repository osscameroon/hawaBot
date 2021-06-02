<?php 
    include_once("config.php");

    $result = array();
   // if exists($id){

        if (isset($_GET["id"])){
            $id = $_GET["id"];
            $result["children"] = [];
    
            $sql =  "SELECT *, (SELECT `text` FROM ".$table." WHERE id=".$id.") as parent_text FROM ".$table." WHERE `parent`=".$id;
        
            // using PDO...
            $req = $con->query($sql);
            while($row = $req->fetch()){
                $result["children"][] = remove_id_numbers($row);
            }
            $result["status"] = "success";
        }else{
            $result["status"] = "error";
            $result["message"] = "Missing parameter id";

        } 
   // } else{
     //   echo "this id does not exist";
   // }

    
        

   
    


    /// convert php array to json string
    echo json_encode($result);
?>