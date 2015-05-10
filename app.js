$(document).ready(function() {

//create a Game which has 2 players
  function Game() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = "X";
  }

//
  Game.prototype.nextPlayer = function(currentPlayer) {
    this.currentPlayer = currentPlayer;
    var count = 1;
    var access = this.board;
        $(".cell").on("click", function(event) {
          if (count === 0) {
            access.move("O", $(this));
            $(this).addClass("O");
            $("#headline").text("Your turn X");
            count ++;
        }
          else {
            access.move("X", $(this));
            $(this).addClass("X");
            $("#headline").text("Your turn O");
            count --;
        }
      })
    this.checkWinner();
}

  
  Game.prototype.init = function() {
    game.nextPlayer(this.currentPlayer);
  }

  Game.prototype.checkWinner = function() {
    var xCounter = 0;
    var oCounter = 0;
    $(".cell").on("click", function(event) {

    })

    // $(".xwins").text("Player X Wins: 1");
    // xCounter++;  
  }
  
  function Player(team) {
    this.team = team;
  };

  // A starter Board constructor.
  function Board() {
    this.$cells = $(".cell")
    this.$button = $("#Button");
    this.clearBoard();
  };

  Board.prototype.move = function(player, $cell) {
    $cell.text(player).addClass(player);
  }

  Board.prototype.clearBoard = function() {
    var cells = $(".cell");
    this.$button.on("click", function() {
      cells.removeClass().addClass("cell").text("");
    })
  }

  // Start the game!
  var game = new Game();
  game.init();
});