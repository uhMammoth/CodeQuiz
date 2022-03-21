# Code Quiz Challenge

## Functionality
This app showcases my knowledge of bootstrap DOM manipulation and localstorage functionality. User can click an answer provided and get feedback whether it was right or not. At the end keeping trackk of highscores based on correct answers. Most css styling was done with bootstrap.

## Bugs/Challenges encountered
- hiding blocks of code until ready to use triggered by user button click
- styling / manipulating answer to show user whether choice was correct or not
- preventing click event listener from firing multiple times when the user was selecting an answer
- the case where the highscore object that i used for localstorage was empty and would not act properly so a condition was implemented to fix
- printing the list of highscores to correctly print entire list instead of just editing the same line over again
- bug where timer would run out but the highscore wouldnt be added

## Requirements
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

### Picture example to base project off
![example](./assets/04-web-apis-homework-demo.gif)