console.log("Hello World");

$(() => {
  const makeTiles = () => {
    const $divTile = $("<div>").addClass("tile");
    const $divBoard = $("<div class = board>");
    $(".board").append($divTile);
  };

  for (i = 0; i < 42; i++) {
    console.log(i);
    makeTiles();
  }
});
