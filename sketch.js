const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 195,
    120,
    120
  );
  //computerArcher.body.angle = -1.5;
  playerArcher = new PlayerArcher(
    300,
    playerBase.body.position.y - 195,
    120,
    120
  );
  playerArcher.body.angle = -PI /2;

  //Create an arrow Object
  
  playerArrow = new PlayerArrow(
    350,
    playerBase.body.position.y - 195,
    120,
    10
  );
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  playerArrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    //playerArrow.body.angle = PI/2 + playerArcher.body.angle; 
    playerArrow.shoot(playerArcher.body.angle + PI/2);
    console.log(playerArcher.body.angle);
    console.log(playerArrow.body.angle);

  }
}



