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



beginQuiz.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", isCorrect);
initialsSubmit.addEventListener("click", highscoreHandler);
resetQuizBtn.addEventListener("click", resetQuiz);
highscoreReset.addEventListener("click", resetHighscore);
