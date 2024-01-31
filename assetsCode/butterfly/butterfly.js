let img;
let frame;
let scalePercent;

function preload() {
  img = loadImage('assets/template.png');
}

function setup() {
  createCanvas(100, 100);
  // background(170);
  clear();

  push();
  translate(width / 2, height / 2);
  scale(0.42);
  // image(img, -125, -125);
  pop();

  stroke(255);
  strokeWeight(0.5);
  noFill();

  frame = 1; // 0 to 10 (11 frames)
  xPosLeft = map(frame, 0, 10, 0, 33);
  xPosRight = map(frame, 0, 10, 0, 37);
  scalePercent = map(frame, 0, 10, 1, 0.3);

  // Create an instance of scribble and set a few parameters
  let scribble = new Scribble();
  scribble.bowing = 1;
  scribble.roughness = 0.2; // 0.2
  scribble.numEllipseSteps = 1;

  // Draw left wing
  push();
  translate(xPosLeft, 0);
  scale(scalePercent, 1);
  scribble.scribbleCurve(1, 18, 3, 27, 0, 23, 3, 27);
  scribble.scribbleCurve(3, 27, 17, 64, 2, 58, 17, 64);
  scribble.scribbleCurve(17, 64, 47, 54, 26, 69, 47, 54);
  scribble.scribbleCurve(47, 54, 48, 47, 47, 54, 47, 47);
  scribble.scribbleCurve(48, 47, 1, 18, 30, 20, 10, 18);

  scribble.scribbleCurve(17, 64, 49, 59, 7, 90, 45, 108);
  scribble.scribbleCurve(49, 59, 47, 54, 48, 59, 47, 54);

  // Draw left wing patterns
  scribble.scribbleEllipse(12, 28, 8, 8);
  scribble.scribbleCurve(47, 49, 47, 52, 0, 0, 0, 80);
  scribble.scribbleEllipse(31, 75, 15, 15);

  scribble.scribbleFilling([11, 8, 8, 13, 16, 16], [24, 27, 30, 32, 29, 26], 2, 315);
  scribble.scribbleFilling([14, 12, 14, 16, 19, 26, 35, 41, 44, 47, 47, 40, 30, 22, 17], [36, 43, 51, 53, 55, 58, 57, 55, 53, 52, 49, 43, 35, 33, 34], 2, 315);
  scribble.scribbleFilling([31, 28, 24, 24, 28, 31, 34, 38, 38, 34, 31], [67, 68, 72, 78, 82, 82, 82, 78, 72, 68, 67], 2, 315);
  pop();

  // Draw right wing
  push();
  translate(xPosRight, 0);
  scale(scalePercent, 1);
  push();
  translate(100, 0);
  scale(-1, 1);

  scribble.scribbleCurve(1, 18, 3, 27, 0, 23, 3, 27);
  scribble.scribbleCurve(3, 27, 17, 64, 2, 58, 17, 64);
  scribble.scribbleCurve(17, 64, 47, 54, 26, 69, 47, 54);
  scribble.scribbleCurve(47, 54, 48, 47, 47, 54, 47, 47);
  scribble.scribbleCurve(48, 47, 1, 18, 30, 20, 10, 18);

  scribble.scribbleCurve(17, 64, 49, 59, 7, 90, 45, 108);
  scribble.scribbleCurve(49, 59, 47, 54, 48, 59, 47, 54);

  // Draw right wing patterns
  scribble.scribbleEllipse(12, 28, 8, 8);
  scribble.scribbleCurve(47, 49, 47, 52, 0, 0, 0, 80);
  scribble.scribbleEllipse(31, 75, 15, 15);

  scribble.scribbleFilling([11, 8, 8, 13, 16, 16], [24, 27, 30, 32, 29, 26], 2, 45);
  scribble.scribbleFilling([14, 12, 14, 16, 19, 26, 35, 41, 44, 47, 47, 40, 30, 22, 17], [36, 43, 51, 53, 55, 58, 57, 55, 53, 52, 49, 43, 35, 33, 34], 2, 45);
  scribble.scribbleFilling([31, 28, 24, 24, 28, 31, 34, 38, 38, 34, 31], [67, 68, 72, 78, 82, 82, 82, 78, 72, 68, 67], 2, 45);
  pop();
  pop();

  // Draw body
  scribble.scribbleEllipse(50, 53, 6, 14);
  scribble.scribbleEllipse(50, 44, 4, 5);
  scribble.scribbleCurve(49, 59, 50, 75, 47, 70, 50, 75);
  scribble.scribbleCurve(50, 75, 51, 59, 50, 75, 53, 70);

  // Draw antenna
  scribble.scribbleCurve(49, 42, 41, 25, 47, 33, 45, 25);
  scribble.scribbleCurve(51, 42, 59, 25, 53, 33, 55, 25);
}

function draw() {
  noStroke();
  fill(255, 0, 0);
  // ellipse(17, 34, 1);
  // ellipse(47, 52, 1);
}