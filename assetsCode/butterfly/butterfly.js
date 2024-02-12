// Declare frame (0 to 10)
let frame = 0;

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
  scale(0.75);

  // Map variables to frame and specific ranges
  let xPosLeft = map(frame, 0, 10, 0, 33);
  let xPosRight = map(frame, 0, 10, 0, 37);
  let scalePercent = map(frame, 0, 10, 1, 0.3);

  // Create scribble instance
  scribble = new Scribble();

  // Declare scribble variables
  scribble.bowing = 1;
  scribble.roughness = 0.75;

  // Draw left wing
  push();
  translate(xPosLeft + 3, 0);
  scale(scalePercent, 1);
  scribble.scribbleFilling([2, 3, 5, 9, 13, 20, 29, 35, 46, 46, 47, 40, 30, 20], [19, 27, 45, 55, 61, 65, 63, 60, 58, 53, 47, 38, 28, 22], 3, random(0, 359));
  scribble.scribbleFilling([17, 16, 16, 19, 25, 30, 37, 42, 45, 48, 46, 35, 27], [66, 71, 78, 84, 87, 89, 87, 82, 75, 60, 56, 62, 65], 3, random(0, 359));
  pop();

  // Draw right wing
  push();
  translate(xPosRight - 3, 0);
  scale(scalePercent, 1);
  push();
  translate(100, 0);
  scale(-1, 1);
  scribble.scribbleFilling([2, 3, 5, 9, 13, 20, 29, 35, 46, 46, 47, 40, 30, 20], [19, 27, 45, 55, 61, 65, 63, 60, 58, 53, 47, 38, 28, 22], 3, random(0, 359));
  scribble.scribbleFilling([17, 16, 16, 19, 25, 30, 37, 42, 45, 48, 46, 35, 27], [66, 71, 78, 84, 87, 89, 87, 82, 75, 60, 56, 62, 65], 3, random(0, 359));
  pop();
  pop();
}