<?php

require_once("../db.php");

$query = "SELECT * FROM `imgs`";
$result = mysqli_query($link, $query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        img {
            width: 200px;
        }
    </style>
    <title>
        Поиск: <?php echo $_GET['search']; ?>
    </title>
</head>
<body>
    <h2>Поиск по запросу:</h2>
    <h3><?php echo $_GET['search']; ?></h3>
    <?php
        while($row = mysqli_fetch_assoc($result)) {
            $id = $row['category'];
            $url = $row['url'];
            if($_GET['search'] == $id) {
                echo "<p><img src='../", $url, "'></p>";
            }
        }
    ?>
</body>
</html>