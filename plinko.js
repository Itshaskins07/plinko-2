class Plinko{
    constructor(x,y,r){
    var options={
    isStatic:true,    
    restitution:1,
    friction:0

}
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    this.radius=r;
    
}
    display(){
    push();
    ellipseMode(RADIUS);
    translate(this.body.position.x,this.body.position.y)
    fill("white");
    ellipse(0,0,this.radius,this.radius);
    pop();   
}




}