
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject = new Paper(200,650,30);
dustbin1 = new Dustbin(650,650,20,100);
dustbin2 = new Dustbin(550,650,20,100);
dustbin3 = new Dustbin(600,687,100,20);
ground = new Dustbin(400,695,800,10);	

Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paperObject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-120});
	}
}


