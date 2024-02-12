// Declare clearBackground
let clearBackground = true;

// SETUP FUNCTION
function setup() {
  // Create canvas
  createCanvas(75, 75);

  // If clearBackground is true
  if (clearBackground) {
    // Set backgrount to fully transparent
    clear();
  }

  // If clearBackground is false
  else {
    // Set background color
    background(0);
  }

  // Declare new (0, 0) point
  translate(width / 2, height / 2);

  // Declare styles
  stroke(255);
  strokeWeight(1);
  noFill();

  // Create scribble instance
  scribble = new Scribble();

  // Declare scribble variables
  scribble.bowing = 1;
  scribble.roughness = 0.75;

  // Draw heart
  scribble.scribbleFilling(
    [0, -4.5, -9.5, -15.5, -22.5, -28.5, -31.5, -31.5, -28.5, -6.5, -2.5, 0, 2.5, 6.5, 28.5, 31.5, 31.5, 28.5, 22.5, 15.5, 9.5, 4.5],
    [-20.5, -27.5, -30.5, -31.5, -29.5, -25.5, -17.5, -12.5, -4.5, 22.5, 26, 31.5, 26, 22.5, -4.5, -12.5, -17.5, -25.5, -29.5, -31.5, -30.5, -27.5],
    3,
    random(360)
  );
}