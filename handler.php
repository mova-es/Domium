<?php

$username = $_POST['username'];
$phone = $_POST['phone'];

$username = htmlspecialchars($username);
$phone = htmlspecialchars($phone);

$username = urldecode($username);
$phone = urldecode($phone);

$username = trim($username);
$phone = trim($phone);

echo $username;
echo "<br>";
echo $phone;

// <!-- mail("на какой адрес отправить", "тема письма", "Сообщение (тело письма)","From: с какого email отправляется письмо \r\n"); -->

// if (mail("example@mail.ru", "Консультация с сайта", "Имя:".$username.". Телефон: ".$phone ,"From: example2@mail.ru \r\n"))
//  {
//     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }

?>

