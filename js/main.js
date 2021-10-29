var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame;
        displayGame(game);
    }
}
function getByID(id) {
    return document.getElementById(id);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getByID("title");
    game.title = titleInput.value;
    var priceInput = getByID("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getByID("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getByID("online");
    if (digitalOnly.checked) {
        game.isDigitalOnly = true;
    }
    else {
        game.isDigitalOnly = false;
    }
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = getByID("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + "has a rating of " +
        myGame.rating + ". It cost " + myGame.price +
        ". It is " + notDigitalDisplay + " digital only";
    gameInfo.innerText;
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    return true;
}
