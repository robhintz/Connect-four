$(() => {
  let columns = 7;
  let rows = 6;
  let board = new Array(columns);

  for (i = 0; i < board.length; i++) {
    board[i] = new Array(rows);
    const $colDiv = $("<div>").addClass("column").attr("columnIndex", i);
    $(".board").append($colDiv);

    for (j = 0; j < rows; j++) {
      board[i][j] = "empty";
      const $rowDiv = $("<div>").addClass("row");
      $colDiv.append($rowDiv);
    }
  }

  /////////////////Player move\\\\\\\\\\\\\\\\\\\\\\\\\
  $(".column").on("click", function Playermove(e) {
    // console.log(board);
    let columnIndex = $(e.currentTarget).attr("columnIndex");
    // console.log(columnIndex);
    let column = board[columnIndex];
    for (let i = column.length - 1; i >= 0; i--) {
      if (column[i] === "empty") {
        // console.log("it works");
        $(e.currentTarget).children().eq(i).css("background-color", "red");
        column[i] = "red";
        break;
      }
      //if player chooses a full column
      else if (column[0] !== "empty") {
        alert("column full, please make a valid move");
        Playermove();
      }
    }

    /////////////////check if human won\\\\\\\\\\\\
    for (let i = 0; i < board.length; i++) {
      for (j = 0; j < rows; j++) {
        //vertical win
        if (
          j < 3 &&
          board[i][j] === "red" &&
          board[i][j + 1] === "red" &&
          board[i][j + 2] === "red" &&
          board[i][j + 3] === "red"
        ) {
          console.log("you win vertical");
        }
        // horizontal win
        if (
          i < 4 &&
          board[i][j] === "red" &&
          board[i + 1][j] === "red" &&
          board[i + 2][j] === "red" &&
          board[i + 3][j] === "red"
        ) {
          console.log("you win horizontal");
        }
        // diagonal win
        if (
          i < 4 &&
          j < 3 &&
          board[i][j] === "red" &&
          board[i + 1][j + 1] === "red" &&
          board[i + 2][j + 2] === "red" &&
          board[i + 3][j + 3] === "red"
        ) {
          console.log("you win diagnol down right & up left");
        }
        if (
          i < 4 &&
          j > 3 &&
          board[i][j] === "red" &&
          board[i + 1][j - 1] === "red" &&
          board[i + 2][j - 2] === "red" &&
          board[i + 3][j - 3] === "red"
        ) {
          console.log("you win diagnol another way");
        }
      }
    }
    ////////////////make AI move\\\\\\\\\\\\\\\\\\\\\\
    let AIChoice = Math.floor(Math.random() * Math.floor(7));
    let AIcolumn = board[AIChoice];
    for (let i = AIcolumn.length - 1; i >= 0; i--) {
      if (AIcolumn[i] === "empty") {
        // console.log("it works");
        $("[columnindex='" + AIChoice + "']")
          .children()
          .eq(i)
          .css("background-color", "black");
        AIcolumn[i] = "black";
        // console.log(AIcolumn);
        break;
      } else if (AIcolumn[0] !== "empty") {
        console.log(AIcolumn[0]);
        console.log("AI makes bad choices");
        break;
      }
    }

    // console.log(AIChoice);
    //check if AI won
  });
});
