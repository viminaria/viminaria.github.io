/*songens text*/
var title = [
["Bild 1"],
["bIld 2"],
["biLd 3"],
["bilD 4"],
];
/*definier variabler*/
var audio = document.getElementById("myAudio"); 
var titlecont = document.getElementById("title");

/*sätter in lådor för varje i(songens text)*/
for(i=1; i<=4; i++){
	$("#content").append("<div id='"+i+"' class='song' onclick='selectAudio(this)'><p class='box_number'>"+title[i-1]+"</p></div>");
}
/*välja vilken låt jag vill*/
function selectAudio(nbr){
audio.src = "sound/"+nbr.id+".mp3";
audio.play(); 
titlecont.innerHTML = "<p> "+title[nbr.id-1]+"/4"+" </p>";
x=nbr.id;
}


/*spelar musiken*/
function playAudio() { 
    audio.play(); 
} 
/*pausar musiken*/
function pauseAudio() { 
    audio.pause(); 
}



/*nästa och föregående låt*/
var x = 1;
function nextAudio(){

	if (x < 4) {
		x++;
	audio.src = "sound/"+x+".mp3";
	audio.play(); 
	titlecont.innerHTML = "<p> "+title[x-1]+"/4"+" </p>";
	}

	else if (x = 4) {
		x = 1;
	audio.src = "sound/"+x+".mp3";
	audio.play(); 
	titlecont.innerHTML = "<p> "+title[x-1]+"/4"+" </p>";
	}
}


function prevAudio(){

	if (x > 1) {
		x--;
	audio.src = "sound/"+x+".mp3";
	audio.play(); 
	titlecont.innerHTML = "<p> "+title[x-1]+"/4"+" </p>";
	}

	else if (x = 1) {
		x = 4;
	audio.src = "sound/"+x+".mp3";
	audio.play(); 
	titlecont.innerHTML = "<p> "+title[x-1]+"/4"+" </p>";
	}
}
/*progress bar*/
$('#myAudio').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
    var minutes = "0" + Math.floor(this.currentTime / 60);
    var seconds = "0" + Math.floor(this.currentTime - minutes * 60);
    var minutesdur = "0" + Math.floor(this.duration / 60);
    var secondsdur = "0" + Math.floor(this.duration - minutes * 60);
    document.getElementById("curtime").innerHTML = minutes + ":" + seconds + " / " + minutesdur + ":" + secondsdur;
});

  audio.volume = 0.8;

function outputUpdate(vol) {

  document.querySelector('#volume').value = vol;
  audio.volume = vol/100;

}

