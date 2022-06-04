
<?php
session_start();
if($_SERVER['REQUEST_METHOD']=='POST'){
    $userName =$_POST['name'] ;
    $email = $_POST['email'];
    $message =$_POST['message'];
    
    $formErrors = array();
    if (strlen($userName)>100){
        $formErrors[] ="* Username must be less than 100 character ";
    }
    if (strlen($message) > 255){
        $formErrors[] ="* Message can't be greater than 255 character";
    }
   else{
    date_default_timezone_set('Africa/Cairo');
    $file ="file.txt";
    $log_file_data =  date("F j Y g:i a")."," .$_SERVER['REMOTE_ADDR'] .","
     . $email. ",".$userName ;
    file_put_contents($file,$log_file_data . "\n", FILE_APPEND);
  
}
}
?>
<html>

<head>
    <meta name="viewport" content="width=device-width , initial-scale=1">
    <title> contact form </title>

    <style>
    .container {
        margin: 20px auto;
        max-width: 500px;
        max-height: 500px;
    }
    </style>
</head>

<body>
    <div class="container">
        <h2>
            <?php
          if (!isset($_COOKIE['count'])) { 
            echo "Welcome! This is the first time you have viewed this page."; 
            $cookie = 1;
            setcookie("count", $cookie);
          }else{
            $cookie = ++$_COOKIE['count'];
            setcookie("count", $cookie); 
            echo "You have viewed this page ".$_COOKIE['count']." times."; 
            }
            ?>
        </h2>
        <h3> Contact Form </h3>

        <div id="after_submit">
            <?php

foreach(file('file.txt') as $line) {
 
    $pieces = explode(',', $line);
    echo 'visit Date : ' .$pieces[0]. "<br>";
    echo 'IP : ' .$pieces[1]. "<br>";
    echo 'Email : ' .$pieces[2]. "<br>";
    echo 'Name : ' .$pieces[3]. "<br>";
    echo '___________________________________________' . "<br>";
}
?>
</div>
</div>
</body>
</html>