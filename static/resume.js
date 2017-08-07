/**
 * Created by huiliang on 30/07/2017.
 */
$(document).ready(function () {

    $('#showMe1').click(function () {

       if( $(this).text() == "Show Me" ){
           $("#img1 img,#img1 div").slideDown(2000);
           $('#showMe1').text('Hide Me');
       }
       else {
           $('#img1 img,#img1 div').slideUp(2000);
           $('#showMe1').text('Show Me');
       }
    });


    $('#showMe2').click(function () {

        if( $(this).text() == "Show Me" ){
            $("#img2 img,#img2 div").slideDown(2000);
            $('#showMe2').text('Hide Me');
        }
        else {
            $('#img2 img,#img2 div').slideUp(2000);
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

    $(window).scroll(function () {
        if ($(window).scrollTop()>=50){
            $('#btn_top').fadeIn();
        }
        else {
            $('#btn_top').fadeOut();
        }
    });

    //回到顶部
    $('#btn_top').click(function () {
        $('html,body').animate({scrollTop:0},500);
    });


    //回到自我介绍
    $("#menuItem-1990").mouseenter(function () {
        // $('#menuItem-1990').css()
        var h1 = $('#person').offset().top - 50;
        $('html,body').animate({scrollTop:h1},500);

    });

    //回到工作项目
    $('#menuItem-1991').mouseenter(function () {
        var h2 = $('#workProject').offset().top - 50;
        $('html,body').animate({scrollTop:h2},500);
    });

    //回到工作和教育
    $('#menuItem-1992').mouseenter(function () {
        var h3 = $('#education').offset().top - 50;
        $('html,body').animate({scrollTop:h3},500);
    });

    //回到技能与兴趣
    $('#menuItem-1993').mouseenter(function () {
        var h4 = $('#skillAndHobby').offset().top - 50;
        $('html,body').animate({scrollTop:h4},500);
    });

    //回到自我推荐
    $('#menuItem-1994').mouseenter(function () {
        var h5 = $('#recommendation').offset().top -50;
        $('html,body').animate({scrollTop:h5},500);
    });









});