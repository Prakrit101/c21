var fr,mr
var obi1,obi2

function setup() {
  createCanvas(800,400);
  fr=createSprite(200, 200, 50, 50);
  mr=createSprite(100,200,50,50)
  fr.shapeColor="yellow"
  mr.shapeColor="yellow"
  obi1=createSprite(150,250,60,60)
  obi2=createSprite(250,150,60,60)
  obi1.shapeColor="yellow"
  obi2.shapeColor="yellow"
}

function draw() {
  background("black");
  mr.x=World.mouseX
  mr.y=World.mouseY  
 if(isTouching(mr,obi1)){
  obi1.shapeColor="red"
  mr.shapeColor="red"   
 } 
 else{
  obi1.shapeColor="yellow"
  mr.shapeColor="yellow"   
 }
  drawSprites();
}
