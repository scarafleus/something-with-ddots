var dots = [];
var distan = 20;

function setup() {
  createCanvas(400,400);
  for (i = 0; i < width / distan; i++) {
    dots[i] = [];
    for (j = 0; j < height / distan; j++) {
      dots[i][j] = new dot(i * distan + distan / 2, j * distan + distan / 2);
    }
  }
}

function draw() {
  background(51);

  pointerSphere();

  for (i = 0; i < width / distan; i++) {
    for (j = 0; j < height / distan; j++) {
      dots[i][j].show();
      //dots[i][j].applyForce();
      dots[i][j].pointerColor();
    }
  }
}

function pointerSphere() {
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(mouseX, mouseY, 200, 200);
}
