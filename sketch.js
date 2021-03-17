var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520,60,70);
	fairy.addAnimation("fairyflying",fairyImg);  
	
	fairy.scale =0.25;
	fairy.setCollider("rectangle",0,0,1000,70);
	

    
    

	star = createSprite(650,60);
	star.addImage(starImg);
	star.scale = 0.07;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  if(keyDown("left")) {
	fairy.x=fairy.x-8;
	}    
	 if(keyDown("right")) {
	fairy.x=fairy.x+8;
	}
  
 if(keyDown("down")){
	 star.velocityY=5;
 }
 if(star.isTouching(fairy)){
	 star.collide(fairy);
	 star.velocityY=0;
	 fairyVoice.play();
	 star.x=fairy.x+150
	 
	}
 
 
  drawSprites();

}

