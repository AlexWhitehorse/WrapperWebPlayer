<?php
// Вывод ошибок
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

    function qerry($nameCh){

        // Получение данных с сервера телепрограммы
        $postData = file_get_contents("http://78.26.128.117:9000/Get_cut_shows_by_id?id=".$nameCh);

        print_r($postData);

    }

// TO DO 
// - Сдклать обработку post
qerry($_POST['nameChannel']);

?>