var starcount = 400;
var styletag = document.createElement("style");
document.head.appendChild(styletag);
var starcss = styletag.sheet;

for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 1 + Math.random()*2;
    var animdelay = Math.random()*-20;

    if (starsize > 2.6){
        starcolor = "rgb(240, 240, 255)";
    }
    else if (starsize > 2.3){
        starcolor = "rgb(255, 255, 200)";
    }
    else if (starsize > 2){
        starcolor = "rgb(255, 230, 200)";
    }
    else if (starsize > 1.5){
        starcolor = "rgb(255, 230, 230)";
    }
    else {
        starcolor = "white";
    }

    var trans3d = Math.floor(Math.random()*100) + "vw, " + Math.floor(Math.random()*80) + "vh, " + Math.floor(Math.random()*1000) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';box-shadow: 0px 0px 10vmin 2vmin '+ starcolor +';animation-delay:'+ animdelay +'s;}', 0);
}