var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet =  createSprite(50, 200, 40, 10);
  wall =  createSprite(1200, 200, thickness, height/2);

  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;

}

function draw() {
  background(0);  
  drawSprites();
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight * speed *speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "green";
    }
   
    if(damage<10){
      wall.shapeColor = "red";
    }
  }
  
}

function hasCollided(bullet1,wall1){
  bulletRight = bullet1.x + bullet1.width;
  wallLeft = wall1.x;
  
  if(bulletRight>= wallLeft){
    return true;
  }
    return false;
}


