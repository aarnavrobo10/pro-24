class PlayerArcher{
constructor(x,y, width,height){
    var options = {
        isStatic: true
      };
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("./assets/playerArcher.png");
World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

   //Matter.Body.setAngle(this.body, -PI /2);
   console.log(angle);
    
if (keyIsDown(UP_ARROW) && angle > -1.8) {
    angle -= 0.01;
    Matter.Body.setAngle(this.body, angle);
}
    else if(keyIsDown(DOWN_ARROW) && angle < -1.25) {
    angle += 0.01; 
    Matter.Body.setAngle(this.body, angle);
}
    

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode (CENTER);
image (this.image,  0, 50, this.width, this.height);
pop();

 
}

}