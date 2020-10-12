$(() => {
  //   const makeTiles = () => {
  //     const $divTile = $("<div>").addClass("tile");
  //     const $divBoard = $("<div class = board>");
  //     $(".board").append($divTile);
  //   };

  for (i = 0; i < 7; i++) {
    const $rowDiv = $("<div>").addClass("row");
    $(".board").append($rowDiv);
    for (j = 0; j < 6; j++) {
      const $colDiv = $("<div>").addClass("column");
      $rowDiv.append($colDiv);
    }
  }

  //   $(".tile").on("click", function () {
  //     console.log("start clicked");
  //     redTurn();
  //   });

  //   const redTurn = () => {
  //     $(event.currentTarget).css("background", "red");
  //   };
});
