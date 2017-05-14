function dot(x, y) {
this.pos = createVector(x, y);
this.posOriginal = this.pos;
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.colorr = 0;
this.colorg = 0;
this.colorb = 0;
this.dist;

this.show = function() {
  stroke(this.colorr, this.colorg, this.colorb);
  strokeWeight(6);
  point(this.pos.x, this.pos.y);
}

this.applyForce = function() {
  this.vel.add(this.acc);
  this.acc.mult(0);
  this.pos.add(this.vel);
}

this.pointerColor = function() {
  this.dist = int(dist(this.pos.x, this.pos.y, mouseX, mouseY));
  //this.colorr = map(this.dist, 200, 0, 255, 0);
  this.colorb = map(this.dist, 200, 0, 0, 255);
  //this.colorg = map(this.dist, 200, 0, 255, 0);
}

}
