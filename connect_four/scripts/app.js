console.log("Hello World");

$(() => {
  const makeTiles = () => {
    const $divTile = $("<div>").addClass("tile");
    const $divBoard = $("<div class = board>");
    $(".board").append($divTile);
  };

  for (i = 0; i < 42; i++) {
    makeTiles();
  }

  $(".tile").on("click", function () {
    console.log("div clicked");
    redTurn();
  });

  const redTurn = () => {
    $(event.currentTarget).css(
      "background",
      "radial-gradient(red 50%, yellow 50%)"
    );
  };
});
