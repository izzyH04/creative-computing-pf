class myObj {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  spin(){
    push()
    translate(this.x, this.y);
    let angle = -atan2(mouseX - this.x, mouseY - this.y);
    rotate(angle);
    
    noStroke();
    fill(this.x-mouseX,this.y-mouseY,200);
    rect(10, 10, mouseX/20, mouseY/20);
    pop();
  }
}