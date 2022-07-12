var mario, mario_running;
var ground, ground_image;

var score = 0;

function preload() {
  mario_running =   loadAnimation("mario_1.png", "mario_2.png", "mario_jump1.png", "mario_3.png");
  ground_image = loadImage("ground.png");
}

function setup() {
  createCanvas(700, 400);
  
  mario = createSprite(50,180,20,50);
  
  mario.addAnimation("running", mario_running);
  mario.scale = 0.5;
  
  ground = createSprite(0,180,2500,10);
  ground.addImage("ground",ground_image);
  //ground.scale = ;

  //ground.velocityX = -(3 + 4*score/100);
}

function draw () {

    //background("red")
    drawSprites();
  if(keyDown("space") && mario.y >= 139) {
    mario.velocityY = -9;
  }
  if(ground.x<0) {
    ground.x = ground.width /2;
}
ground.velocityX = -7

}
