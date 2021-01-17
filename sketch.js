var mouse,mouseImg,mousestop;
var cat,catImg,catmove;
var ground,groundImage;
var play=1;
var end=0
var gamestate=play;
//,"tomTwo","tomThree","tomFour"

function preload() {
    //load the images here
 mouseImg=loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");
  
 catImg=loadAnimation("tomFour.png")

 groundImage=loadImage("garden.png")

 catmove=loadAnimation("tomTwo.png","tomthree.png");

 mousestop=loadImage("jerryFour.png");
}

function setup(){
    createCanvas(700,500);
    //create tom and jerry sprites here

  ground=createSprite(350,250,40,40);
  ground.addImage("ground",groundImage);
  ground.scale=0.8;

  mouse=createSprite(100,420,20,20);
  mouse.addAnimation("mouse",mouseImg);
  mouse.scale=0.1;

  cat=createSprite(600,400,50,50);
  cat.addAnimation("tom",catmove);
  cat.scale=0.2;
  cat.debug=false;
  cat.setCollider("rectangle",0,0,800,600);

  cat.addAnimation("catstoping",catImg);

  mouse.addImage("mousestopall",mousestop)
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    
   console.log(cat.x);

   if(gamestate===play){

    if(keyDown("left")){
        cat.x=cat.x-5;
     }

     keyPressed();
}

if(gamestate===end){
  //mouse.changeImage("collided",mousestop);
  mouse.changeImage("mousestopall");
  cat.changeAnimation("catstoping")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(cat.x-mouse.x<mouse.width/2+cat.width/2 && 
   mouse.x-cat.x<mouse.width/2+cat.width/2  ){
  //cat.scale=0.5;
  cat.x=200;
  cat.y=400;

  cat.velocityX=0;

  gamestate=end;

 }
    


}
