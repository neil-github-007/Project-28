const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,105,30);
	mango3 = new Mango(900,180,30);
	mango4 = new Mango(1050,220,30);
	mango5 = new Mango(1150,150,30);
	mango6 = new Mango(1225,185,30);

	treeObj = new Tree(1050,580);
	groundObject = new Ground(width/2,600,width,20);

	stoneObj = new Stone(235, 420);

	launcher = new Launcher(stoneObj.body, {x : 235, y : 420});
	
	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
	
  background(230);
  
  image(boy ,200,340,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stoneObj.display();

  groundObject.display();

  detectCollision(stoneObj.body,mango1.body);
  detectCollision(stoneObj.body,mango2.body);
  detectCollision(stoneObj.body,mango3.body);
  detectCollision(stoneObj.body,mango4.body);
  detectCollision(stoneObj.body,mango5.body);
  detectCollision(stoneObj.body,mango6.body);

  textSize(20);
  fill('black');
  text("Press Space to rethrow", 10, 25);
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    launcher.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Body.setPosition(stoneObj.body, {x:235, y:420});
        launcher.attach(stoneObj.body);
    }
}

function detectCollision(lstone, lmango) {
    var mangoBodyPosition = lmango.body.position;
    var stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

    if (distance <= lmango.body.r + lstone.body.r) {
        Matter.Body.setStatic(lmango.body, false);
    }
}