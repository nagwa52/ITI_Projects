<?php
$title="welcome";
$heading ="First project about";
$paragraph="we want to learn";
$concatenation ="concatenation";
$languages  ="<ul>";
$languages .="<li>PHP</li>";
$languages .="<li>HTML</li>";
$languages .="<li>CSS</li>";
$languages .="</ul>";

$test ="this is test"
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;?></title>
</head>
<body>          
  <h1><?php echo $heading ." ". $concatenation;?></h1>
  <p><?php echo $paragraph ." ". $concatenation ;?></p> 
  <p><?php echo "We love many languages"  ;?></p> 
  <p><?php echo $languages ;?></p>
</body>
</html>