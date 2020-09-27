<?php
// search
// version 1.0
require_once('db.php');

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <p>Что вы хотите найти? (транспорт, люди, музыканты, животные)</p>
    <form method="get" action="search.php" class="form">
        <input type="search" name="search" placeholder="поиск..." class="form__input">
        <input type="submit" class="form__button">
    </form>
</body>
</html>