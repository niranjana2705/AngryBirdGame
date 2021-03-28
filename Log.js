class log{
    constructor(x,y,width,height,angle){
var op1={
    friction:1,density:1,restitution:1
}
this.width=20
this.height=height
this.body=Bodies.rectangle(x,y,20,height,op1)
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y)
        rotate (angle)
        fill ("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ();
    }
}