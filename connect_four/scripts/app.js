$(() => {
  let board = new Array(7);

  for (i = 0; i < board.length; i++) {
    board[i] = new Array(6);
    const $colDiv = $("<div>").addClass("column").attr("columnIndex", i);
    $(".board").append($colDiv);

    for (j = 0; j < 6; j++) {
      board[i][j] = "empty";
      const $rowDiv = $("<div>").addClass("row");
      $colDiv.append($rowDiv);
    }
  }

  $(".column").on("click", function (e) {
    // console.log(board);
    let columnIndex = $(e.currentTarget).attr("columnIndex");
    // console.log(columnIndex);
    let column = board[columnIndex];
    for (i = column.length - 1; i >= 0; i--) {
      if (column[i] === "empty") {
        console.log("it works");
        $(e.currentTarget).children().eq(i).css("background-color", "red");
        break;
      }
    }
  });
});
