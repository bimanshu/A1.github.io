let ellipseColor = [255, 255, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235);
  
  
  fill('white');
  textSize(32);
  textAlign (CENTER);
  text('Click the circle', 400, 200);
  
  fill(ellipseColor);
  noStroke();
  ellipse(width - 50, 50, 80, 80);
  
  fill(0, 128, 0); 
  noStroke();
  rect(0, height - 100, width, 100);
  
  fill(139, 69, 19); 
  noStroke();
  triangle(0, height - 100, width/2, height/2, width, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width - 50, 50) < 40) {
    ellipseColor = [255, 0, 0]; 
  }
}