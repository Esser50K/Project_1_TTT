$(document).ready(function() {

//create a Game which has 2 players
  function Game() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
  }

//
  Game.prototype.nextPlayer = function(turn) {
    this.turn = turn;
    if (this.turn === "O") {
      $(".cell").on("click", function(event) {
        this.turn = "X";
      })
    }
    else if (this.turn === "X") {
      // this.board.move("X", $("#sq1"));
      $(".cell").on("click", function(event) {
        $(this).addClass("X");
        this.turn = "O";
      })
    }
    else {
      console.log("isn't working");
    }

  };

  
  Game.prototype.init = function() {
    var turn = "X";
    game.nextPlayer(turn);
  }

  Game.prototype.checkWinner = function() {
    
    }

  
  function Player(team) {
    this.team = team;
  };

  // A starter Board constructor.
  function Board() {
    this.$cells = $(".cell")
  };

  Board.prototype.move = function(player, $cell) {
    $cell.text(player);
  }

  // Start the game!
  var game = new Game();
  game.init();
});