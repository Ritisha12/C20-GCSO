var car,wall
var speed,weight
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80)
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  //car.x=mouseX
  //car.y=mouseY
  if(car.x-wall.x<wall.width/2+car.width/2
    &&wall.x-car.x<wall.width/2+car.width/2
    &&car.y-wall.y<wall.height/2+car.height/2
    &&wall.y-car.y<wall.height/2+car.height/2)
    {
      console.log(car.velocityX)
     car.velocityX=0
     var deformation=0.5 * weight * speed * speed/22509
     console.log(deformation)
     if(deformation>180 ){
       car.shapeColor=color(255,250,0)
     }
     if(deformation<180 && deformation>100){
       car.shapeColor=color(230,230,0)
     }
     if(deformation<100){
      car.shapeColor=color(0,255,0) 
     }
    
    }
  drawSprites();
}