class bird{
    constructor(x,y,width,height){
        var op1={
            friction:1,restitution:1,density:1
        }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,op1)
        World.add (world,this.body)
    }
    display(){
    var pos=this.body.position;
    pos.x=mouseX; 
    pos.y=mouseY;
    var angle=this.body.angle;
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill("red");
    rectMode(CENTER)
    rect (0,0,this.width,this.height);
    pop ();
    }
}