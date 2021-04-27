class Game{
    constructor(){
    }
    getState(){
        var stateref=database.ref("gameState");
        stateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display(); 
        }
        bunny1=createSprite(displayWidth/2,height-350);
        bunny1.addImage(bunny1img);
        bunny1.scale=0.25;
        bunny2=createSprite(displayWidth/2,displayHeight);
        bunny2.addImage(bunny2img);
        bunny2.scale=0.25;
       // car3=createSprite(500,200);
       // car4=createSprite(700,200);
        bunnys=[bunny1,bunny2];

        
        bush1=createSprite(800,400);
        bush1.addImage(bushImg);
        bush1.scale=0.75;

        bush2=createSprite(200,900);
        bush2.addImage(bushImg);
        bush2.scale=0.75;

        bush3=createSprite(500,60);
        bush3.addImage(bushImg);
        bush3.scale=0.75;

        bush4=createSprite(1500,100);
        bush4.addImage(bushImg);
        bush4.scale=0.75;

        bush5=createSprite(1700,300);
        bush5.addImage(bushImg);
        bush5.scale=0.75;

        bush6=createSprite(1700,700);
        bush6.addImage(bushImg);
        bush6.scale=0.75;

        bush7=createSprite(700,700);
        bush7.addImage(bushImg);
        bush7.scale=0.75;

        bush8=createSprite(1100,750);
        bush8.addImage(bushImg);
        bush8.scale=0.75;

        bush9=createSprite(1200,500);
        bush9.addImage(bushImg);
        bush9.scale=0.75;

        for(var i=500;i<=displayWidth;i=i+200){
            carrot1=createSprite(i,random(100,1000));
            carrot1.addImage(carrotimg);
            carrot1.scale=0.15
        }
    }
    play(){
        form.hide();
        //player.getCarsAtEnd();
        textSize(30);
        text("Start Game",120,100)
        Player.getPlayerInfo();

        if(allPlayers!= undefined){
            background(backgroundImg);
            //image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=400;
            var y=200;
            drawSprites();
            for(var plr in allPlayers){
                index=index+1;
                x=500-allPlayers[plr].distance;
                y=500;
                bunnys[index-1].x=x;
                bunnys[index-1].y=y;
                if(index===player.index){
                    stroke(10);
                    fill("purple");
                    //ellipse(x,y,60,60);
                    text(allPlayers[plr].name,x-20,y+20);
                    //camera.position.x=displayWidth/2;
                    //camera.position.x=bunnys[index-1].x
                    //camera.position.y=displayHeight/2;
                }
            }
        }
        if(keyIsDown(RIGHT_ARROW)&&player.index!=null){
            player.distance=player.distance-20;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW)&&player.index!=null){
            player.distance=player.distance+20;
            player.update();
        }
        if(player.distance>5180){
            gameState=2;
            player.rank=player.rank+1;
            //Player.updateCarsAtEnd(player.rank);
        }
        
        
    }
    end(){
        var messages=createElement("H2");
        messages.html("CONGRAGULATIONS "+player.name+" your rank is: "+player.rank);
        messages.position(displayWidth/2-70,displayHeight/4);    }
}