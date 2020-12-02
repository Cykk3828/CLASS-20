function setup() {
  createCanvas(800,400);
  Example=createSprite(400,200,50,50);
  Example.shapeColor="green";
  Example.velocityX=-2;
  Example2=createSprite(200,200,50,50);
  Example2.shapeColor="green";
  Example2.velocityX=+2;
}

function draw() {
  background("black");  

if(Example.x-Example2.x<Example.width/2+Example2.width/2 && 
   Example2.x-Example.x<Example.width/2+Example2.width/2 ){
    Example.velocityX =Example.velocityX*(-1);
    Example2.velocityX =Example2.velocityX*(-1);
}else if (Example.y-Example2.y<Example.width/2+Example2.width/2 && Example2.y-Example.y<Example.width/2+Example2.width/2){ 
 Example.velocityY =Example.velocityY*(-1);
 Example2.velocityY =Example2.velocityY*(-1);
} else {
  Example.shapeColor="blue";
  Example2.shapeColor="blue";
}

  drawSprites();
}
