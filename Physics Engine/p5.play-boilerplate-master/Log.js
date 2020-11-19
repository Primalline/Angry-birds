class Log{
    constructor(x,y,height,angle){
      var options={

        restitution:0.8, friction:1, density:1
          }
    this.body= Bodies.rectangle(x,y,20,height,options);
    this.width=230;
    this.height= height;
    World.add(world,this.body);  
    Matter.Body.setAngle(this.body,angle); 
    }
    display(){

    var angle = this.body.angle;
     var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("brown")
    rect(0,0,this.width,this.height);
    pop(); 
    }
  }