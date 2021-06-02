<?php 
    include_once("config.php");

    $result = array();
    if (isset($_GET["id"]))
    {
        $id = $_GET["id"];
        $result["children"] = [];

        $sql =  "SELECT *, (SELECT `text` FROM ".$table." WHERE id=".$id.") as parent_text FROM ".$table." WHERE `parent`=".$id;
    
        // using PDO...
        $req = $con->query($sql);
        $count = 0;
        while($row = $req->fetch())
        {
            $flag = remove_id_numbers($row);
            $count = $count + count($flag);
            $result["children"][] = $flag;
        }
        if($count == 0) 
            $result["status"] = "failed";
        else 
            $result["status"] = "success";
        
    }
    else
    {
        $result["status"] = "error";
        $result["message"] = "Missing parameter id";
    } 
    /// convert php array to json string
    echo json_encode($result);
?>