<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <?php
  /*
  function displayYears($year,$end){
  echo "<select name = 'years'>";
for($start =$year ;$year<=$end;$year++){
    echo "<option value ='$year'>".$year."<option/>";
}
  echo '</select>';
}
displayYears("2000","2022");


$langs["Laravel"]="76%";
echo "<h2>The languages are</h2>";
echo'<ul>';
foreach($langs as $lang =>$percentage){
echo "<li>" . $lang . "=>" . $percentage . "</li>";
}
echo'</ul>';

$lang =array(
    "html",
    "css",
    "php",
);
//$result =array_search("php",$lang);
if (in_array("php",$lang)){
    echo "yes ";
}
$langs = array(
    "html"     =>"60%",
    "css"      =>"50%",
    "MySql"    =>"50%",
    "python"   =>"50%",
); 

$langs =array(
    "html",
    "css",
    "python",
);
echo "<pre>";
print_r($langs);
echo "</pre>";
--------------------------------------
// to push many elelments in the array
--------------------------------------
array_push($langs,"Ajax","php");
---------------------------------------
// to reverse the elements in the array
----------------------------------------
array_unshift($langs,"Ajax","php");
echo "<pre>";
print_r($langs);
echo "</pre>";
// if(array_key_exists("html",$langs)){
//     echo "yes it is found ";
// }

// echo "the result is in position $result and value is " .$lang[$result];

$lang =array(
    "html",
    "css",
    "php",
    "python",
);
echo "<pre>";
print_r($lang);
echo "</pre>";
$lasElement =array_pop($lang);
$firstElement =array_shift($lang);
echo "<pre>";
print_r($lang);
//---------------------------------------
// to pop the last element from array
//---------------------------------------
echo "The last elemnt $lasElement ". "<br>";
//---------------------------------------
// to pop  the first element from array
//---------------------------------------
echo "The first element " .$firstElement;
echo "</pre>";

//------------------------------------------
// sort indexing array
//------------------------------------------
$lang =array(
    "html",
     30,
    "css",
    "php",
    10,
    "python",
    20,
);
//sort($lang); // for sort
//sort($lang,SORT_REGULAR); // for REGULAR SORT string first and number after that 
//sort($lang,SORT_STRING); // for REGULAR SORT number first and string after that  deal with them as they are all string
rsort($lang); // for SORT in reverse order

echo "<pre>";
print_r($lang);
echo "</pre>";

//=========================================================================================================================
$langs = array(
    "html"     =>"60%",
    "css"      =>"40%",
    "mySql"    =>"70%",
    "python"   =>"15%",
);
echo "<pre>";
print_r($langs);
echo "</pre>";
//-----------------------------------------------------------
 // for sort  value of the associative array in order
 //----------------------------------------------------------
//asort($langs,SORT_REGULAR);
 //----------------------------------------------------------
  // for sort  value of the associative array in reverse order
 //----------------------------------------------------------
 //rsort($langs);
// =========================================================================================================================
  //-----------------------------------------------------------
   // for sort  key of the associative array in order
   //----------------------------------------------------------
  ksort($langs,SORT_REGULAR);
  //----------------------------------------------------------
   // for sort  key of the associative array in reverse order
   //----------------------------------------------------------
  krsort($langs);
echo "<pre>" ;
echo "sort  key of the associative array in order ";
print_r($langs);
echo "</pre>";

//=======================================================================================================================
//----------------------------------------------------------
// ARRAY SHUFFLE AND REVERSE
//----------------------------------------------------------
   $langs = array(
    "html",
    "css" ,     
    "mySql",    
    "python" ,
    "Ruby",
);
echo "<pre>";
print_r($langs);
echo "</pre>";
//----------------------------------------------------------
// reverse the array but NOT save the index
//----------------------------------------------------------
$reserved=array_reverse($langs);
//----------------------------------------------------------
// reverse the array but SAVE  the index
//----------------------------------------------------------
$reserved=array_reverse($langs,true);
//----------------------------------------------------------
// shuffle the array  that make them randomly in every loading 
//and SAVE  the index
//----------------------------------------------------------
shuffle($langs);
echo "<pre>";
print_r($langs);
echo "</pre>";
========================================================================================================================
//----------------------------------------------------------
// refill the array 
//array_fill(index,number,value)
//----------------------------------------------------------
$array =array_fill(2,10,array("fatma","Mohamed","Amira"));
$array =array_fill(2,10,array_fill(3,8,"fatma"));
echo "<pre>";
print_r($array);
echo "</pre>";

//----------------------------------------------------------
// array sum  (array)
//get the all array sum and ignore the strings 
//----------------------------------------------------------
$langs = array(
    "Amira",
    10,
    "20",
    30,
    10.5,
);
echo "<pre>";
print_r($langs);
echo "</pre>";
$arrayFilled = array_sum($langs);
echo "<pre>";
print_r($arrayFilled);
echo "</pre>";

//----------------------------------------------------------
// array random (array,number) 
//----------------------------------------------------------
$array = array("ahmed", "osama","maher","nagwa");
echo "<pre>";
print_r($array);
echo "</pre>";
$randomArray = array_rand($array,2);
echo "<pre>";
echo $array[$randomArray[0]] ."<br>";
echo $array[$randomArray[1]] ."<br>";
// echo $array[$randomArray[2]] ."<br>";
//  echo $array[$randomArray[3]] ."<br>";
echo "</pre>";
===========================================================================================================================

//----------------------------------------------------------
// array Unique (array,type of sorting) 
//----------------------------------------------------------
$array = array("ahmed", "osama","maher","nagwa","nagwa","maher");
echo "<pre>";
print_r($array);
echo "</pre>";
$uniqueArray = array_unique($array);
echo "<pre>";
print_r($uniqueArray);
echo "</pre>";

 // ======================================================================================================================== 
  //--------------------------------------------------------
// array explode (separator,array) 
// to convert string  to array
//----------------------------------------------------------
 $string ="Noha Salma Amira Malak";
  echo "<pre>";
echo $string;
echo "</pre>";
  //$array = explode(" ",$string);
 // $array = explode(" ",$string,2);
 // $array = explode(" ",$string,-2);
  $array = explode(" ",$string,0);
  echo "<pre>";
  print_r($array);
  echo "</pre>";
//----------------------------------------------------------
// array implode OR join (separator,array) 
// to convert from array to string
//the separator is not core
//----------------------------------------------------------
$array =array("amira","salma","ahmed","mohamed","hala");
echo "<pre>";
print_r($array);
echo "</pre>";
$string = join(",",$array);
echo "<pre>";
echo "Our names are : ". $string;
echo "</pre>";

//==========================================================================================================================
  //----------------------------------------------------------
// array str_split OR join (array,length) 
// length is optional => it will get array
//------------------------------------------------------------
$string ="Hello i love PHP";
echo $string;
$array = str_split($string,3);
echo "<pre>";
print_r($array);
echo "</pre>"

  //----------------------------------------------------------
// array chunk_split OR join (array,length,End) 
// length is optional & End also => it will get string NOT array
//------------------------------------------------------------
$string ="Hello i love PHP";
echo $string;
$array = chunk_split($string,3,"-");
echo "<pre>";
echo $array;
echo "</pre>"

//============================================================================================================================
//--------------------------------------------------------------
//str_replace OR join (array,length,End) 
//str_replace(search,replace,String,count)
//--------------------------------------------------------------
$string ="I-love=PHP&beacause&PHP%is*easy_and+good=language-PHP";
echo $string ."<br>";
//$string2 =str_replace("PHP","javaScript",$string,$i);
//$string2 =str_replace(array("PHP","easy","good"),"javaScript",$string,$i);
$string2 =str_replace(array("*","-","+","=","_","%","&")," ",$string);
echo $string2 ."<br>";
//echo $i ."<br>";

//============================================================================================================================
//--------------------------------------------------------------
// str_shuffle() ,str_repeat() , strlen()
//--------------------------------------------------------------
$string ="nagwa is engineera <br>";
echo $string . "<br>";
//$string2 = str_shuffle($string);
//$string2 = str_repeat($string,10);
$string2 =strlen($string);
echo $string2 . "<br>";
*/
//============================================================================================================================
//-------------------------------------------------------------------
// addslashes(string) ,stripslashes(string),strip_tags($string,allow)
//--------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// require() => it makes fatal error and not complete with other code(The better one)
//include()=> it makes warning but it complete with other code
//-----------------------------------------------------------------------------------

  ?>
  </body>
</html>