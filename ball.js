class Ball 
    {constructor(x, y,r) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r =r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS)
    fill("red");
    stroke (130,2,0);
    strokeWeight(5);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};