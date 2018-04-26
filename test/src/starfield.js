var starcount = 150;
var styletag = document.createElement("style");
document.head.appendChild(styletag);
var starcss = styletag.sheet;

for (i=1; i<=starcount; i++){
    $('#starfield').append('<div class="starfield-star"></div>');
    var starsize = 0.5 + Math.random()*5;
    var animdelay = Math.random()*-10;
    if (starsize > 5) {
        starcolor = "#7777ff";
    }
    else if (starsize > 4){
        starcolor = "lightblue";
    }
    else if (starsize > 2.5){
        starcolor = "orange";
    }
    else if (starsize < 1.5){
        starcolor = "red";
    }
    else {
        starcolor = "brown";
    }

    var trans3d = Math.floor(Math.random()*100) + "vw, " + Math.floor(Math.random()*80) + "vh, " + Math.floor(Math.random()*1000) + "vmin";
    starcss.insertRule('.starfield-star:nth-child('+ i +'){width: '+ starsize +'vmin; height: '+ starsize +'vmin;transform: translate3d('+ trans3d +');background-color:'+ starcolor +';animation-delay:'+ animdelay +'s;}', 0);
}