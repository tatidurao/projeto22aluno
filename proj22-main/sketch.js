const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  //criar corpo da base do jogador
 /* playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);*/

  /* playerBase = Bodies.rect(200,350,180,150,options);
  World.add(world, playerBase);*/

  /* Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);*/

  //criar corpo do jogador
  player= Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world, player);

  playerArcher = Bodies.rectangle(340,playerBase.position.y - 112,120,120, options);
  World.add(world,playerArcher)
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()

  

  //image(playerBase.position.x,playerBase.position.y,180,150)

  //image(baseimage,x,y,180,150)

  //image(baseimage,playerBase.position.x,playerBase.position.y,180,150)



  //exibir a imagem da base do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,50,180)

  image(archerimage,playerArcher.position.x,playerArcher.position.y, 120, 120)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
