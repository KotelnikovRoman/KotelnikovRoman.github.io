/*script*/
$(function(){
    $(".active_menu").click(function(){
        $(".menu_input").toggleClass("show_menu");
        return false;
    });

    $('a.anchor__link').bind('click.smoothscroll', function(){
        var target = $(this).attr('href');
        bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

    $('.menu_btn').on('click', function(){
        $(this).toggleClass('menu_btn_active');
        $('.fixed_sidebar').toggleClass('fixed_sidebar_active');
        return false;
    });
});