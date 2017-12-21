var x = 1;
var changeslide = document.getElementById('slide');
var bildtext = [
['<p id="picturetext">Googly Eyes Necromancer</p>'],
['<p id="picturetext">Redout 4K</p>']
];

function prevImg() {
	if (x > 1) {
		x--;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + bildtext[x-1];
	}
	else if (x = 1) {
		x = 2;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + bildtext[x-1];
	}
}

function nextImg() {
	if (x < 2) {
		x++;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + bildtext[x-1];
	}
	else if (x = 2) {
		x = 1;
		changeslide.innerHTML  = '<img src="img/' + x + '.png" id="slideimg">' + bildtext[x-1];
	}
}