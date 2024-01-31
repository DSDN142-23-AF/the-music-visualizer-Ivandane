// THESE VARIABLES MUST NOT BE CHANGED
// Declare arrays
let butterflies = []
let otherPhy = [];

// Declare variables
let initialize = true;
let currentTime;

// THESE VARIABLES CAN BE CHANGED
// Declare array
// numPoints, degrees, scale, startingIndex, speed, trailLength
let otherPhyVariables = [500, 51, 10, 1000, 10, 5];

// Declare variables
let numBassPhy = 7;

let vocalSpeed = 20;
let drumSpeed = 20;
let bassSpeed = 20;
let otherSpeed = 25;

let vocalThreshold = 50;
let drumThreshold = 50;
let bassThreshold = 50;
let otherThreshold = 65;

let showLines = false;
let showPoints = false;

// DRAW ONE FRAME FUNCTION
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // Setup
  if (initialize) {
    // Repeat 20 times
    for (let i = 0; i < 20; i++) {
      // Create filename variable
      let filename = 'assets/butterfly/butterfly_' + nf(i, 2) + '.png';

      // Append butterflies array with image
      butterflies.push(loadImage(filename));
    }

    // Create other phyllotaxis objects
    // Repeat for the value of numBassPhy
    for (let i = 0; i < numBassPhy; i++) {
      // Append otherPhy array with new object
      otherPhy.push(new Phyllotaxis(
          butterflies,
          otherPhyVariables[0],
          otherPhyVariables[1],
          otherPhyVariables[2],
          otherPhyVariables[3] + i,
          otherPhyVariables[4],
          otherPhyVariables[5],
          showPoints,
          showLines,
          counter
      )); 
    }

    // Set boolean to false
    initialize = false;
  }

  // Declare styles
  background(0);
  translate(width / 2, height / 2);
  
  // Check if song is playing
  if (song.isPlaying()) {
    // Run other phyllotaxis objects
    // Repeat for each object in the otherPhy array
    for (const phy of otherPhy) {
      // Run otherPhy functions
      phy.setCounter(counter);
      phy.setOther(other);
      phy.path();
      phy.move();
      phy.show();
    }

    // Check if song is past 20 seconds
    if (counter >= 20) {
      otherThreshold = 70;
    }
  }

  // Run showCounter function
  showCounter(counter);
}

// SHOW COUNTER FUNCTION
function showCounter(counter) {
  // Declare styles
  push();
  translate(0, (height / 2) - 50);
  noStroke();
  textAlign(CENTER);
  textSize(60);
  rectMode(CENTER);

  // Check if song is playing
  if (song.isPlaying()) {
    // Declare styles
    fill(0);
    rect(0, -25, 200, 50);
    fill(255);

    // Draw text
    text(nf(counter, 2, 2), 0, 0);
  }
  pop();
}