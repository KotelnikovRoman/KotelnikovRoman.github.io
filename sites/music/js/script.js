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


//document.getElementById('play_but').onclick = pro();