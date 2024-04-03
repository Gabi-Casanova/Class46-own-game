
var backgroundImg, bg;

var mrMole;
var ledges, ledge1, ledge2, ledge3, ledge4;


function preload(){
   
  backgroundImg = loadImage("assets/bgImg.jpg");
  ledge1 = loadImage("assets/dirtLedge1.png");
  ledge2 = loadImage("assets/dirtLedge2.png");
  ledge3 = loadImage("assets/dirtLedge3.png");
  ledge4 = loadImage("assets/dirtLedge4.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mrMole = createSprite(windowWidth/2-500, windowHeight/2, 50, 50);
  bg = createSprite(625, 350, 1500, 1500);
  bg.addImage(backgroundImg);
  bg.velocityY = 1
   
}

function draw() {
  
  background("brown");
  
  if(bg.y > 450){
    bg.y = 350;
  }
  
   
  dirtLedges(); 
  
  drawSprites();
}

function dirtLedges(){
  if(frameCount%100 === 0){
    ledges = createSprite(Math.round(random(100, 900)), windowHeight-1000, 20, 20);
    ledges.velocityY = 1

    var rand = Math.round(random(1,4))
    switch(rand){
      case 1 : ledges.addImage(ledge1)
      break;
      case 2 : ledges.addImage(ledge2)
      break;
      case 3 : ledges.addImage(ledge3)
      break;
      case 4 : ledges.addImage(ledge4)
      break;
      default:
        break;
    }
  }
}

 

 
 