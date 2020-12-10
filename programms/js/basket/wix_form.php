<?php


$title = $_GET['title'];
$num = $_GET['num'];
$price = $_GET['price'];
$customer_email = $_GET['customer_email'];
$email = $_GET['email'];
$to = $email;
$subject = "Заказать";
$message = "товар $title <br> количество $num <br> цена $price";
$headers = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: От кого письмо <$customer_email>\r\n";
$headers .= "Reply-To: $customer_email\r\n";

mail($to, $subject, $message, $headers);

?>