class Dustbin{
    constructor(x1,y1,w1,h1,x2,y2,w2,h2,x3,y3,w3,h3){
        var dOptions={
            isStatic:true
        }

        this.body1=Bodies.rectangle(x1,y1,w1,h1,dOptions);
        this.wid=w1;
        this.heig=h1;

        this.body2=Bodies.rectangle(x2,y2,w2,h2,dOptions);
        this.wid2=w2;
        this.heig2=h1;

        this.body3=Bodies.rectangle(x3,y3,w3,h3,dOptions);
        this.wid3=w3;
        this.heig3=h3;

        this.image=loadImage("dustbin.png");

        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);
         
}
     display(){
         fill("white");
         rectMode(CENTER);
         rect(this.body1.position.x,this.body1.position.y,this.wid,this.heig);
         rect(this.body2.position.x,this.body2.position.y,this.wid2,this.heig2);

         rect(this.body3.position.x,this.body3.position.y,this.wid3,this.heig3);
     imageMode(CENTER);
        image(this.image,850,250,300,219);
}
}

