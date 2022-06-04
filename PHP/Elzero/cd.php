<?php
session_start();
$array =array("Ahmed","nagwa");
if($_SERVER['REQUEST_METHOD']=="POST"){
    $username= $_POST['username'];
if(in_array($username,$array)){
    $_SESSION['username'] = $username;
  
   echo 'The page will direct to Admin panel';
   header('REFRESH:2;URL =conf.php');
}
else{
    echo 'Not Found';
}


}
else{
   // echo 'you have not permession to enter this page';
   header('REFRESH:2;URL =session.php');
   
}
?>