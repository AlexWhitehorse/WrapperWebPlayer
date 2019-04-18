$(document).ready(function(){

    var transleateDayOfWeek = {
        'понедельник': 'monday', 
        'вторник': 'tuesday',
        'среда': 'wednesday',
        'четверг': 'thursday',
        'пятница': 'friday',
        'суббота': 'saturday',
        'воскресенье': 'sunday'
    }
    // При клике по ссылке посылаеться запрос на сервер
    // с именем канала.
    // В ответ приходит json с информацией о канале
     $(document).on('click',".href-to-CH", function(){

        // alert(1);
        // Имя канала по нажатию по ссылке (в name)
        var nameCh = $(this).attr('name');

        $(".program-currentCH").animate({ scrollTop: 0}, 0);

        $.ajax({
            url: "getProgramOnWeek.php",
            type: "post",
            data: {'nameChannel': nameCh},
        datatype: 'json',
            success: function(data){

                // Парсинг json
                var json = $.parseJSON(data);

                // TO DO 
                // Выводить день недели
                // Отсортировать по дате
                // выводить текущюю передачу
                // Время начала и конца

                // очистка блока вывода
                $('.program-currentCH').text('');

                for(var dayOfWeek in json){

                    var inEnDayOfWeek = transleateDayOfWeek[dayOfWeek];

                    $('.program-currentCH').append('' +
                        '<p class="day-Of-Week">' + dayOfWeek + '</p>' +
                        '<div class="dayOfWeek-' + inEnDayOfWeek + ' d-flex flex-column"></div>'+
                            '<div class="container">'+
                                '<div class="row falg-' + dayOfWeek + '">'+
                    '');

                    // счётчик блоков для расположения их паралелино 
                    var counter = 0;

                    for(var elem in json[dayOfWeek]){

                        
                        var nameShow = json[dayOfWeek][elem]['nameShow'];
                        var timeStart = json[dayOfWeek][elem]['startTime'];
                        var timeEnd = json[dayOfWeek][elem]['endTime'];

                        // Можно взять из ссылки
                        var progress = json[dayOfWeek][elem]['progress'];

                        // Формирование строки вывода времени
                        var hours_st = timeStart.substring(8,10);
                        var minutes_st = timeStart.substring(10,12);

                        var timeOutStr = hours_st +':'+ minutes_st;


                        // TEST
                        // TODO

                        var currentProg_select = '';

                        if(progress != '111')
                            currentProg_select = 'currentProg-select'

                        if(counter%2 == 0){

                            $('.falg-' + dayOfWeek).append('' +
                                    '<div class="col-sm-6 ' + currentProg_select + '">'  +
                                        '<p> ' + timeOutStr + ' - ' + nameShow + '</p>'+
                                    '</div>'+
                                '');

                        }else{

                            $('.falg-' + dayOfWeek).append('' +
                                '<div class="col-sm-6 ' + currentProg_select + '">'  +
                                    '<p> ' + timeOutStr + ' - ' + nameShow + '</p>'+
                                '</div>'+
                            '');
                        }

                        counter ++;

                    }
                    $('.falg-' + dayOfWeek).append('' +

                        '</div>'+
                        '</div>'+
                        
                    '');
                };

                

            },
            error:function(){
                // TO DO
                alert('Error!');
            } 
        });
        
        // block-for-video
        //Прокрутка к текущей передаче
        
        var getOffsetTop = $('.currentProg-select').offset().top;
        // getOffsetTop = $('.currentProg-select').offset().top;

        $(".program-currentCH").animate({ scrollTop: getOffsetTop - 655}, 0);
            
    
    
    
    
    });


});


