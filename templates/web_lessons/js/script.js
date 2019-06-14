/*script*/
$(function(){
    $("a.active_menu").click(function(){
        $(".menu_input").slideToggle(function(){
            $(this).animate({display:'block'}, 'easeInOutElastic');
        },
        function(){
            $(this).animate({display:'none'}, 'easeInOutElastic');
        });
        return false;
    });
});