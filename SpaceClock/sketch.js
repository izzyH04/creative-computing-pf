let cam;

function setup() {
  createCanvas(500, 400, WEBGL);
  translate(250,200);
  //used camera to make toruses and planets be on the same plane while keeping perspective
  cam = createCamera();
  cam.setPosition(750,-100,100);
  cam.lookAt(0,0,0);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  sun();
  planet(15,100,color(100,100,100), color(150,150,150), second());
  planet(20,150,color(235,211,176), color(186,143,84), minute());
  planet(25,200,color(16,115,222), color(3,166,60), hour());
}

function sun(){
  push();
  
  stroke(255,200,0);
  fill(255,150,0);
  rotateX(-28.5);
  rotateY(millis()/200);
  sphere(50);
  
  pop();
}

function planet(planetSize, orbitSize, planetColour, strokeColour, time){
  push();
  //this bit does the torus
  let c = color(255);
  let axis = createVector(0,10,10);
  c.setAlpha(75);
  fill(c);
  noStroke();
  rotate(180,axis);
  torus(orbitSize,1);
  
  pop();
  
  push();
  //this bit does the actual planets
  //need to smooth movement
  rotateY((-time*6)- 90);
  stroke(strokeColour);
  strokeWeight(0.5);
  fill(planetColour);
  translate(0,0,(orbitSize-planetSize+10));
  sphere(planetSize);
  
  pop();
}