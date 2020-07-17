<?php

/**если у counter нет значения присвоить 0 */
$counter = isset($_COOKIE['counter']) ? $_COOKIE['counter'] :0;
$counter++;

setcookie("counter", $counter);

echo $counter;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>