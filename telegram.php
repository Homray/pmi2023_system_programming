<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["text"];

    $arr = array(
        'Имя: ' => $name,
        'Email' => $email,
        'Сообщение:' => $message
    );
      
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };


    $token = "6056221918:AAES9VJNPYgSDCmzO-P2c5rbPgA0RWXLVVA";
    $chat_id = "-670030396";

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>