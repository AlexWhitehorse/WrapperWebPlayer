$(document).ready(function(){

    $.ajax({
        url: "getChannels.php",
        type: "post",
        data: '31chod',
    datatype: 'json',
        success: function(data){

            // парсинг json ответа сервера 
            var json = $.parseJSON(data);

            // console.log(json);

            // console.log(json['3tvod']);

            // console.log(json['3tvod']['nameShow']);

            // console.log(json['3tvod']['progress']);

            // var count = 0;

            // json.forEach(function(_json, i) {

            //     count ++;
            //     console.log(count);
            // });
            var linkTochanel = '#'; //TODO
            var numberCh = 0; // TODO
            var nameImg = '1091.gif'; //TODO
            
            
            

            for(var elem in json){
                // TO DO
                // Добавить ноиера каналов в конфиг

                var nameChannel = elem;
                var currentProgram = json[elem]['nameShow'];
                var progressChannel = json[elem]['progress'];

                numberCh++; // TODO

                // TODO
                // - Изменить названия каналов в соответствии с массивом
                // console.log(nameChannel);

                // формирование блоков с телепрограммой
                $('#list-channels').append('' +
                '<a href=" ' + linkTochanel + ' "class="href-to-CH" name="' + nameChannel + '">' +
                    '<li class="media oneCh"> ' +
                        '<div class="align-self-center mr-4 numbreCH">' + numberCh + '</div>' +
                            '<img src="img/' + nameImg + ' " class="border border-dark rounded mr-3 align-self-center imgCH" alt="">'+
                            '<div class="media-body textNearLogo overflow-hidden">'+
                            '<h5 class="mt-0 mb-1 nameCH">' + nameChannel + ' </h5>'+
                            ' ' + currentProgram + ' '+
                        '</div>'+
                    '</li>' +
                '</a>' +
                '<div class="progressCH" style="width:' + progressChannel + '%;"></div>' +
                /*'<hr class="separatorCH">'*/
                '');

                


                

            }
            // $('.href-to-CH').click(function(){

            //     alerts(123);

            // });
            // $(document).on('click',".href-to-CH", function(){

            //     alert(1);
            // });

        },
        error:function(){
            // TO DO
            alert('Error!');
        }   
    }); 

    

});