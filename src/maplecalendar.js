var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var prizelist = ["10x Power Elixir", "5x Nodestone", "20x Nodestone", "10x Arcane River Droplet", "1x Rudolph Pet (Permanent)", "1x Frenzy Totem"];

function weightedRand(spec) {
    var i, j, table=[];
    for (i in spec) {
        for (j=0; j<spec[i]*1000; j++) {
            table.push(i);
        }
    }
    return function() {
        return table[Math.floor(Math.random() * table.length)];
    }
}
var prizeroll = weightedRand({0:0.4, 1:0.35, 2:0.2, 3:0.065, 4:0.049, 5:0.001});

for(i=1; i<=24; i++) {
$("#maple-calendar-body").append('<div id="' + i + '" class="maple-slot" onclick="openBox(this)"><p class="maple-box-number">' + i + '</p></div>')
}

if (month == 12){
    for(i=1; i<=day; i++) {
        $('#'+ i ).css({"border": "dotted 2px white"});
    }
}

function openBox(nbr) {
    if (month !== 12) {
        alert("Please wait until December");
    }
    else if (month == 12) {
        if (day >= nbr.id) {
            var box = document.getElementById(nbr.id);
            box.style.backgroundColor = "#f6f6f6";
            box.style.boxShadow = "inset 0px 0px 1vw rgba(0,0,0,0.5)";
            box.style.border = "0px";
            $('#' + nbr.id + ' p').css({"display": "none"});
            box.removeAttribute("onclick");
            var prize = prizeroll();
            box.append(prizelist[prize]);
            $('#' + nbr.id).css({'background-image':'url(../img/maplecalendar/'+prize+'.png)'});
        }
        else {
            alert("Please be patient.");
        }
    }
}

