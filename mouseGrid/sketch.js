let rows;
let columns;
let size = 20;
let rects = [];

function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  rows = height/size;
  columns = width/size;
  for(let i=0; i<columns; i++){
    rects[i] = [];
    for (let j=0; j<rows; j++){
      rects[i][j] = new myRect(size/2 + i*size, size/2 + j*size);
    }
  }
}

function draw() {
  background(0);
  
  for(let i=0; i<columns; i++){
    for(let j=0; j<rows; j++){
      rects[i][j].spin();
    }
  }
}

