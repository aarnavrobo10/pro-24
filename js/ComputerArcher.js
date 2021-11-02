class ComputerArcher{
constructor(x,y, width,height){
    var options = {
        isStatic: true
      };
this.body = Bodies.rectangle(x, y, width, height, options);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.image = loadImage("./assets/computerArcher.png");

}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode (CENTER);
image (this.image,  0, 0, this.width, this.height);
pop();

Matter.Body.setAngle(this.body, PI/2);

if (keyIsDown(UP_ARROW) && angle > 4) {
    angle -= 0.01;
}
    else if(keyIsDown(DOWN_ARROW) && angle < 4.9) {
    angle += 0.01; }
    else
    {//angle -= 0.01;
    
  } 
}

}