
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball,iron;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,height,1200,15)

   hammer=new Hammer(200,200);

   stone=new Stone(700,470,80,100 );

   iron=new Iron(300,470,80,50);

   rubber=new Rubber(200,170,20,10);

   ball1=new Balls(250,470);
   ball2=new Balls(270,470);
   ball3=new Balls(390,470);
   ball4=new Balls(400,470);
   ball5=new Balls(410,470);
   ball6=new Balls(280,470);

  
}


function draw() {
 
  rectMode(CENTER);

  background("pink");

  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  rubber.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();


  
 
   
}