<?php

function processingOfQerry(){
    // Получение данных с сервера телепрограммы
    $postData = file_get_contents('http://78.26.128.117:9000/cur_shows');

    $data = json_decode($postData, true);

    $arr = array();
    // Поиск названия канала переданного в функцию
    // for($i = 0; $i < sizeof($data); $i += 1){
    foreach($data as $v){

        // if($data[$i]['nameChannel'] == $nameCh){

        //     // Запись элементов в массив дяя подальшего преобразования в json
        //     $ans[0] = $data[$i]['nameChannel'];
        //     $ans[1] = $data[$i]['nameShow'];
        //     $ans[2] = $data[$i]['progress'];

        //     break;


        // }
        // $arr[$i][$data[$i]['nameChannel'] =  $data[$i]['nameShow'];
        // $arr[$i][$data[$i]['nameChannel'] =  $data[$i]['progress'];
    
        // $arr[key($v)] = current($v);
        // print_r($v);
        // echo('<br>');
        // echo(key($v));
        // echo('----');
        // echo(($v['nameShow']));
        // echo('----');
        // echo(($v['progress']));
        // echo('----');
        // echo('<br>');

        $arr[$v['nameChannel']] = array('nameShow' => $v['nameShow'], 'progress' => $v['progress']);

            
    }


    // Преобразование в json
    $ret = json_encode($arr, JSON_UNESCAPED_UNICODE);

    echo($ret);
    return $ret;
}

$data2 = processingOfQerry();

?>