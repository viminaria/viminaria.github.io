var questions = [
["Who is the richest man in the world?"],
["How many space pirates wear gray capes?"],
["What are frogs?"],
];

var answers = [
    ["John Lennon"],
    ["The Muffin Man"],
    ["That guy over there"],
    ["1"],
    ["7 million"],
    ["300 thousand"],
    ["gay"],
    ["amphibians"],
    ["reptiles"],
];

var x = -1;
var score = 0;

function nextQuestion(quest, ans1, ans2, ans3) {
        document.getElementById('question').innerHTML = quest;
        document.getElementById('answer1').innerHTML = ans1;
        document.getElementById('answer2').innerHTML = ans2;
        document.getElementById('answer3').innerHTML = ans3;
}

function userAnswer(ansNr) {
    if (ansNr == 2){
        score ++;
        document.getElementById('scoreboard').innerHTML = 'you have ' + score + ' fish';
    } else {
        score --;
        document.getElementById('scoreboard').innerHTML = 'you have ' + score + ' fish';        
    }
}

nextQuestion(questions[0], answers[0], answers[1], answers[2]);