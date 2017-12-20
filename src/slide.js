var x = 1;
var changeslide = document.getElementById('slide');
var bildtext = [
["Googly Eyes Necromancer"],
["Redout"]
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