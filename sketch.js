const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create(); 
  world = engine.world;

  //box = createSprite(400, 990, 1400, 1400);
   //line1 = createSprite(800, 605, 15, 700);
   //line2 = createSprite(255, 605, 15, 700);
   ground = new Ground(380, 790, 3550, 15);
  // division1 = new Divisions(280, 790, 10, 300);
  // division2 = new Divisions(360, 790, 10, 300);
  // division3 = new Divisions(430, 790, 10, 300);
  // division4 = new Divisions(500, 790, 10, 300);
  // division5 = new Divisions(570, 790, 10, 300);
  // division6 = new Divisions(640, 790, 10, 300);
  // division7 = new Divisions(710, 790, 10, 300);
  // division8 = new Divisions(780, 790, 10, 300);

   //line1.shapeColor = "brown";
   //line2.shapeColor = "brown" ;

   for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }
   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }
   for (var j = 50; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,175));
   }
    for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }
    for (var j = 50; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,375));
   }
  
}

function draw() {
  background(0);  
  Engine.update(engine)

   
   ground.display();
   //division1.display();
   //division2.display();
   //division3.display();
   //division4.display();
   //division5.display();
   //division6.display();
   //division7.display();
   //division8.display();

   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }




  drawSprites();
}