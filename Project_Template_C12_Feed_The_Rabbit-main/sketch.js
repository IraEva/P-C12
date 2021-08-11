var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png");
  orangeLeafImg = loadImage ("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX = -3;
rabbit.velocityX = 3;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

    if (frameCount % 80 == 0){
    if (apple == 1){
      function createApples(){
        //Add the sprite
        apple = createCanvas(20,30,10,10);
        apple.addImage(appleImg);
        //scale the sprite
        apple.scale = 0.1;
        //Give velocity to move the apple
        apple.velocityX = -3
        apple.velocityX = 3
        //give lifetime
        apple.lifetime = 500;
    }
    else {
      function createleaves(){
        //Add the sprite
        leaves = createCanvas(20,30,10,10);
        leaves.addImage(orangeLeafImg);
        //scale the sprite
        leaves.scale = 0.1;
        //Give velocity to move the apple
        leaves.velocityX = -3
        leaves.velocityX = 3
        //give lifetime
        leaves.lifetime = 500;
      }
    }
  }
  
