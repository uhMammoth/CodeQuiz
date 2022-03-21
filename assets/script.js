var questionsArray = [
    {
      question: "what is 1+1?",
      choices: ["1","2","3","4"],
      answer: "2"
    },
    {
      question: "what is 1x1?",
      choices: ["1","2","3","4"],
      answer: "1"
    },
    {
      question: "what is 1+2?",
      choices: ["1","2","3","4"],
      answer: "3"
    },
    {
      question: "what is 1x4?",
      choices: ["1","2","3","4"],
      answer: "4"
    },
    {
      question: "how many hours are in a day",
      choices: ["365","24","60","at least 1"],
      answer: "24"
    }
  ];
var score = 0;
var highscores = [];
var questionNum = 0;
var timer = questionsArray.length * 10;
var questionsFinished = false;

var beginQuiz = document.getElementById("begin-quiz");
var mainMenu = document.getElementById("main-menu");
var quizMenu = document.getElementById("quiz-menu");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var choiceList = choicesEl.getElementsByTagName("li");
var timerEl = document.getElementById("quiz-timer");
var timeLeft = document.getElementById("time-left");

var highscoreMenu = document.getElementById("highscore-menu");
var userHighscore = document.getElementById("highscore-user");
var allHighscores = document.getElementById("highscore-all");
var initialsSubmit = document.getElementById("initialsSubmit");
var initialsForm = document.getElementById("initialsForm");
var resetQuizBtn = document.getElementById("resetQuiz");
var highscoreList = document.getElementById("highscore-list");
var highscoreReset = document.getElementById("resetHighscore");

var startQuiz = function() {
mainMenu.style.display = 'none';
quizMenu.style.display = 'block';
setTimer();
setQuestion();
}

var setTimer = function(){
timerEl.style.display = "flex";
timeLeft.textContent = timer;

var myInterval = setInterval(function(){
    if(timer === 0 || questionsFinished) {
    clearInterval(myInterval);
    } else {
    timer--;
    timeLeft.textContent = timer;
    }
}, 1000);
}

var setQuestion = function(){
questionEl.textContent = questionsArray[questionNum].question;  
for (let i = 0; i < 4; i++) {
    choiceList[i].textContent = questionsArray[questionNum].choices[i];
}
choicesEl.addEventListener("click", isCorrect);
}

var isCorrect = function(event){

var choice = event.target;
if (choice.textContent === questionsArray[questionNum].answer){
    choice.classList.add("list-group-item-success");
    choice.textContent += " Correct!";
    score += 5;
} else {
    choice.classList.add("list-group-item-danger");
    choice.textContent += " Incorrect!";
    score -= 1;
    if(score <= 0){score = 0;}
}
choicesEl.removeEventListener("click", isCorrect);
setTimeout(nextQuestion, 500, choice);
}

var nextQuestion = function(choice){

choice.classList.remove("list-group-item-danger");
choice.classList.remove("list-group-item-success");
questionNum++;
if(questionNum < questionsArray.length){
    setQuestion();  
} else if (questionNum = questionsArray.length){
    questionsFinished = true;
    setupHighscore();
}

}

var setupHighscore = function(){
quizMenu.style.display = "none";
timerEl.style.display = "none";
highscoreMenu.style.display = "block";

}

var highscoreHandler = function (){
//get user input
var userInitials = {
    initial: initialsForm.value,
    score: score
};
initialsForm.value = null;
//get local storage and add user score
addHighscore(userInitials);
//display highscores
}

var addHighscore = function(userI){
//pulls local storage and adds/sorts user score to it
highscores = JSON.parse(localStorage.getItem('highscores'));
var tempArray = [];
var userEntered = false;
if (highscores == null){
    //if no highscores previously add user as first to temp array which will be set equal to highscore array later
    highscores = [];
    tempArray.push(userI);
}
else {
    //sort through scores highest to least putting user in appropriate position
    for (let i = 0; i < highscores.length; i++) {
    var splitStart = highscores.slice(0, i-1);
    var splitEnd = highscores.slice(i, highscores.length);
    if (userEntered){break;}
    else if(userI.score >= highscores[i].score){
        tempArray.push(userI);
        tempArray.push.apply(tempArray, splitEnd);
        userEntered = true;
    }
    else if(userI.score < highscores[i].score){
        tempArray.push(highscores[i]);
    }
    }
}
highscores = tempArray;
localStorage.setItem('highscores', JSON.stringify(highscores));
showHighscores();
}

var showHighscores = function(){
if (highscores.length == 0 ){
    highscoreList.innerHTML = '<li>No highscores yet!</li>';
} else {
    for (let i = 0; i < highscores.length; i++) {
    var createLi = document.createElement("li");
    createLi.innerHTML = highscores[i].initial + " - " + highscores[i].score;
    highscoreList.appendChild(createLi);
    }
}
userHighscore.style.display = 'none';
allHighscores.style.display = 'block'; 
}

var resetHighscore = function(){
highscores = [];
localStorage.clear();
showHighscores();
}

var resetQuiz = function(){
mainMenu.style.display = 'block';
quizMenu.style.display = 'none';
highscoreMenu.style.display = 'none';
userHighscore.style.display = 'block';
allHighscores.style.display = 'none';
highscoreList.innerHTML = '';

score = 0;
highscores = null;
questionNum = 0;
timer = questionsArray.length * 10;
questionsFinished = false;
}

beginQuiz.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", isCorrect);
initialsSubmit.addEventListener("click", highscoreHandler);
resetQuizBtn.addEventListener("click", resetQuiz);
highscoreReset.addEventListener("click", resetHighscore);
