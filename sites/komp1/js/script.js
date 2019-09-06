$('.nav__btn').on('click', function(event){
    $(this).toggleClass('nav__btn-active');
    $('.nav__list').toggle('slow');
    return false;
});