var hr, min, sec;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);  
  //drawSprites();

  translate(200, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("lime");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  noFill();
  stroke("red");
  strokeWeight(9);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke("lime")
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);
}