var score = 0;
var audioPlayer = document.getElementById("audio");

//Array-variable with all the questions
var questions = [
	["the devil finds you, what do you do?"],
	["your brudda betray tribe, what do you do?"],
	["what do you do if princess smells like ebola?"],
	["your princess tells you to jump off a cliff, what do you do?"],
	["woman run away from you, what you tell her?"],
	["your bruddah click at you, what do you do?"],
];

//Array-variable with all the answers
var answers = [
	["run from the devil"],
	["spit on him"],
	["run from the devil"],
	["spit on the non-believer"],
	["forgive your bruddah"],
	["go to the pub"],
	["spit on her"],
	["sniff da princess"],
	["run away from ebola like a sensible person"],
	["leave the tribe"],
	["spit on her"],
	["jump off the cliff for da princess"],
	["why are you running?"],
	["please don't leave me"],
	["where are you going?"],
	["ask him what he's doing"],
	["click back"],
	["tell him he smells like ebola"],
];

var resultMessage = [
	["you are da devil"],
	["spit on the non-believer"],
	["you can not run from da devil"],
	["you do not know da wey"],
	["you smell like bad ebola"],
	["you know da wey"]
];

function startGame(){
	document.getElementById("startMenu").style.display = "none";
	document.getElementById("quizbody").style.display = "block";
	document.getElementById("bgmusic").src = "src/quiz/bgmusic.mp3";
	audioPlayer.src = "src/quiz/spit.mp3";
	audioPlayer.play();

}

function nextQuestion(quest, ans1, ans2, ans3) {
	document.getElementById('question'). innerHTML = quest;
	document.getElementById('answer1'). innerHTML = ans1;
	document.getElementById('answer2'). innerHTML = ans2;
	document.getElementById('answer3'). innerHTML = ans3;

}

function userAnswer(answerNr){
	if(questionNr == 0 && answerNr == 2 ||
		questionNr == 1 && answerNr == 1 ||
		questionNr == 2 && answerNr == 2 ||
		questionNr == 3 && answerNr == 3 ||
		questionNr == 4 && answerNr == 1 ||
		questionNr == 5 && answerNr == 2){
		score++;
		audioPlayer.src = "src/quiz/youknow.mp3";
		audioPlayer.play();
		document.getElementById("scoreBox").innerHTML = "you have "+score+ " ebola";
		changeQuestion();
	}
	else {
		audioPlayer.src = "src/quiz/cannotrun.mp3";
		audioPlayer.play();
		document.getElementById("scoreBox").innerHTML = "you have "+score+ " ebola";
		changeQuestion();
	}

	if (questionNr == 6){
		document.getElementById("quizbody").style.display = "none";
		document.getElementById("scoreResult").style.display = "block";

		var scoreGrade;
		if(score <=1){scoreGrade = 0;}
		if(score > 1 && score <=2){scoreGrade = 1;}
		if(score > 2 && score <=3){scoreGrade = 2;}
		if(score > 3 && score <=4){scoreGrade = 3;}
		if(score > 4 && score <=5){scoreGrade = 4;}
		if(score > 5 && score <=6){scoreGrade = 5;}
		if(score > 6 && score <=7){scoreGrade = 6;}
		document.getElementById("endGame").style.display = "block";
		document.getElementById("scoreResult").innerHTML = resultMessage[scoreGrade];
		document.getElementById("reload").style.display = "block";
	}
}

//Function that changes the question and answer alternatives
var questionNr = 0;
var answerNumber = 0;

function changeQuestion(){
questionNr++;
answerNumber+=3;
nextQuestion(questions[questionNr], answers[answerNumber], answers[answerNumber+1], answers[answerNumber+2]);
}

//Executes function at document load
nextQuestion(questions[0], answers[0],answers[1],answers[2]);

//Refreshes page
function restartGame() {
	location.reload();
}

audioPlayer.src = "src/quiz/doyouknow.mp3";
audioPlayer.play();