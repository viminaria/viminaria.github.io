var title = [
["Miyazaki Ayumi - Brave Heart (tri. version)"],
["supercar - storywriter"],
["Snail's House - fizzy resort"],
["Snail's House - Cappucino"],
["猫叉Master+ - tori no kimochi"],
["猫叉Master+ - Far east nightbird"],
];

for(i=1; i<=6; i++){
	$("#audioplayer-playlist").append("<div id='"+i+"' class='playlist-item' onclick='selectAudio(this.id)'><p class='audiotext' id='audiotext" + i + "'>" + title[i-1] + "</p></div>");
}

var audio = document.getElementById("audioelement"); 
var titlecont = document.getElementById("audiotext-container");
var playpause = document.getElementById("playbutton");
var selectimg = document.getElementById("audioimage");

function queueAudio(){
	audio.src = "src/music/1.mp3";
	titlecont.innerHTML = "<p>" + title[0] + " </p>";
	selectimg.src = "img/audioplayer/1.jpg";
	$('#' + 1).addClass("selectedaudio");
}

function selectAudio(nbr){
	$('.selectedaudio').removeClass("selectedaudio");
	$('#' + nbr).addClass("selectedaudio");
	audio.src = "src/music/" + nbr + ".mp3";
	audio.play();
	playpause.innerHTML = "pause";
	titlecont.innerHTML = "<p> " + title[nbr-1] + " </p>";
	selectimg.src = "img/audioplayer/" + nbr + ".jpg";
	x = nbr;
}

function playAudio() { 
	if (playpause.innerHTML == "play_arrow"){
		audio.play();
		playpause.innerHTML = "pause";
	} else {
		audio.pause();
		playpause.innerHTML = "play_arrow";
	}
} 

var x = 1;
function nextAudio(){
	if (x < 6) {
		x++;
		audio.src = "src/music/" + x + ".mp3";
		audio.play();
		$('.selectedaudio').removeClass("selectedaudio");
		$('#' + x).addClass("selectedaudio");
		playpause.innerHTML = "pause";
		titlecont.innerHTML = "<p> " + title[x-1] + " </p>";
		selectimg.src = "img/audioplayer/" + x + ".jpg";
	}
	else if (x = 6) {
		x = 1;
		audio.src = "src/music/" + x +".mp3";
		audio.play();
		$('.selectedaudio').removeClass("selectedaudio");
		$('#' + x).addClass("selectedaudio");
		playpause.innerHTML = "pause";
		titlecont.innerHTML = "<p> " + title[x-1] + " </p>";
		selectimg.src = "img/audioplayer/" + x + ".jpg";
	}
}

function prevAudio(){

	if (x > 1) {
		x--;
		audio.src = "src/music/"+ x +".mp3";
		audio.play();
		$('.selectedaudio').removeClass("selectedaudio");
		$('#' + x).addClass("selectedaudio");
		playpause.innerHTML = "pause";
		titlecont.innerHTML = "<p> " + title[x-1] + " </p>";
		selectimg.src = "img/audioplayer/" + x + ".jpg";
	}

	else if (x = 1) {
		x = 6;
		audio.src = "src/music/"+ x +".mp3";
		audio.play();
		$('.selectedaudio').removeClass("selectedaudio");
		$('#' + x).addClass("selectedaudio");
		playpause.innerHTML = "pause";
		titlecont.innerHTML = "<p> " + title[x-1] + " </p>";
		selectimg.src = "img/audioplayer/" + x + ".jpg";
	}
}

$('#audioelement').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
    var minutes = "0" + Math.floor(this.currentTime / 60);
    var seconds = "0" + Math.floor(this.currentTime - minutes * 60);
	var minutesdur = "0" + Math.floor(this.duration / 60);
	var secondsdur = "0" + Math.floor(this.duration - minutesdur * 60);
	var cur = minutes.substr(-2) + ":" + seconds.substr(-2);
	var dur = minutesdur.substr(-2) + ":" + secondsdur.substr(-2);
    document.getElementById("time").innerHTML = cur + "/" + dur;
});

audio.volume = 0.5;
function outputUpdate(vol){
	document.getElementById("volume").value = vol;
	audio.volume = vol / 100;
}

var progressBar = document.querySelector(".progress");
progressBar.addEventListener("click", seek);

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
    progressBar.value = percent / 100;
}

function muteAudio(){
	if (audio.muted == true){
		audio.muted = false;
		document.getElementById('mute').innerHTML = "volume_up";
	} else {
		audio.muted = true;
		document.getElementById('mute').innerHTML = "volume_off";
	}
}

queueAudio();