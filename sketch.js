const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var ball1, blower1, blowermouth1;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ball1 = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower1 = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowermouth1 = new Blowermouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createButton("Click to Blow!");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ball1.display();
  blower1.display();
  blowermouth1.display();

}

function blow(){
  Matter.Body.applyForce(ball1.body, {x: 0, y: 0}, {x: 0, y: 0.05});
}