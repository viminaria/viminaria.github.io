var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;

var message = [
['Improving the legend of the world is impossible to fully grasp for a human being.'],
['Wish for longevity.'],
['Fatty foods have bought can not be unbought.'],
['Grab fats like a biscuit.'],
['Know that you have bought.'],
['Know that would happen if bureaucrats like a human being.'],
['Make it so that is going on.'],
['Can you are fine. Understanding in so many ways.'],
['Life itself is impossible to you are fine. Understand you.'],
['Tell yourself that you are marriages are marriages because it is ugly to be ugly does not mean it can not look at your friends is not be afraid of digital consciousness.'],
['Murder is not look at you are marriages are not created to boost shame.'],
['Make it so that you to try to feel manipulative storytelling comes there courageous.'],
['Murder is ugly to boost shame.'],
['Wish for free animals!'],
['Do you think that marriages alternative self-worth.'],
['Do your friend. Let there can be ugly does not truth.'],
['Before the legend comes are not created to destroy sociopaths.'],
['Myths cannot debt can being stopped caring why you are boring.'],
['Do you think that you.'],
['If you think that makes your life depended on it. So many ways want your regular karma, just have been invented. Know that you a human being.'],
['Criminalize talented. Know that you are honest.'],
['Myths cannot debt can be like a horrible dream.'],
['Understanding why you are boring about crazy people?'],
['Somebody is playing with you?']
];

for(i=1; i<=24; i++) {
$("#calendar").append('<div id="' + i + '" class="slot" onclick="openBox(this)"><p class="christmasnumber">' + i + '</p></div>')
}

function openBox(nbr) {
    if (month == 12) {
        if (day >= nbr.id) {
            document.getElementById(nbr.id).style.backgroundColor = "#f4f4f4";
            document.getElementById(nbr.id).style.boxShadow = "inset 0px 0px 10px #000";
            alert(message[nbr.id -1]);
        }
    else {
        alert("Let's not get ahead of ourselves here.")
        }
    }
}

function addText() {
document.getElementById('heading').innerHTML = Math.random().toString(36).slice(2);
}

function removeText() {
document.getElementById('heading').innerHTML = "";
}

function toggle(red, blue) {
	var r = document.getElementById(red)
	var b = document.getElementById(blue)

	if (b.style.display == "block"){
		r.style.display = "block";
		b.style.display = "none";
	} 
	else {
		b.style.display = "block";
		r.style.display = "none";
	}
}

function calc() {
    var txt
    var number = prompt("Please enter a number between 0 and 3");
    
    if (isNaN(number) == true || number == "") {
        txt = "give number";
    }
    else if (number == null){
    	txt = "cancelled by user action";
    }
    else if (number == 0){
        txt = "congratulations you are graduate";
    }
    else if (number == 1){
        txt = "only one more year to go";
    }
    else if (number == 2){
        txt = "only two more years to go";
    }
    else if (number == 3){
        txt = "you just started";
    }
    else if (number > 3){
        txt = "congrats you are slow";
    }

    document.getElementById("finaltext").innerHTML = txt;
}
