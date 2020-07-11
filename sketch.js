const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground,ball,dustbin;
var bImg;

function setup(){
    engine=Engine.create();
    world=engine.world;

    var canvas=createCanvas(1200,400);
    ground=new Ground(600,375,1200,50);

    
    
    ball=new Ball(200,200,20);
    dustbin=new Dustbin(735,250,20,200,965,250,20,100,850,350,250,10);

    
    
   

   
}

function draw(){
    background(123,145,234);
    ground.display(181,101,29);
   
   
    
   

    ball.display();
    dustbin.display();

    Engine.update(engine);

   
    
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-100});
    }
}

