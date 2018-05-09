var audio = document.getElementById('starfield-audio');
audio.src = "src/starfield.ogg"
$('audio').prop("volume", 0.1);
audio.play();

var starcount = 200;
var particlecount = 50;
var styletag = document.createElement("style");
var particlestyletag = document.createElement("style");
document.head.appendChild(styletag);
document.head.appendChild(particlestyletag);
var starcss = styletag.sheet;
var particlecss = particlestyletag.sheet;


for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 2 + Math.random()*10;
    var starcolorrand = 1 + Math.random()*10;
    var animdelay = Math.floor(Math.random()*-400);
    var animdur = 40 - starsize*3;

    if (starcolorrand > 10){ starcolor = "rgb(210, 210, 255)"; }
    else if (starcolorrand > 7){ starcolor = "rgb(255, 255, 220)"; }
    else if (starcolorrand > 5){ starcolor = "rgb(255, 255, 180)"; }
    else if (starcolorrand > 4){ starcolor = "rgb(255, 180, 180)"; }
    else { starcolor = "white"; }

    var trans3d = Math.floor(Math.random()*400-starcolorrand*25) + "vw, " + Math.floor(Math.random()*400-starcolorrand*25) + "vh, " + Math.floor(Math.random()*100) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';box-shadow: 0px 0px 12vmin '+ starsize/3 +'vmin '+ starcolor +';animation-delay:'+ animdelay +'s;animation-duration:' + animdur + 's;}', 0);
}

for (i=1; i<=particlecount; i++){
    $('#starfield-flyer').append('<div class="starfield-flyer-particle"></div>');
    var particlesize = 0.5 + Math.random();
    var animdelay = -Math.random();

    var trans3d = Math.random()*14 + "vmin, " + "0, " + " 0";
    particlecss.insertRule('.starfield-flyer-particle:nth-child('+ i +'){width: '+ particlesize +'vmin; height: '+ particlesize +'vmin;transform: translate3d('+ trans3d +');animation-delay:'+ animdelay +'s;background-color: yellow;}', 0);
}

$('.flyaway-button').transition({scale: 1, opacity: 1, delay: 5000}, 500);

function flyAway(){
    $('#starfield-flyer-wrapper').transition({y:'-18vh', x:'0vw', scale: 0.01, rotate: '0deg', rotateX: '80deg'}, 2000, 'ease-in')
    .transition({opacity: 0}, 100)
    .transition({y:'50vh', x:'0vw', scale: 2, rotate: '0deg', rotateX: '0deg'}, 100)
    $('.flyaway-button').transition({opacity: 0}, 1000)
    .transition({scale: 0}, 100);
    $('.flyback-link').transition({scale: 1, opacity: 1, delay: 4000}, 500);
}

function flyBack(){
    $('#starfield-flyer-wrapper').transition({opacity: 1}, 100)
    .transition({y:'0vh', x:'0vw', scale: 1, rotate: '0deg', rotateX: '0deg'}, 2500, 'ease-in-out');
    $('.flyaway-button').transition({scale: 1, opacity: 1, delay: 5000}, 500);
    $('.flyback-link').transition({opacity: 0}, 1000)
    .transition({scale: 0}, 100);
}

$(document).ready(function flyAround() {
    $('#starfield-flyer').transition({y:'-2vh', x:'+15vw', rotate: '-30deg', rotateX: '50deg'}, 2000, 'ease-out');
    $('#starfield-flyer').transition({y:'0vh', x:'0vw', rotate: '0deg', rotateX: '50deg'}, 2000, 'ease-in');
    $('#starfield-flyer').transition({y:'-2vh', x:'-15vw', rotate: '30deg', rotateX: '50deg'}, 2000, 'ease-out');
    $('#starfield-flyer').transition({y:'0vh', x:'0vw', rotate: '0deg', rotateX: '50deg', complete: function(){flyAround();}}, 2000, 'ease-in');
});