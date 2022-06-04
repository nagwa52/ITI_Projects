<?php
//echo "Hello " . $_GET['username'] . " With password " . $_GET['password'];
if($_SERVER['REQUEST_METHOD']=='POST'){
$array =array("nagwa","ahmed","malak");
if(in_array($_POST['username'],$array)){
    echo "Hello " . $_POST['username'] . " With password " . $_POST['password'];
}
else{
    echo "You cant access This Page";
}
}

?>