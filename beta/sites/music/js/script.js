music = document.getElementById('music');
music_albom = document.getElementById('music_albom');
slide = document.getElementById('slide');

//function для создания объекта
function music_artist(name, alboms) {
    this.name = name;
    this.alboms = alboms;
}

//for smeni alboma
var last_index;
artist_alboms = document.getElementById('artist_alboms');

//чёрный фон
b = 'black/';
kaseta = document.getElementById('kaseta');
uroven = document.getElementById('uroven');

function play_effect() {
    kaseta.src = 'img/kaseta.gif';
    uroven.src = 'img/uroven.gif';
}

function stop_effect() {
    kaseta.src = 'img/kaseta.jpg';
    uroven.src = 'img/uroven.jpg';
}

$(function(){
    $('.button_menu').on('click', function(e){
        e.preventDefault;
        $(this).toggleClass('button_menu_active');
        $('.menu').toggleClass('active');
    });
});


//document.getElementById('play_but').onclick = pro();