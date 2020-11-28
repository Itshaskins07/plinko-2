class Particles{
    constructor(x,y,r){
    var options={
    restitution:0.5, 
        
}
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    this.radius=r;
    
}
    display(){
    push();
    ellipseMode(CENTER);
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(0,0,this.radius,this.radius);
    pop();   
}




}