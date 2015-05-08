$(function() {

//create a Game which has 2 players + a new board + it checks for a winner by calling isWinner function
  function Game() {
    var playerX = new Player("X");
    var playerO = new Player("O");
    var board = new Board();
    isWinner();
  }

  Game.prototype.nextPlayer = function() {
    $(".cell").on("click", switchTurn);
    function switchTurn() {
      if (turn === "X") {
        $(".cell").removeClass();
        $(".cell").addClass("X");
        $("#headline").text("Your turn O");
        return turn === "O"
      }
      else if {
        $(".cell").removeClass();
        $(".cell").addClass("O");
        $("#headline").text("Your turn X");
        return turn === "X";
      }
    }
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    $("Button").on("click", clearBoard);
    function clearBoard() {
      var $cell = $(".cell");
      for (var i = 0; i < 9; i++) {
        $cell.removeClass("X");
        $cell.removeClass("O");
        $cell.addClass(".cell");
    }
    }
}
  
  function Player(team) {
    this.team = team;
  };

  // A starter Board constructor.
  function Board() {
    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
  };

  function isWinner() {

  }

  // Start the game!
  var game = new Game();
  game.init();
});