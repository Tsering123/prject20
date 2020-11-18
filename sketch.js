var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  car.shapeColor="red";
  wall=createSprite(1300,200,60,100)
  wall.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor="blue";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="black";
    }
  if(deformation<100){
  car.shapeColor="orange";
}
  }
  
  drawSprites();
}