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

    //check if human won

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
        break;
      }
    }

    // console.log(AIChoice);
    //check if AI won
  });
});
