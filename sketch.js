
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  monkey=createSprite(50,350,10,10) 
monkey.addAnimation("running",monkey_running)
 monkey.scale=0.1
  
  
  ground=createSprite(200,380,800,5)
  fruitGroup=new Group();
  obstacleGroup=new Group();
   
}


function draw() {
background("white")
  survivaltime=Math.ceil(frameCount/frameRate())
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
monkey.velocityY=monkey.velocityY+0.5  
  
monkey.collide(ground)
  if(ground.x<0){
    ground.x=ground.width/2
    
  }
   ground.velocityX=-3
  fruits();
  obstacle();
 drawSprites() ;
  textSize(20)
  text("survival time:"+survivaltime,100,50)
}
function fruits(){
  
  if(frameCount%80===0){
    fruit=createSprite(400,Math.round(random(120,200)),10,10)
    fruit.addImage(bananaImage)
    fruit.velocityX=-3
    fruit.scale=0.1
    fruit.lifetime=135
    fruitGroup.add(fruit)
  }
}
function obstacle(){
  
  if(frameCount%300===0){
    obs=createSprite(400,340,10,10)
    obs.addImage(obstacleImage)
    obs.velocityX=-3
    obs.scale=0.2
    obs.lifetime=135
    obstacleGroup.add(obs)
  }
}




