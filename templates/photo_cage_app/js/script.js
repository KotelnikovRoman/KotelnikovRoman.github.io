//анимация кнопки
$('.button__link').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('button__link-active');
    $('.nav').slideToggle('slow');
});