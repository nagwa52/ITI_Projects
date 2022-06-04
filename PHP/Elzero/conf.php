<?php
session_start();
if(isset($_SESSION['username'])){
    echo 'welcome '. $_SESSION['username'];
}
else{
    
    echo 'you are not permitted';
}
?>