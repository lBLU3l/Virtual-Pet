var canvas,backgroundImg,gameState = 0,playerCount, database,form,player,game;
var allPlayers, distance = 0;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
}

