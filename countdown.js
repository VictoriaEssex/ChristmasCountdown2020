var countdown = document.getElementById('countdown') 

var myDate = '2020-12-25'
var t = Date.parse(myDate) - Date.parse(new Date());
var seconds = Math.floor( (t/1000) % 60 );
var minutes = Math.floor( (t/1000/60) % 60 );
var hours = Math.floor( (t/(1000*60*60)) % 24 );
var days = Math.floor( t/(1000*60*60*24) );
var hours = Math.floor( (t/(1000*60*60)) % 24 );
var min = Math.floor( (t/1000/60) % 60 );
var sec = Math.floor( (t/1000) % 60 );

countdown.innerHTML = `${days}d , ${hours}hr , ${min}min , ${sec}sec `


window.setInterval(() => {
    if (sec == 0) {
        min = min - 1
        sec = 60
    }
    if (min == 0) {
        hours = hours - 1
        min = 60
    }
    if (hours == 0) {
        days = days - 1
        hours = 24
    }
    if(days == 0) {
        days = 0
        hours = 0
        min = 0
        sex = 0
    }

        sec = sec -1 
    countdown.innerHTML = `${days}d , ${hours}hr , ${min}min , ${sec}sec`
}, 1000);