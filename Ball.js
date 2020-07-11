class Ball{
    constructor(x,y,radius){
        var bOptions={
            'restitution':0.3,
            'friction':1.0,
            'density':1.2,
            'isStatic':false
            
        
        }
        this.body=Bodies.circle(x,y,radius,bOptions);
        World.add(world,this.body);
        this.radius=radius;
        this.image=loadImage("Crumpled paper image.png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,83,83);
       
        pop(); 
       
       
    }
}