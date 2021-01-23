const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var ground1;
var bgimg;
var superhero;
var rope;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14;

var monster1,monster2;

function preload() {
bgimg  = loadImage("GamingBackground.png");


}

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(400,400,770,10);
  superhero = new hero(100,200);

  rope = new slingShot(superhero.body,{x:100,y:200});

  b1 = new block(460,300);
  b2 = new block(460,300);
  b3 = new block(460,300);
  b4 = new block(460,300);

  b5 = new block(520,300);
  b6 = new block(520,300);
  b7 = new block(520,300);
  b8 = new block(520,300);
  b9 = new block(520,300);
  b10 = new block(520,300);

  b11 =new block(580,300);
  b12 = new block(580,300);
  b13 = new block(580,300);
  b14 = new block(580,300);

  monster1 = new monster(750,300);

  
  

}

function draw() {
  
  background("blue");
 Engine.update(engine);
 ground1.display();
 superhero.display();
 rope.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();

 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();

 b11.display();
 b12.display();
 b13.display();
 b14.display();

 monster1.display();





}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

