
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperr;
var world;


function setup() {
	createCanvas(1600,800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
paperr = new paper(1200,100,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperr.display();
  groundObject.display();
  dustbinObj.display();

}

