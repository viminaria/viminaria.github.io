var title = [
["Miyazaki Ayumi - Brave Heart (tri. version)"],
["supercar - storywriter"],
["Snail's House - fizzy resort"],
["Snail's House - Cappucino"],
["猫叉Master+ - tori no kimochi"],
["猫叉Master+ - Far east nightbird"],
];

var songtotal = 6;

for(i=1; i<=songtotal; i++) {
	$("#audioplayer-playlist").append("<div id='"+i+"' class='playlist-item' onclick='selectAudio(this.id)'><p class='audiotext' id='audiotext" + i + "'>" + title[i-1] + "</p></div>");
}

var audio = document.getElementById("audioelement"); 
var titlecont = document.getElementById("audiotext-container");
var playpause = document.getElementById("playbutton");
var selectimg = document.getElementById("audioimage");

function queueAudio() {
	audio.src = "src/music/1.mp3";
	titlecont.innerHTML = "<p>" + title[0] + " </p>";
	selectimg.src = "img/audioplayer/1.jpg";
	$('#' + 1).addClass("selectedaudio");
}

function selectAudio(nbr) {
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
	if (audio.paused) {
		audio.play();
		playpause.innerHTML = "pause";
	} else {
		audio.pause();
		playpause.innerHTML = "play_arrow";
	}
} 

repeat = 0;
shuffle = 0;

function repeatAudio() {
	if (repeat == 1) {
		document.getElementById('repeat').style.color = "rgb(50,50,50)";
		repeat = 0;
	} else if (repeat == 0) {
		document.getElementById('repeat').style.color = "#fff";
		repeat = 1;
		document.getElementById('shuffle').style.color = "rgb(50,50,50)";
		shuffle = 0;
	}
}

function shuffleAudio() {
	if (shuffle == 1) {
		document.getElementById('shuffle').style.color = "rgb(50,50,50)";
		shuffle = 0;
	} else if (shuffle == 0) {
		document.getElementById('shuffle').style.color = "#fff";
		shuffle = 1;
		document.getElementById('repeat').style.color = "rgb(50,50,50)";
		repeat = 0;
	}
}

function mainAudio() {
	audio.src = "src/music/" + x + ".mp3";
	audio.play();
	$('.selectedaudio').removeClass("selectedaudio");
	$('#' + x).addClass("selectedaudio");
	playpause.innerHTML = "pause";
	titlecont.innerHTML = "<p> " + title[x-1] + " </p>";
	selectimg.src = "img/audioplayer/" + x + ".jpg";
}

var x = 1;
function nextAudio() {
	if (shuffle == 1) {
		x = Math.ceil(Math.random() * songtotal);
		mainAudio();
	}
	else if (x < songtotal) {
		x++;
		mainAudio();
	}
	else if (x = songtotal) {
		x = 1;
		mainAudio();
	}
}

function prevAudio() {
	if (shuffle == 1) {
		x = Math.ceil(Math.random() * songtotal);
		mainAudio();
	}
	else if (x > 1) {
		x--;
		mainAudio();
	}

	else if (x = 1) {
		x = songtotal;
		mainAudio();
	}
}

function playnextAudio() {
	if (repeat == 1) {
		mainAudio();
	}
	else if (shuffle == 1) {
		x = Math.ceil(Math.random() * songtotal);
		mainAudio();
	}
	else {
		nextAudio();
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

audio.volume = 0.3;
vol = 30;
function outputUpdate(vol) {
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

function muteAudio() {
	if (audio.muted == true) {
		audio.muted = false;
		document.getElementById('mute').innerHTML = "volume_up";
	} else {
		audio.muted = true;
		document.getElementById('mute').innerHTML = "volume_off";
	}
}

document.onkeydown = function(e) {
	switch(e.keyCode) {
		case 32:
		playAudio();
		break;
		
		case 39:
		nextAudio();
		break;
		
		case 37:
		prevAudio();
		break;

		case 38:
		$("#slider").val(parseInt($("#slider").val())+1);  
		$("#slider").trigger('change');
		break;
		
		case 40:
		$("#slider").val(parseInt($("#slider").val())-1);  
		$("#slider").trigger('change');
		break;
		
		case 77:
		muteAudio();
		break;

		case 82:
		repeatAudio();
		break;

		case 83:
		shuffleAudio();
		break;
	}
} 

queueAudio();