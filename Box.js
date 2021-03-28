class box {
 constructor(x,y,width,height){
    var option={
        restitution:1.0,friction:1.0,density:1.0
    }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,option)
    World.add(world,this.body)
 }
 display(){
var pos=this.body.position
var angle=this.body.angle
push () 
translate (pos.x,pos.y)
rotate (angle)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop ()
}
}