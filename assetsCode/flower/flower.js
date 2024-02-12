// Declare type variable (1 = outline, 2 = petal fillings)
let type = 1;

// Declare clearBackground
let clearBackground = false;

// SETUP FUNCTION
function setup() {
  // Create canvas
  createCanvas(75, 75);

  // If clearBackground is true
  if (clearBackground) {
    // Set background to fully transparent
    clear();
  }

  // If clearBackground is false
  else {
    // Set background color
    background(0);
  }

  // Declare styles
  stroke(255);
  strokeWeight(1);
  noFill();
  angleMode(DEGREES);

  // Create scribble instance
  scribble = new Scribble();

  // Declare scribble variables
  scribble.bowing = 1;
  scribble.roughness = 0.25;
  scribble.numEllipseSteps = 1;

  // Draw outline
  if (type === 1) {
    scribble.scribbleEllipse(width / 2, height / 2, 20, 20);
    translate(width / 2, height / 2);

    scribble.scribbleCurve(-5.5, -8.5, 5.5, -8.5, -17.5, -37.5, 17.5, -37.5);
    push();
    rotate(90);
    scribble.scribbleCurve(-5.5, -8.5, 5.5, -8.5, -17.5, -37.5, 17.5, -37.5);
    pop();
    push();
    rotate(180);
    scribble.scribbleCurve(-5.5, -8.5, 5.5, -8.5, -17.5, -37.5, 17.5, -37.5);
    pop();
    push();
    rotate(270);
    scribble.scribbleCurve(-5.5, -8.5, 5.5, -8.5, -17.5, -37.5, 17.5, -37.5);
    pop();

    scribble.scribbleCurve(8, -18, 18, -8, 16, -28, 28, -16);
    push();
    rotate(90);
    scribble.scribbleCurve(8, -18, 18, -8, 16, -28, 28, -16);
    pop();
    push();
    rotate(180);
    scribble.scribbleCurve(8, -18, 18, -8, 16, -28, 28, -16);
    pop();
    push();
    rotate(270);
    scribble.scribbleCurve(8, -18, 18, -8, 16, -28, 28, -16);
    pop();
  }
  
  // Draw petal fillings
  if (type === 2) {
    translate(width / 2, height / 2);

    push();
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [-5.5, -8, -5.5, 0, 5.5, 8, 5.5, 0],
      [-8.5, -18, -27, -30, -27, -18, -8.5, -10],
      2,
      random(360)
    );
    pop();
    push();
    rotate(90);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [-5.5, -8, -5.5, 0, 5.5, 8, 5.5, 0],
      [-8.5, -18, -27, -30, -27, -18, -8.5, -10],
      2,
      random(360)
    );
    pop();
    push();
    rotate(180);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [-5.5, -8, -5.5, 0, 5.5, 8, 5.5, 0],
      [-8.5, -18, -27, -30, -27, -18, -8.5, -10],
      2,
      random(360)
    );
    pop();
    push();
    rotate(270);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [-5.5, -8, -5.5, 0, 5.5, 8, 5.5, 0],
      [-8.5, -18, -27, -30, -27, -18, -8.5, -10],
      2,
      random(360)
    );
    pop();

    push();
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [8, 14, 18, 21, 21, 18, 12, 9, 7],
      [-18, -21, -20, -16, -13, -9, -8, -7, -8],
      2,
      random(360)
    );
    pop();
    push();
    rotate(90);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [8, 14, 18, 21, 21, 18, 12, 9, 7],
      [-18, -21, -20, -16, -13, -9, -8, -7, -8],
      2,
      random(360)
    );
    pop();
    push();
    rotate(180);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [8, 14, 18, 21, 21, 18, 12, 9, 7],
      [-18, -21, -20, -16, -13, -9, -8, -7, -8],
      2,
      random(360)
    );
    pop();
    push();
    rotate(270);
    strokeWeight(0.5);
    scribble.scribbleFilling(
      [8, 14, 18, 21, 21, 18, 12, 9, 7],
      [-18, -21, -20, -16, -13, -9, -8, -7, -8],
      2,
      random(360)
    );
    pop();
  }
}