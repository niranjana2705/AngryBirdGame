const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world,g1,b1,b2,b3,b4,b5,p1,p2,l1,l2,l3,l4,B1;
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1200,400);
 g1=new ground(600,380,1200,10)
 b1=new box(700,320,70,70)
 b2=new box(920,320,70,70) 
 b3=new box(700,240,70,70) 
 b4=new box(920,240,70,70)
 b5=new box(810,160,70,70)
 p1=new Pig(810,340,50,50)
 p2=new Pig(810,220,50,50)
 l1=new log (810,260,20,300,PI/2)
 l2=new log (810,180,20,300,PI/2)
 l3=new log (760,120,20,300,PI/7)
 l4=new log (870,120,20,300,-PI/7)
 B1=new bird(100,100,50,50)

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
 g1.display()
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 l1.display()
 l2.display()
 l3.display()
 l4.display()
 p1.display()
 p2.display()
 B1.display()
}