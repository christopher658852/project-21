var btn1
var btn2

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;

var groundObj;
var ball;
var rightSide;
var leftSide;
var radius=40;


function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	// btn1 = createImg('right.png');
	// btn1.position(200,30);
	// btn1.size(50,50);
	// btn1.mouseClicked(vforce);

	// btn2 = createImg('up.png');
	// btn2.position(200,30);
	// btn2.size(50,50);
	// btn2.mouseClicked(hForce);

	// engine = Engine.create();
	// world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground (1350,600,20,120);

	ball = Bodies.circle(260,100,radius/2, ball_options);
	World.add(world,ball);

	// rectMode(CENTER);
	// ellipseMode(RADIUS);

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
	rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  //Engine.update(engine);


  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



