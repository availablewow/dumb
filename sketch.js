
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
  engine=Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(680,305,10,90)
	box2 = new Box(780,305,10,90)
  box3 = new Box(725,337,100,10)
  ball = new Ball(100,200,10);
  ground=new Ground(400,350,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x : 12 , y : -16})
  }
}





