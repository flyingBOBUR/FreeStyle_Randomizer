//okno startowe
$(function() {
    $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();
 
        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });

    $('.window_content').addClass('opened');
    $('#window_overlay').addClass('opened');
});


var bgOption1 = document.getElementById("bgOption1");
var bgOption2 = document.getElementById("bgOption2");
var bgOption3 = document.getElementById("bgOption3");
bgOption1.addEventListener('click', setBackGround1);
bgOption2.addEventListener('click', setBackGround2);
bgOption3.addEventListener('click', setBackGround3);

function setBackGround1(){
    $('body').css('background-image', 'url(https://images4.alphacoders.com/184/thumb-1920-184888.jpg)');
    $('.topic').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.startBtn').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.stopBtn').css('background', 'rgba(82, 82, 82, 0.7)');
}

function setBackGround2(){
    $('body').css('background-image', 'url(https://wallpaperaccess.com/full/1519790.jpg)');
    $('.topic').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.startBtn').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.stopBtn').css('background', 'rgba(82, 82, 82, 0.7)');
}

function setBackGround3(){
    $('body').css('background-image', 'url(https://wallpaper.dog/large/17172602.jpg)');
    $('.topic').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.startBtn').css('background', 'rgba(82, 82, 82, 0.7)');
    $('.stopBtn').css('background', 'rgba(82, 82, 82, 0.7)');
}








//lista tematów
quotes = new Array(101);

quotes[0] = "Niedoceniony raper";
quotes[1] = "Wolny styl";
quotes[2] = "Brudne buty";
quotes[3] = "Pudełko zapałek";
quotes[4] = "Początek Końca";
quotes[5] = "Brudnopis";
quotes[6] = "Mocne wrażenia";
quotes[7] = "Smażone Pieczarki";
quotes[8] = "Przyjaciel diabła";
quotes[9] = "2x2";
quotes[10] = "Krwawy kort";
quotes[11] = "Brudne myśli";
quotes[12] = "Szybki skok";
quotes[13] = "Za darmo";
quotes[14] = "Jajko z niespodzianką";
quotes[15] = "Woskowy świat";
quotes[16] = "Jedno przykazanie";
quotes[17] = "Szacun świstaka";
quotes[18] = "Pielęgniarka";
quotes[19] = "4 pory roku";
quotes[20] = "Damski bokser";
quotes[21] = "Od początku do końca";
quotes[22] = "Świat bez kobiet";
quotes[23] = "Polowanie na papugi";
quotes[24] = "Dziki Zachod";
quotes[25] = "Seria nieprzespanych nocy";
quotes[26] = "Na palcach jednej ręki";
quotes[27] = "Tego nie wiem";
quotes[28] = "Pozostaje tylko czekać";
quotes[29] = "Szelest cichych myśli ";
quotes[30] = "Skręć w prawo !";
quotes[31] = "Tak jest dobrze";
quotes[32] = "Ostatni oddech";
quotes[33] = "Miss mokrego podkoszulka";
quotes[34] = "I nie wkurwiaj mnie dobrze?";
quotes[35] = "Codzienności szklany witraż";
quotes[36] = "Te same dni";
quotes[37] = "Studnia fauszu";
quotes[38] = "Szósty zmysł";
quotes[39] = "Kosztem błędów";
quotes[40] = "Wolnosć";
quotes[41] = "Trzy metry nad niebem. ";
quotes[42] = "Pora pokazac pazury";
quotes[43] = "Zero Siedemset";
quotes[44] = "Mazakiem po szybie";
quotes[45] = "Zawsze chcialem";
quotes[46] = "Zgubione klucze";
quotes[47] = "Pierdole świat bez jutra";
quotes[48] = "7 życzeń świata";
quotes[49] = "Razem przed siebie";
quotes[50] = "Rewia mody";
quotes[51] = "Centrum świata";
quotes[52] = "Ale ja to przecież wiem";
quotes[53] = "Próba generalna";
quotes[54] = "Patrząc cały czas przed siebie";
quotes[55] = "Kilometr do mety";
quotes[56] = "Wystartowałem";
quotes[57] = "Jak rozpetałem wojne hiphopową";
quotes[58] = "Ty wiesz lepiej..";
quotes[59] = "Reanimacja dnia wczorajszego";
quotes[60] = "Czas mnie nie lubi";
quotes[61] = "Ciekawość";
quotes[62] = "Jedna szansa";
quotes[63] = "Nie, żartuje";
quotes[64] = "weny brak";
quotes[65] = "nie przestawać";
quotes[66] = "Gramy w kości";
quotes[67] = "Martwe zwierciadło";
quotes[68] = "Pęknięte lustro";
quotes[69] = "Ideały";
quotes[70] = "Za mało, za dużo";
quotes[71] = "Prohibicja";
quotes[72] = "Fabryka Myśli";
quotes[73] = "Trzy metry od brzegu";
quotes[74] = "Archiwum mysli";
quotes[75] = "Ostatni dzwonek";
quotes[76] = "Potok zmartwień";
quotes[77] = "Dawca stresu";
quotes[78] = "Wygraną mam w garści";
quotes[79] = "O własnych siłach";
quotes[80] = "Niżej się już nie da";
quotes[81] = "Kilka głębszych wdechów";
quotes[82] = "Dwa piętra wyżej";
quotes[83] = "Oddam wszystko co mam";
quotes[84] = "Jeżeli nie ja to na pewno ktoś inny";
quotes[85] = "Pełny energii";
quotes[86] = "Bez ambicji";
quotes[87] = "Ciągle ten sam";
quotes[88] = "Bez wyboru";
quotes[89] = "Nie można kochać";
quotes[90] = "Niezdrowe marzenia";
quotes[91] = "Suma porażek";
quotes[92] = "Bezlitosny";
quotes[93] = "Latający dywan";
quotes[94] = "Niedoczekanie";
quotes[95] = "Daleka droga";
quotes[96] = "Trochę spóźniony";
quotes[97] = "Solidarny sam ze sobą";
quotes[98] = "Słuchając cichy";
quotes[99] = "Szukać wczorajszego dnia";
quotes[100] = "Skrzydlate słowa";
quotes[101] = "Koniec żartów";
quotes[101] = "Kości zostały rzucone";



//zmienna blokująca start przed wykonaniem przygotowań
var canStart1 = false;



//ustawianie czasu zmiany tematu

//przyciski i nasłuchiwacze
var time20 = document.getElementById("time20");
var time30 = document.getElementById("time30");
var time40 = document.getElementById("time40");
var time50 = document.getElementById("time50");
var time60 = document.getElementById("time60");

time20.addEventListener('click', setTimeAs20);
time30.addEventListener('click', setTimeAs30);
time40.addEventListener('click', setTimeAs40);
time50.addEventListener('click', setTimeAs50);
time60.addEventListener('click', setTimeAs60);

//funkcje
var setedTime = 0;
var inTime = 0;
var inTime = 0;

function setTimeAs20(){
    setedTime = 20000;
    inTime = 20;
    inTime2 = 20;
    canStart1 = true;
    document.getElementById("timerValue").innerHTML = inTime;
    index = Math.floor(Math.random() * quotes.length);
    TOPIC = quotes[index]
    document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    $('#time20').css('opacity', '0%')
    $('#time30').css('opacity', '100%')
    $('#time40').css('opacity', '100%')
    $('#time50').css('opacity', '100%')
    $('#time60').css('opacity', '100%')
}

function setTimeAs30(){
    setedTime = 30000;
    inTime = 30;
    inTime2 = 30;
    canStart1 = true;
    document.getElementById("timerValue").innerHTML = inTime;
    index = Math.floor(Math.random() * quotes.length);
    TOPIC = quotes[index]
    document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    $('#time30').css('opacity', '0%')
    $('#time20').css('opacity', '100%')
    $('#time40').css('opacity', '100%')
    $('#time50').css('opacity', '100%')
    $('#time60').css('opacity', '100%')
}

function setTimeAs40(){
    setedTime = 40000;
    inTime = 40;
    inTime2 = 40;
    canStart1 = true;
    document.getElementById("timerValue").innerHTML = inTime;
    index = Math.floor(Math.random() * quotes.length);
    TOPIC = quotes[index]
    document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    $('#time40').css('opacity', '0%')
    $('#time20').css('opacity', '100%')
    $('#time30').css('opacity', '100%')
    $('#time50').css('opacity', '100%')
    $('#time60').css('opacity', '100%')
}

function setTimeAs50(){
    setedTime = 50000;
    inTime = 50;
    inTime2 = 50;
    canStart1 = true;
    document.getElementById("timerValue").innerHTML = inTime;
    index = Math.floor(Math.random() * quotes.length);
    TOPIC = quotes[index]
    document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    $('#time50').css('opacity', '0%')
    $('#time20').css('opacity', '100%')
    $('#time30').css('opacity', '100%')
    $('#time40').css('opacity', '100%')
    $('#time60').css('opacity', '100%')
}

function setTimeAs60(){
    setedTime = 60000;
    inTime = 60;
    inTime2 = 60;
    canStart1 = true;
    document.getElementById("timerValue").innerHTML = inTime;
    index = Math.floor(Math.random() * quotes.length);
    TOPIC = quotes[index]
    document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    $('#time60').css('opacity', '0%')
    $('#time20').css('opacity', '100%')
    $('#time30').css('opacity', '100%')
    $('#time40').css('opacity', '100%')
    $('#time50').css('opacity', '100%')
}



//odliczanie do zmiany tematu
var TOPIC = "";
function setTimer(){

    if(inTime>0)
    {
        document.getElementById("timerValue").innerHTML = inTime;
        inTime--;
    }
    else
    {
        inTime = inTime2;
        document.getElementById("timerValue").innerHTML = inTime;
        index = Math.floor(Math.random() * quotes.length);
        TOPIC = quotes[index]
        document.getElementById('Topic').innerHTML = ('<b>'+TOPIC+'</b>');
    }

    setTimeout(setTimer, 1000);
}


//startowanie

//przycisk startu i nasłuchiwacz
var startButton = document.getElementById("startBtn");
startButton.addEventListener('click', startAll)



//uruchamianie tematu
function startAll(){
    setTimer();
}

var stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener('click', resetAll)

function resetAll(){
    window.setInterval(location.reload(true), x);
}
