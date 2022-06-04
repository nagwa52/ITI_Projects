<?php
$apiKey='8d1bd23102a947a7743404f484b8e96d';
$cityName='Arab Republic of Egypt';
$__WEATHER_URL='http://api.openweathermap.org/data/2.5/weather?q='.$cityName.'&lang=en&units=metric&APPID='.$apiKey;
define("__CITIES_FILE", "resources/city.list.json");
$url=$__WEATHER_URL;
 $data=json_decode(file_get_contents($url),true);
 echo '<pre>';
print_r($data);
