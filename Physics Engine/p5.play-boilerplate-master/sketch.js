const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;
var box1, box2, ground, pig1, pig2;
function setup(){
  createCanvas(1200,600);

  engine=Engine.create();
  world = engine.world;

 box1 = new Box(900,500,50,50);
 box2 = new Box(1050,500,50,50);
 ground = new Ground(600,590,1200,20);
 pig1 = new Pig(970,500);
 pig2 = new Pig(300,300);
 log1 = new Log(950,400,15,PI/2);
}

function draw(){
  background("lightblue"); 

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  //pig2.display();
  log1.display();
}

