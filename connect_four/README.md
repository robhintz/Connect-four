# robhintz.github.io
connect four the game
This is a very simple connect four game.
It uses Html, css, Javascript, and Jquery
It uses two for loops to generate the rows and columns for the pieces to fall into. 
Inside these for loops an Array is created to store the values of each individual div and defaults them to "empty"
On click of a column two for loops are used to index inside of the array and the board. 
the loop starts at the bottom of the array and loops upward looking for the first "empty" to place the piece in
It will then check for a win condition to end the game on or pass the turn to the AI player
The AI player will then play their turn and check for a lose condition
Once a win or loss condition in satisfied a modal will pop up and prompt the player to restart
