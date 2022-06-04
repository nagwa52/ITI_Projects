<?php
//-----------------------------------------------------------------------------------
// setcookie(name,value,expired,path,domain,secure,httponly)
//-----------------------------------------------------------------------------------
  
// setcookie("website","test", time() + 3600,"/");
// if(count($_COOKIE)>0){
//     echo "yes cookie is enabled";
// }
// else{
//     echo "yes cookie is not enabled";  
// }
$mainColor ='#FFF';
if($_SERVER['REQUEST_METHOD']=='POST'){
     $mainColor= $_POST['colorname'];
    setcookie('Background',$mainColor, time() + 3600,"/");
}

if(isset($_COOKIE['Background'])){
    $body =  $_COOKIE['Background'];
}
else{
    $body = $mainColor;
}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color :<?php echo $body ?>">
<form action= "<?php echo $_SERVER['PHP_SELF'];?>" method='POST'> 
       <input type="color" name="colorname" >
       <input type="submit" value="choose" >
</form>  
</body>
</html>