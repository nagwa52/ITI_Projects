<?php
require("autoload.php");
ini_set('memory_limit', '-1');
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);

$egyption_cities = [];
$cities = file_get_contents(__CITIES_FILE);
$cities = json_decode($cities,true);
foreach ($cities as $city) {
    if (strtolower($city['country']) === 'eg') {
      $egyption_cities[] = $city;
    }
  }
if (isset($_POST["submit"])) {
    // $cityid=$_POST["country"];
    // $apiKey ='8d1bd23102a947a7743404f484b8e96d';
    // $url="http://api.openweathermap.org/data/2.5/weather?q=.$cityid.&lang=en&units=metric&APPID=8d1bd23102a947a7743404f484b8e96d";
    // $ch= curl_init();
    // curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    // curl_setopt($ch,CURLOPT_URL,$url);
    // curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1);
    // curl_setopt($ch,CURLOPT_HTTPHEADER,['Content-Type:application/json']);
    //     $result = curl_exec($ch);
    //     curl_close($ch);
    //     $data=json_decode($result,true); 
     function get_weather($cityid) {
        $apiurl="http://api.openweathermap.org/data/2.5/weather?q=".$cityid."&units=metric&APPID=b91b5d3130ddd4aaef30a2d03255e16d";
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_URL,$apiurl);
        curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1);
        $response=curl_exec($ch);
        curl_close($ch);
        $data=json_decode($response,true);
        return $data;

    }
    $AllData=get_weather($_POST["country"]);
         echo "<h1>".$AllData["name"]."</h1></br>";
        echo date("D h:i A");
        echo'</br>';
        echo date("jS F ,Y");
        echo'</br>';
        echo $AllData['weather'][0]["description"];
        echo "</br>min temp:" .$AllData['main']['temp_min']."C</br>";
        echo "max temp:".$AllData['main']['temp_max']."C</br>";
        echo "humidity:". $AllData['main']['humidity']."% </br>";
        echo "wind:". $AllData['wind']['speed']."Km/h";

         
}
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Countries</title>
    </head>
    <body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <label for="wearher">weather</label>

<select name="country" >
<?php 
                foreach($egyption_cities as $item) {
                    echo '<option name="' .$item["id"]. '">' . $item["name"] . '</option>';
                }
               echo' </br>';
            ?>
              
  <input type="submit" value="Getweather" name="submit">
</select>
    </form>
 

    </body>
</html>
