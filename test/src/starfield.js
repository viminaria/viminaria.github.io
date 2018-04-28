var starcount = 800;
var styletag = document.createElement("style");
document.head.appendChild(styletag);
var starcss = styletag.sheet;

for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 0.5 + Math.random()*3;
    var animdelay = Math.floor(Math.random()*-400);
    var animdur = 100 - starsize*20;

    if (starsize > 2.4){
        starcolor = "rgb(210, 210, 255)";
    }
    else if (starsize > 2.2){
        starcolor = "rgb(255, 255, 220)";
    }
    else if (starsize > 1.8){
        starcolor = "rgb(255, 255, 180)";
    }
    else if (starsize > 1.2){
        starcolor = "rgb(255, 180, 180)";
    }
    else {
        starcolor = "white";
    }

    var trans3d = Math.floor(Math.random()*100) + "vw, " + Math.floor(Math.random()*100) + "vh, " + Math.floor(Math.random()*200) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';box-shadow: 0px 0px 10vmin 2vmin '+ starcolor +';animation-delay:'+ animdelay +'s;animation-duration:' + animdur + 's;}', 0);
}