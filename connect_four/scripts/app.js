$(() => {
  /////////////////Making the board and it's sister array\\\\\\\\\\\\\\\\\\\
  let columns = 7;
  let rows = 6;
  let board = new Array(columns);

  const makeBoard = () => {
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
      // console.log("click");
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
          return;
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
            toggleModal();
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
            toggleModal();
          }
          // diagonal wins
          if (
            i < 4 &&
            j < 3 &&
            board[i][j] === "red" &&
            board[i + 1][j + 1] === "red" &&
            board[i + 2][j + 2] === "red" &&
            board[i + 3][j + 3] === "red"
          ) {
            console.log("you win diagnol down right & up left");
            toggleModal();
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
            toggleModal();
          }
        }
      }

      //Check for draw
      let checkDraw = [];
      for (let k = 0; k < board.length; k++) {
        for (let l = 0; l < rows; l++) {
          if (board[k][l] !== "empty") {
            checkDraw.push(board[k][l]);
          }
          if (checkDraw.length === 41) {
            alert("alert this game is a scratch");
          }
        }
      }

      ////////////////make AI move\\\\\\\\\\\\\\\\\\\\\\
      const AIMove = () => {
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
            // console.log(AIcolumn[0]);
            console.log("AI makes bad choices");
            AIMove();
            break;
          }
        }
        /////////////////check if AI won\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        for (let m = 0; m < board.length; m++) {
          for (n = 0; n < rows; n++) {
            //vertical win
            if (
              n < 3 &&
              board[m][n] === "black" &&
              board[m][n + 1] === "black" &&
              board[m][n + 2] === "black" &&
              board[m][n + 3] === "black"
            ) {
              console.log("AI win vertical");
              defeatModal();
            }
            // horizontal win
            if (
              m < 4 &&
              board[m][n] === "black" &&
              board[m + 1][n] === "black" &&
              board[m + 2][n] === "black" &&
              board[m + 3][n] === "black"
            ) {
              console.log("AI win horizontal");
              defeatModal();
            }
            // diagonal wins
            if (
              m < 4 &&
              n < 3 &&
              board[m][n] === "black" &&
              board[m + 1][n + 1] === "black" &&
              board[m + 2][n + 2] === "black" &&
              board[m + 3][n + 3] === "black"
            ) {
              console.log("AI win diagnol down right & up left");
              defeatModal();
            }
            if (
              m < 4 &&
              n > 3 &&
              board[m][n] === "black" &&
              board[m + 1][n - 1] === "black" &&
              board[m + 2][n - 2] === "black" &&
              board[m + 3][n - 3] === "black"
            ) {
              defeatModal();
              console.log("AI win diagnol another way");
            }
          }
        }
      };
      // console.log(AIChoice);
      AIMove();
    });
  };
  makeBoard();

  $(".reset").on("click", function () {
    console.log("reset");
    $(".column").remove();
    if (!$(".modal").hasClass("hidden")) {
      toggleModal();
    }
    if (!$(".defeat").hasClass("hidden")) {
      defeatModal();
    }
    makeBoard();
  });

  const toggleModal = () => {
    $(".modal").toggleClass("hidden");
  };
  const defeatModal = () => {
    $(".defeat").toggleClass("hidden");
  };
});
