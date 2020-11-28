const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Body=Matter.Body
const Constraint=Matter.Constraint
var engine,world;
var division=[]
var plinko=[]
var particle=[]
function setup() {
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,680,800,20)
  for(var x=0;x<width;x=x+80){
division.push(new Division(x,height-180,20,300))

  }
for(var x=40;x<width;x=x+50){
plinko.push(new Plinko(x,70,10))
plinko.push(new Plinko(x,140,10))
plinko.push(new Plinko(x,210,10))
plinko.push(new Plinko(x,280,10))

}
}

function draw() {
  background("Pink");  
  Engine.update(engine);
  ground.display();
 for(var position=0;position<division.length;position=position+1){
  division[position].display(); 
  
 }
 for(var position=0;position<plinko.length;position=position+1){
 plinko[position].display(); 
  
 }
  if(frameCount%50==0){
   particle.push(new Particles(random(0,width),10,10)); 
  }
  for(var position=0;position<particle.length;position=position+1){
    particle[position].display(); 
     
    }
     
   textSize(30)
   fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY);
 }

 
