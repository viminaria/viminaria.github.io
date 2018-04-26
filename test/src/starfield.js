var starcount = 400;
var styletag = document.createElement("style");
document.head.appendChild(styletag);
var starcss = styletag.sheet;

for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 1 + Math.random()*2;
    var animdelay = Math.random()*-50;

    if (starsize > 2.7){
        starcolor = "skyblue";
    }
    else if (starsize > 2.4){
        starcolor = "orange";
    }
    else if (starsize > 1.8){
        starcolor = "hotred";
    }
    else if (starsize > 1.5){
        starcolor = "red";
    }
    else {
        starcolor = "white";
    }

    var trans3d = Math.floor(Math.random()*100) + "vw, " + Math.floor(Math.random()*80) + "vh, " + Math.floor(Math.random()*1000) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';box-shadow: 0px 0px 3vmin 0.2vmin '+ starcolor +';animation-delay:'+ animdelay +'s;}', 0);
}