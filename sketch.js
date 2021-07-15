
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world , body , body1;
function setup(){
  canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  body = Bodies.rectangle(200 , 200 , 20 , 20)
  body1 = Bodies.rectangle(300 , 200 , 20 , 20)
  World.add(world , [body , body1])

  
    rect = createSprite(300,100 ,50,50);
    rect1 = createSprite(200,100 ,50,50);
    

  
  rectMode(CENTER);

}
function draw()
{
  background(0);
  Engine.update(engine)
  rect.x = body.position.x
  rect.y = body.position.y

  rect1.x = body1.position.x
  rect1.y = body1.position.y

  drawSprites();
}
