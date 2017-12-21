var x = 0;
var changeslide = document.getElementById('slide');
var pictext = [
['<p id="picturetext">Googly Eyes Necromancer</p>'],
['<p id="picturetext">Redout 4K</p>'],
['<p id="picturetext">Placeholder 3</p>'],
['<p id="picturetext">Placeholder 4</p>'],
['<p id="picturetext">Placeholder 5</p>'],
];

$("body").keydown(function(e) {
	if(e.which == 37) { // left     
		$(".button-left").trigger("click");
	}
	else if(e.which == 39) { // right     
		$(".button-right").trigger("click");
	}
});
	
function prevImg() {
	if (x > 1) {
		x--;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + pictext[x-1] + '<p id="picturetext">' + x + '/5</p>';
	}
	else if (x = 1) {
		x = 5;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + pictext[x-1] + '<p id="picturetext">' + x + '/5</p>';
	}
}

function nextImg() {
	if (x < 5) {
		x++;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + pictext[x-1] + '<p id="picturetext">' + x + '/5</p>';
	}
	else if (x = 5) {
		x = 1;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + pictext[x-1] + '<p id="picturetext">' + x + '/5</p>';
	}
}

nextImg();