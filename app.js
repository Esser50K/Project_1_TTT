//set the turn as a global variable
var turn;
$(document).ready(function() {

//create a Game which has 2 players
  function Game() {
    var playerX = new Player("X");
    var playerO = new Player("O");
  }

//
  Game.prototype.nextPlayer = function(turn) {
    if (turn === "X") {
      return turn = "O";
    }
    else if (turn === "O") {
      return turn === "X";
    }
    else {
      return "I messed up the nextPlayer method";
    }
  };

  /* `Game.prototype.init` kicks off a new game with a board and two players
  confirm that the user would like to play tic-tac-toe
  if user rejects playing tic tac toe, then I prompt them to make sure that they don't want to play
  */
  Game.prototype.init = function() {
    var question = confirm("Would you like to play tic-tac-toe?");
    if (question === true) {
      turn = "X";
    }
    else {
      var question2 = prompt("Are you sure?");
        if (question2 === "yes") {
          alert("Enjoy your day then!");
        }
    }
    
/*when I run a click function in the global scope, I have it run the checkWinner method to see if a winner has been
found.  the checkWinner needs to check for the winner and will alert if a winner is found
*/
  Game.prototype.checkWinner = function() {
    
    }

}
  
  function Player(team) {
    this.team = team;  // individual memory
  };

  Player.prototype.nextTurn = function(team) { //shared memory
    $cells = $(".cell");
    if (team === "X") {
      $cells.on("click", function() {
        $cells.addClass("X");
        return turn = "O";
      })
    }
    else if (team === "O") {
      $cells.on("click", function() {
        $cells.addClass("O");
      })
      return turn = "X";
    }
  }

  // A starter Board constructor.
  function Board() {
    $(".cell").addClass("cell");
  };


/* have each cell listen for a click which will then run a function that switches player
*/
  $(".cell").on("click", function() {
    $(this).text("X");
    player.nextTurn(turn);
  })
  
  $("#Button").on("click", clearBoard);
    function clearBoard() {
      var board = new Board();
    /*set the html in board.  here i will create a new game by saying var board = new Board() which will then
      look into the Board constructor for the layout of the board.  Board constructor should have the innerHTML
    */
    } 
  // Start the game!
  var game = new Game();
  var player = new Player();
  game.init();
  game.checkWinner();
});