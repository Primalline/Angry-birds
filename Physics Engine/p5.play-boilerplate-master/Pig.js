class Pig{
    constructor(x,y){
      var options={

        restitution:1
      }
    this.body= Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height= 50;
    World.add(world,this.body);   
    }
    display(){

    var angle = this.body.angle;
     var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("green")
    rect(0,0,this.width,this.height);
    pop(); 
    }
  }