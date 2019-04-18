<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html> -->
<?php
// Вывод ошибок
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// -------------------

// Подключение главной страницы

include_once 'main.html';

// Geting json data from web-server
// $postData = file_get_contents('http://78.26.128.117:9000/cur_shows');

// $data = json_decode($postData, true);

// for($i = 0; $i < sizeof($data); $i += 1){

//     echo("$i . ");

//     // вывод json по одномуэлементу
//     var_dump($data[$i]);
//     echo("<br>");
// }

// echo("<br><br><br>");

// Получение одного элемента
// $oneElem = $data[2];

// Получение данных из переменной
// $piceOfElem = $oneElem['nameChannel'];

// $piceOfElem = $oneElem['nameShow'];

// $piceOfElem = $oneElem['startTime'];

// $piceOfElem = $oneElem['endTime'];

// $piceOfElem = $oneElem['dayOfWeek'];

// $piceOfElem = $oneElem['progress'];


// echo("<br><br><br>");

// print_r($oneElem);

// function processingOfQerry($nameCh){
//     // Получение данных с сервера телепрограммы
//     $postData = file_get_contents('http://78.26.128.117:9000/cur_shows');

//     $data = json_decode($postData, true);

//     $ans = array(3);

//     // Поиск названия канала переданного в функцию
//     for($i = 0; $i < sizeof($data); $i += 1){

//         if($data[$i]['nameChannel'] == $nameCh){

//             // Запись элементов в массив дяя подальшего преобразования в json
//             $ans[0] = $data[$i]['nameChannel'];
//             $ans[1] = $data[$i]['nameShow'];
//             $ans[2] = $data[$i]['progress'];

//             break;


//         }
//     }
//     // Преобразование в json
//     $ret = json_encode($ans, JSON_UNESCAPED_UNICODE);

//     return $ret;
// }

// $data2 = processingOfQerry('31chod');
// echo($data2);
?>

