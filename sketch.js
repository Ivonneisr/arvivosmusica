//       INSTRUCTIONS
//(1) Pres space to start.
//(2) Use W,S,A,D for Player one.
//(3) Use Arrow keys for Player two.

// global variables
var backgroundImage, background1, spaceshipImage,spaceShip,spaceShip2, aImage,mImage,sImage;
var wall, limit;
var p1Image, p2Image;
var p1,p2;
var aGroup, mGroup, sGroup;
var aGroup2, mGroup2, sGroup2;
var score1 = 0;
var score2 = 0;
var lives1 = 3;
var lives2 = 3;
var PLAY = 1;
var END = 0;
var END2 = 3;
var gameState = 2;
var inicio, inicioimg;
var sonidoini,soniexp,point,spacesound;


function preload(){
backgroundImage = loadImage("Space.jpg");
spaceshipImage = loadImage("spaceship.png");
aImage = loadImage("aestoroid.png");
mImage = loadImage("meteor.png");
sImage = loadImage("star.png");    
p1Image = loadImage("p1.png");
p2Image = loadImage("p2.png"); 
inicioimg=loadImage("inicio.png");
sonidoini=loadSound("inicioritmico.mp3");
 soniexp=loadSound("explosion.wav"); 
  point=loadSound("point.wav");
  spacesound=loadSound("spacesound.wav");
}

function setup() {
  createCanvas(800, 800);
 
  background1 = createSprite (400,300,10,10);
  background1.addImage(backgroundImage);
  inicio=createSprite (400,400);
  inicio.addImage(inicioimg);
  inicio.scale=0.4;
  sonidoini.play();
  

  spaceShip = createSprite(200,750,10,10);
  spaceShip.addImage(spaceshipImage);
  spaceShip.scale = 0.2;
  spaceShip.setCollider("rectangle",0,0,500,300);
  
  spaceShip2 = createSprite(600,750,10,10);
  spaceShip2.addImage(spaceshipImage);
  spaceShip2.scale = 0.2;
  spaceShip2.setCollider("rectangle",0,0,500,300);  
  
  wall = createSprite(400,0,5,1600);
  wall.shapeColor = "white";
  wall.visible = false;
  
  limit = createSprite(0,200,1600,5);
  limit.visible = false;
  
  p1 = createSprite(400,400,10,10);
  p1.visible = false;
  p1.addImage(p1Image);
  
  p2 = createSprite(400,400,10,10);
  p2.visible = false;
  p2.addImage(p2Image);
  
  
  
  
  aGroup = new Group();
  mGroup = new Group();
  sGroup = new Group();
  aGroup2 = new Group();
  mGroup2 = new Group();
  sGroup2 = new Group();
  poder1Group= new Group();
  poder2Group= new Group();
}

function draw() {


  
  if(gameState ===2&&keyDown("space")){
    gameState = PLAY;
    wall.visible = true;
    inicio.visible = false;
    sonidoini.stop();
    spacesound.loop();
  }
   
  if(gameState === PLAY){
      background(220);
    background1.velocityY = -4;
    //REESTABLECER FONDO
    if(background1.y<-160){
       background1.y = 160;
       }
    //COLISION DE LAS NAVES CON LOS LIMITES
    spaceShip.collide(limit);
    spaceShip.collide(wall);
    spaceShip2.collide(limit);
    spaceShip2.collide(wall);  
    
    if(keyDown("w")){
      createpoderj1() ;
       
       }
    if(keyDown("a")){
       spaceShip.x = spaceShip.x-5;
       
       }
    if(keyDown("s")){
       spaceShip.y = spaceShip.y+5;
       
       }
    if(keyDown("d")){
       spaceShip.x = spaceShip.x+5;
       
       }
    
    
    if(keyDown("up_arrow")){
      createpoderj2() 
       
       }
    if(keyDown("left_arrow")){
       spaceShip2.x = spaceShip2.x-5;
       
       }
    if(keyDown("down_arrow")){
       spaceShip2.y = spaceShip2.y+5;
       
       }
    if(keyDown("right_arrow")){
       spaceShip2.x = spaceShip2.x+5;
       
       } 
    
    
    if(aGroup.isTouching(spaceShip)){
       score1 = score1 - 50;
       aGroup.destroyEach();
       lives1 = lives1-1;
      soniexp.play();
       }
    if(sGroup.isTouching(spaceShip)){
       score1 = score1 + 100;
       sGroup.destroyEach();
      point.play();
       }
    if(mGroup.isTouching(spaceShip)){
       score1 = score1 - 50;
       mGroup.destroyEach();
       lives1 = lives1-1; 
      soniexp.play();
       }  
    if(aGroup2.isTouching(spaceShip2)){
       score2 = score2 - 50;
       aGroup2.destroyEach();
       lives2 = lives2-1;
      soniexp.play();
       }
    if(sGroup2.isTouching(spaceShip2)){
       score2 = score2 + 100;
       sGroup2.destroyEach();  
       point.play();
       }
    if(mGroup2.isTouching(spaceShip2)){
       score2 = score2 - 50;
       mGroup2.destroyEach();
       lives2 = lives2-1;
      soniexp.play();
       }      
    
    if(lives1 === 0){
       gameState = END;
       }
    if(lives2 === 0){
       gameState = END2;
       }
    
    if(gameState === END){
      background1.velocityY = 0;
       mGroup.destroyEach();
       mGroup.setVelocityYEach(0);
      
       mGroup2.destroyEach();
       mGroup.setVelocityYEach(0);
      
       aGroup2.destroyEach();
       aGroup2.setVelocityYEach(0);
      
       aGroup.destroyEach();
       mGroup.setVelocityYEach(0);
      
       sGroup2.destroyEach();
       sGroup2.setVelocityYEach(0);
      
       sGroup.destroyEach();
       sGroup.setVelocityYEach(0);
       p2.visible = true;
       }
        if(gameState === END2){
       mGroup.destroyEach();
       mGroup.setVelocityYEach(0);
      
       mGroup2.destroyEach();
       mGroup.setVelocityYEach(0);
      
       aGroup2.destroyEach();
       aGroup2.setVelocityYEach(0);
      
       aGroup.destroyEach();
       mGroup.setVelocityYEach(0);
      
       sGroup.destroyEach();
       sGroup2.setVelocityYEach(0);
      
       sGroup.destroyEach();
       sGroup.setVelocityYEach(0);
       p1.visible = true;
       }
    if(spaceShip.y>=780){
       spaceShip.y = 780;
       }
    if(spaceShip2.y>=780){
       spaceShip2.y = 780;
       }
    if(spaceShip.x<=50){
       spaceShip.x = 50;
       }
    if(spaceShip2.x>=750){
       spaceShip2.x = 750;
       }    
    
    
    obstacles();
    obstacles2();
  }     
  
    console.log(lives1, lives2);
  drawSprites();
  textSize(20);
  fill("blue");
    text("score: "+score1,40,40);
    text("score: "+score2,700,40);
  fill("purple");  
    text("lives: "+lives1,40,60);
    text("lives: "+lives2,700,60);
  
}





//HACER AMBAS FUNCIONES AL MISMO TIEMPO

function obstacles(){
if(frameCount%200 == 0){
  var select_object = Math.round(random(1,4))
  if (select_object === 1){
    aestoroid();
  }
  if (select_object === 2){
    meteor();
  }  
  if (select_object === 3){
    star();
  }
  if (select_object === 4){
    star();
  }

 }
}


function obstacles2(){
if(frameCount%200 == 0){
  var select_object2 = Math.round(random(1,4))
  if (select_object2 === 1){
    aestoroid2();
  }
  if (select_object2 === 2){
    meteor2();
  }  
  if (select_object2 === 3){
    star2();
  }
  if (select_object2 === 4){
    star2();
  }
  
 }
}

function aestoroid(){
  var aestoroid = createSprite(random(50,350),0,10,10);
  aestoroid.addImage(aImage);
  aestoroid.velocityY = 5;
  aestoroid.scale = 0.8;
  aGroup.add(aestoroid);
  aestoroid.setCollider("rectangle",-10,0,70,170);
}
function meteor(){
  
  var meteor = createSprite(random(50,350),0,10,10);
  meteor.addImage(mImage);
  meteor.velocityY = 5;
  meteor.scale = 0.5;  
  mGroup.add(meteor);

  meteor.setCollider("rectangle",0,0,100,200);
}
function star(){
  
    var star = createSprite(random(50,350,900,10,10));
  star.addImage(sImage);
  star.velocityY = 5;
  star.scale = 0.3;
  sGroup.add(star);
  star.setCollider("circle",0,0);
}


function aestoroid2(){
    var aestoroid2 = createSprite(random(450,750),0,10,10);
  aestoroid2.addImage(aImage);
  aestoroid2.velocityY = 5;
  aestoroid2.scale = 0.8;
  aGroup2.add(aestoroid2);
  aestoroid2.setCollider("rectangle",-10,0,70,170);
}
function meteor2(){
  
  var meteor2 = createSprite(random(450,750),0,10,10);
  meteor2.addImage(mImage);
  meteor2.velocityY = 5;
  meteor2.scale = 0.5;  
  mGroup2.add(meteor2);
  meteor2.setCollider("rectangle",0,0,100,200);
}
function star2(){
  
    var star2 = createSprite(random(450,750,900,10,10));
  star2.addImage(sImage);
  star2.velocityY = 5;
  star2.scale = 0.3;
  sGroup2.add(star2);
  star2.setCollider("circle",0,0);
    
}
function createpoderj1() {
  var poder1= createSprite(200, 700, 10, 20);
 poder1.shapeColor="red";
  poder1.x=spaceShip.x;
  poder1.velocityY = -9;
  poder1.lifetime = 500;
  poder1.scale = 0.5;
  poder1Group.add(poder1);

}
function createpoderj2() {
  var poder2= createSprite(200, 700, 10, 20);
  poder2.shapeColor="red";
  poder2.x=spaceShip2.x;
  poder2.velocityY = -9;
  poder2.lifetime = 500;
  poder2.scale = 0.5;
  poder2Group.add(poder2);

}
