var player,form,game,bunny1,bunny2,bunnyimg,carrot,carrotimg,bunny2img,bunnys;
var gameState=0, playerCount=0,allPlayers,backgroundImg,bushes,bush1,bush2,bush3,bush4,bush5,bushImg;
var bunny1score=0;
var bunny2score=0;
var database;

function preload(){
    backgroundImg=loadImage("Background.png");
    bunny1img=loadImage("Bunny1.png");
    bunny2img=loadImage("Bunny2.png");
    carrotimg=loadImage("Carrot.png");
    bushImg=loadImage("Bush.png")
    
}

function setup() {
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
    

}

function draw() {
    
    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        game.play();
    }

}
