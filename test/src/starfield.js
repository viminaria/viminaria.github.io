var starcount = 300;
var styletag = document.createElement("style");
document.head.appendChild(styletag);
var starcss = styletag.sheet;

for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 1 + Math.random()*10;
    var starcolorrand = 1 + Math.random()*10;
    var animdelay = Math.floor(Math.random()*-400);
    var animdur = 40 - starsize*3;

    if (starcolorrand > 10){
        starcolor = "rgb(210, 210, 255)";
    }
    else if (starcolorrand > 7){
        starcolor = "rgb(255, 255, 220)";
    }
    else if (starcolorrand > 5){
        starcolor = "rgb(255, 255, 180)";
    }
    else if (starcolorrand > 4){
        starcolor = "rgb(255, 180, 180)";
    }
    else {
        starcolor = "white";
    }

    var trans3d = Math.floor(Math.random()*400-starsize*25) + "vw, " + Math.floor(Math.random()*400-starsize*25) + "vh, " + Math.floor(Math.random()*100) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';box-shadow: 0px 0px 12vmin '+ starsize/3 +'vmin '+ starcolor +';animation-delay:'+ animdelay +'s;animation-duration:' + animdur + 's;}', 0);
}