<?php

/**если у counter нет значения присвоить 0 */
$counter = isset($_COOKIE['counter']) ? $_COOKIE['counter'] :0;
$counter++;

setcookie("counter", $counter);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        p {
            width: 200px;
            margin: 0 auto;
            padding: 5px 0;
            text-align: center;
            color: red;
            background-color: #ccc;
            border: 2px solid black;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <p>
        счётчик посещений: <?php echo $counter; ?>
    </p>
</body>
</html>