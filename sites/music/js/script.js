music = new Array(
    "https://music.yandex.ru/iframe/#track/3599234/389916/",    //ruki vverh
)
pop = document.getElementById('pop_music');
//pop.src = music[0];

var i = 0;

pop.onclick = function() {
    i += 1;
}

function chet() {
    alert(i);
}