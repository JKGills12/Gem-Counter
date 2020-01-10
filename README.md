# unit-4-game
## jQuery Assignment

## Overview
I created this fun and interactive game for web browsers that uses HTML and jQuery in order to dynamically run. 

## Before You Begin


Create a new GitHub repo called unit-4-game, then clone it to your computer.


Inside the unit-4-game folder, create an index.html file.


Still inside the unit-4-game directory, make a folder called assets.

Inside the assets directory, make three additional folders: javascript, css and images.

In the javascript folder, make a file called game.js.
In the css folder, make a file called style.css.
In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
In the images folder, save any of the images you plan on using.





Set up your repository to deploy to Github Pages.


Push the above changes to GitHub.


## Watch the demo - (https://youtu.be/yNI0l2FMeCk)


The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.


Here's how the app works:


There will be four crystals displayed as buttons on the page.


The player will be shown a random number at the start of the game.


When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.



The player wins if their total score matches the random number from the beginning of the game.


The player loses if their score goes above the random number.


The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.





Option 1 Game design notes


The random number shown at the start of the game should be between 19 - 120.


Each crystal should have a random hidden value between 1 - 12.

## Gem Counter
This assignment was an interactive game, utilizing the knowledge of HTML/CSS for the layout and design and jQuery for the actions of taking user interactions of the buttons to randomly produce numbers for each click of a button. 

The purpose of the game was to have the user click on crystal buttons that randomly generated numbers after each click and the user is to match the computer guessed number in order to win.

### PSEUDO CODE
// A GAME WITH 4 CRYSTALS AND RANDOM RESULT
// EVERY CRYSTAL NEEDS TO HAVE A RANDOM # BETWEEN 1-12
// A NEW RANDOM # SHOULD BE GENERATED EVERY SINGLE TIME WHETHER WE WIN OR LOSE TO THOSE 4 CRYSTALS
// WHEN CLICKING ANY CRYSTAL, IT SHOULD BE ADDING WITH THE PREVIOUS RESULTS UNTIL IT EQUALS TO THE TOTAL SCORE
// IF IT IS GREATER THAN THE RANDOM RESULT, THEN WE INCREMENT A LOSS
// IF IT IS EQUAL, THEN WE INCREMENT A WIN COUNTER

[GitHub] https://github.com/JKGills12/unit-4-game.git

[Gem Counter] https://jkgills12.github.io/unit-4-game/

