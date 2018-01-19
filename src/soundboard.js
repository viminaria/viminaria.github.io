for(i=1; i<=25; i++) {
    $("#keyboard-body").append('<div id="' + i + '" class="keyboard-key" onclick="playAudio(this.id)">' + i + '</div>')
}

var audPlayer = document.getElementById("audioElement")

function playAudio(nbr) {
    audPlayer.src = "src/sound/sound"+ nbr + ".mp3";
    audPlayer.play();
}

document.onkeydown = function(e) {
//    alert(e.keyCode);
    switch(e.keyCode) {
    
        case 49:
        playAudio(1);
        break;    

        case 50:
        playAudio(2);
        break;    

        case 51:
        playAudio(3);
        break;    

        case 52:
        playAudio(4);
        break;    

        case 53:
        playAudio(5);
        break;
            
        case 54:
        playAudio(6);
        break;
            
        case 55:
        playAudio(7);
        break;
            
        case 56:
        playAudio(8);
        break;
            
        case 57:
        playAudio(9);
        break;
            
        case 81:
        playAudio(10);
        break;
            
        case 87:
        playAudio(11);
        break;
            
        case 69:
        playAudio(12);
        break;
            
        case 82:
        playAudio(13);
        break;          

        case 84:
        playAudio(14);
        break;
            
        case 81:
        playAudio(15);
        break;
            
        case 81:
        playAudio(16);
        break;
            
        case 81:
        playAudio(17);
        break;            
        case 81:
        playAudio(18);
        break;
            
        case 81:
        playAudio(19);
        break;
            
        case 81:
        playAudio(20);
        break;
            
        case 81:
        playAudio(21);
        break;

        case 81:
        playAudio(22);
        break;
            
        case 81:
        playAudio(23);
        break;
            
        case 81:
        playAudio(24);
        break;
            
        case 81:
        playAudio(25);
        break;












    }
}
