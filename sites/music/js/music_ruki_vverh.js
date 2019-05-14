//дышите равномерно
dishite = new Array(
    'https://music.yandex.ru/iframe/#track/26525262/3157855/', //dobroe utro
    'https://music.yandex.ru/iframe/#track/26525263/3157855/', //malish
    'https://music.yandex.ru/iframe/#track/26525264/3157855/', //student
    'https://music.yandex.ru/iframe/#track/26525265/3157855/', //histore love
    'https://music.yandex.ru/iframe/#track/26525266/3157855/',  //zdravstvuy
    'https://music.yandex.ru/iframe/#track/26525267/3157855/',  //dobroe utro (club mix)
    'https://music.yandex.ru/iframe/#track/26525268/3157855/',  //bandito
    'https://music.yandex.ru/iframe/#track/26525269/3157855/',  //dvigay telom (radio edit)
    'https://music.yandex.ru/iframe/#track/26525270/3157855/',  //love story (club mix)
    'https://music.yandex.ru/iframe/#track/26525271/3157855/'  //posledniy poceluy
);

music = document.getElementById('pop_music');

function ansver() {
    var ruki_vverh = document.getElementById('ruki_vverh');
    var value = ruki_vverh.value;
    if(value == 'dobroe_utro') {
        music.src = dishite[0];
    }
    else if(value == 'malish') {
        music.src = dishite[1];
    }
    else if(value == 'student') {
        music.src = dishite[2];
    }
    else if(value == 'love_story') {
        music.src = dishite[3];
    }
    else if(value == 'zdravstvuy') {
        music.src = dishite[4];
    }
    else if(value == 'dobroe_utro_mix') {
        music.src = dishite[5];
    }
    else if(value == 'bandito') {
        music.src = dishite[6];
    }
    else if(value == 'dvigay_telom') {
        music.src = dishite[7];
    }
    else if(value == 'love_story_mix') {
        music.src = dishite[8];
    }
    else if(value == 'posledniy_poceluy') {
        music.src = dishite[9];
    }
}