
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world ;
function setup() {
	createCanvas(800, 500);
  engine = Engine.create();

	//engine = Engine. create        ();
	world = engine.world;

  ground2 = new Ground(400,450,800,10);
    paper1 = new Paper(360,410,30);
   wall1 = new Bin( 700,405,10,80 );
   wall2 = new Bin( 600,405,10,80 );
    
	//Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
 

  ground2.display();
  paper1.display();
  wall1.display();
  wall2.display();

  
 

  drawSprites();
 
}
function keyPressed(){
  console.log('kp')
  if (keyCode === UP_ARROW){
    console.log('paper');
   Body.applyForce(paper1.body, paper1.body.position, {x:85,y:-85})
  }
}
// function keyPressed (){
 
// }




