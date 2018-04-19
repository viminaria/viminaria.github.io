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

if (month == 12){
    for(i=1; i<=day; i++) {
        $('#'+ i ).css("border", "solid", "2px", "black");
    }
}

function openBox(nbr) {
    if (month !== 12) {
        alert("Please wait until December")
    }
    else if (month == 12) {
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

