<?php
   
   $name = $_POST['user-name'];
   $phone = $_POST['user-phone'];
   $street = $_POST['street'];
   $build = $_POST['building'];
   $block = $_POST['block'];
   $flat = $_POST['apartment'];
   $floor = $_POST['floor'];
   $pay = $_POST['payment'];

   $message = $_POST['comment'];

   $disturb = $_POST['dont-disturb']; // 1 или null
   $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

   $mail_message = '
   <html>
   <head>
        <title>Mr.Burger</title>
   </head>
   <body>
       <h2>Заказ</h2>
       <div class="form__left">
           <div>Имя:' . $name . '</div>
           <div>Телефон: ' . $phone . '</div>
           <div>Улица: ' . $street . '</div>
           <div>Дом: ' . $build . '</div>
           <div>Корпус: ' . $block . '</div>
           <div>Квартира: ' . $flat . '</div>
           <div>Этаж: ' . $floor . '</div>
        <div class="form__right">   
           <div>Комментарий: ' . $message . '</div>
           <div>Способ оплаты: ' . $pay . '</div>
           <div>Нужно ли перезванивать клиенту: ' . $disturb . '</div>
       </div>
   </body>
   </html>';

   $headers = "From: Администратор сайта <graysram68@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('ivan.bersenev86@yandex.ru', 'Заказ', $mail_message, $headers);


    $data =[];
    if ($mail) {
        echo "Письмо успешно отправлено";
    }else{
        echo "На сервере произошла ошибка";
    }
   //echo $mail_message;

?>