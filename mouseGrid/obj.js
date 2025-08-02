class myRect {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  spin(){
    push()
    translate(this.x, this.y);
    let angle = atan2(this.x-mouseX, this.y-mouseY);
    rotate(angle);
    
    noStroke();
    fill(mouseX-this.x,mouseY-this.y,200);
    rect(10, 10, mouseX/20, mouseY/20);
    pop();
  }
}