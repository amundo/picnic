<?php 

  $ch = curl_init();

  $url = "http://farm3.static.flickr.com/2350/3537445024_679aba6af6_b.jpg";

  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   
  $data = curl_exec($ch);
  
  header('Content-type: image/jpeg'); //set the image header

  curl_close($ch);

  $fh = fopen('spider.jpg', 'w');
  fwrite($fh, $data); 
  fclose($fh);

?>
