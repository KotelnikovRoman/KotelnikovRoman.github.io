/*script*/
$(function(){
    $(".active_menu").click(function(){
        $(".submenu").toggleClass("submenu_active");
        return false;
    });

    $('a.anchor__link').bind('click.smoothscroll', function(){
        var target = $(this).attr('href');
        bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

    $('.page__btn').on('click', function(){
        $(this).toggleClass('page__btn_active');
        $('.menu-btn__line').toggleClass('menu-btn__line_active');
        $('.page__sidebar').toggleClass('page__sidebar_active');
        return false;
    });
});