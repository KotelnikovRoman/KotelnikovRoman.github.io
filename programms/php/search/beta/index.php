<?php

require_once('../db.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="get" action="search.php">
        <input type="search" name="search" placeholder="поиск...">
        <input type="submit">
    </form>
</body>
</html>