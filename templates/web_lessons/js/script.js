/*script*/
$(function(){
    $("a.active_menu").click(function(){
        $(".menu_input").toggle(function(){
            $(this).animate({display: 'block'}, 3000, 'easeOutElastic');
        },
        function(){
            $(this).animate({display: 'none'}, 3000, 'easeInOutElastic');
        });
        return false;
    });
});