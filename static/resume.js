/**
 * Created by huiliang on 30/07/2017.
 */
$(document).ready(function () {

    $('#showMe1').click(function () {

       if( $(this).text() == "Show Me" ){
           $("#img1 img").slideDown(2000);
           $('#showMe1').text('Hide Me');
       }
       else {
           $('#img1 img').slideUp(2000);
           $('#showMe1').text('Show Me');
       }
    });


    $('#showMe2').click(function () {

        if( $(this).text() == "Show Me" ){
            $("#img2 img").slideDown(2000);
            $('#showMe2').text('Hide Me');
        }
        else {
            $('#img2 img').slideUp(2000);
            $('#showMe2').text('Show Me');
        }
    });


    $('#showMe3').click(function () {

        if( $(this).text() == "Show Me" ){
            $("#img3 img").slideDown(2000);
            $('#showMe3').text('Hide Me');
        }
        else {
            $('#img3 img').slideUp(2000);
            $('#showMe3').text('Show Me');
        }
    });

    $('#menuContainer img').click(function () {
       $('#menuContainer ul').slideToggle(100);
    });

});