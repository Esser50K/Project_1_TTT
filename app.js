$(document).ready(function() {

//create a Game which has 2 players, a new board, and sets the current player === "X"
  function Game() {
    this.playerX = new Player("X");
    this.playerO = new Player("O");
    this.board = new Board();
    this.currentPlayer = "X";
  }

//this will be where all of the moves take place
  Game.prototype.nextPlayer = function(currentPlayer) {
    this.currentPlayer = currentPlayer;
    var self = this;
    var count = 1;
    var access = this.board;
        $(".cell").on("click", function(event) {
          if (count === 0) {
            access.move("O", $(this));
            $(this).addClass("O");
            $("#headline").text("Your turn X");
            count ++;
            self.checkWinner();
        }
          else {
            access.move("X", $(this));
            $(this).addClass("X");
            $("#headline").text("Your turn O");
            count --;
            self.checkWinner();
        }
      })
}

//this will set my game off --> initiates the nextPlayer method  
  Game.prototype.init = function() {
    game.nextPlayer(this.currentPlayer);
  }

//check for winner
  Game.prototype.checkWinner = function() {
    var xCounter = 0;
    var oCounter = 0;
    if ($(".cell").hasClass("cell X")) {
      if ($("#sq1").hasClass("cell X") && $("#sq2").hasClass("cell X") && $("#sq3").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq4").hasClass("cell X") && $("#sq5").hasClass("cell X") && $("#sq6").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq7").hasClass("cell X") && $("#sq8").hasClass("cell X") && $("#sq9").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq1").hasClass("cell X") && $("#sq4").hasClass("cell X") && $("#sq7").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq2").hasClass("cell X") && $("#sq5").hasClass("cell X") && $("#sq8").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq3").hasClass("cell X") && $("#sq6").hasClass("cell X") && $("#sq9").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }
      if ($("#sq1").hasClass("cell X") && $("#sq5").hasClass("cell X") && $("#sq9").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }         
      if ($("#sq3").hasClass("cell X") && $("#sq5").hasClass("cell X") && $("#sq7").hasClass("cell X")) {
        $(".xwins").text("Player X Wins: " + xCounter);
        alert("X wins!!!");
        xCounter++;
      }         
    }
    else if ($(".cell").hasClass("cell O")) {
      if ($("#sq1").hasClass("cell O") && $("#sq2").hasClass("cell O") && $("#sq3").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq4").hasClass("cell O") && $("#sq5").hasClass("cell O") && $("#sq6").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq7").hasClass("cell O") && $("#sq8").hasClass("cell O") && $("#sq9").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq1").hasClass("cell O") && $("#sq4").hasClass("cell O") && $("#sq7").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq2").hasClass("cell O") && $("#sq5").hasClass("cell O") && $("#sq8").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq3").hasClass("cell O") && $("#sq6").hasClass("cell O") && $("#sq9").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }
      if ($("#sq1").hasClass("cell O") && $("#sq5").hasClass("cell O") && $("#sq9").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }         
      if ($("#sq3").hasClass("cell O") && $("#sq5").hasClass("cell O") && $("#sq7").hasClass("cell O")) {
        $(".owins").text("Player O Wins: " + yCounter);
        alert("O wins!!!");
        yCounter++;
      }       
    }
}

    
    // xCounter++;  

  
  //determines team of players
  function Player(team) {
    this.team = team;
  };

  // A starter Board constructor.
  function Board() {
    this.$cells = $(".cell")
    this.$button = $("#Button");
    this.clearBoard();
  };

//add a move method to determine the first move
  Board.prototype.move = function(player, $cell) {
    $cell.text(player).addClass(player);
  }


//Clear Board -- remove the class on all cells when button is clicked, then add desired class
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