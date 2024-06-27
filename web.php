<?php
$ip = $_SERVER['REMOTE_ADDR'];

$geolocationUrl = "http://ipinfo.io/{$ip}/json";
$geoData = file_get_contents($geolocationUrl);
$geoData = json_decode($geoData);

if (isset($geoData->loc)) {
    list($latitude, $longitude) = explode(',', $geoData->loc);

    $googleMapsUrl = "https://www.google.com/maps?q={$latitude},{$longitude}";

    $info = "IP: $ip\nGoogle Maps: $googleMapsUrl\n\n";

    file_put_contents('info.txt', $info, FILE_APPEND);
}
?>
