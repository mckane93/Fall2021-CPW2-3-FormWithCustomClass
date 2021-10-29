class VideoGame{
    title: string;
    price: number;
    rating: string;
    isDigitalOnly: boolean;
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
    console.log("Add video game was called")

    if(isAllDataValid()){
        let game = getVideoGame;
        displayGame(game);
    }
}

function getVideoGame():VideoGame{

}

function displayGame(myGame:videoGame):void{

}

function isAllDataValid(){
    return true;
}