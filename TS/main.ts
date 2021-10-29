class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

/*
let myGame= new VideoGame
myGame.title= "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true
*/

window.onload = function(){
    let addBtn = 
     <HTMLElement>document.querySelector ("input[type=button]");
    addBtn.onclick = addVideoGame;
}


function addVideoGame(){
    if (isAllDataValid()){
        let game = getVideoGame;
        displayGame (game);
    }
}
function getByID(id:string){
    return document.getElementById(id);
}
function getVideoGame():VideoGame{
        let game = new VideoGame();

        let titleInput = <HTMLInputElement>getByID("title");
            game.title = titleInput.value;

        let priceInput = <HTMLInputElement>getByID("price");
            game.price = parseFloat(priceInput.value);

        let ratingInput = <HTMLSelectElement>getByID("rating");
            game.rating = ratingInput.value;

        let digitalOnly = <HTMLInputElement>getByID("online")
        if(digitalOnly.checked){
            game.isDigitalOnly = true;
        }
        else{
            
                game.isDigitalOnly = false;
            }
        console.log(game);
        return game;

}

function displayGame(myGame:VideoGame):void{
        let displayDiv = getByID("display");

        let gameHeading = document.createElement("h2");
        gameHeading.innerText = myGame.title;

        let gameInfo = document.createElement("p")
        let notDigitalDisplay = "";
        if (myGame.isDigitalOnly){
            notDigitalDisplay = "not";
        }

        gameInfo.innerText = myGame.title +"has a rating of " +
                        myGame.rating +". It cost " + myGame.price +
                        ". It is " + notDigitalDisplay + " digital only";
        gameInfo.innerText 
        displayDiv.appendChild(gameHeading);

        displayDiv.appendChild(gameInfo);
}

function isAllDataValid(){
    return true;
}