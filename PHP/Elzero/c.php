<?php
if(empty($_SESSION['counter'])){
    $_SESSION['counter'] =1;
}
else{
    $_SESSION['counter'] ++;
}
echo'the number of visit is ' .  $_SESSION['counter'] .'times' ;

?>