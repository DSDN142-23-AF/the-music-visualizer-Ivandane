// THESE VARIABLES MUST NOT BE CHANGED
// Declare array
let bassPhy = [];

// Declare variables
let initialize = true;
let currentTime;

// THESE VARIABLES CAN BE CHANGED
// Declare array
// numPoints, degrees, scale, startingIndex, speed, trailLength
let bassPhyVariables = [500, 51, 10, 1000, 10, 5];

// Declare variables
let numBassPhy = 7;

let vocalSpeed = 20;
let drumSpeed = 20;
let bassSpeed = 20;
let otherSpeed = 20;

let vocalThreshold = 50;
let drumThreshold = 50;
let bassThreshold = 60;
let otherThreshold = 50;

let showLines = false;
let showPoints = false;

// DRAW ONE FRAME FUNCTION
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // Setup
  if (initialize) {
    // Create bass phyllotaxis objects
    // Repeat for the value of numBassPhy
    for (let i = 0; i < numBassPhy; i++) {
      // Append bassPhy array with new object
      bassPhy.push(new Phyllotaxis(
          bassPhyVariables[0],
          bassPhyVariables[1],
          bassPhyVariables[2],
          bassPhyVariables[3] + i,
          bassPhyVariables[4],
          bassPhyVariables[5],
          showPoints,
          showLines
      )); 
    }

    // noLoop();

    // Set boolean to false
    initialize = false;
  }

  // Declare styles
  background(0);
  translate(width / 2, height / 2);
  
  // Check if song is playing
  if (song.isPlaying()) {
    // Run bass phyllotaxis objects
    // Repeat for each object in the bassPhy array
    for (const phy of bassPhy) {
      // Run bassPhy functions
      phy.setBass(bass);
      phy.path();
      phy.move();
      phy.show();
    }
  }

  // Run showCounter function
  showCounter(counter);
}

// PHYLLOTAXIS CLASS
class Phyllotaxis {
  // CONSTRUCTOR FUNCTION
  constructor(
    _numPoints, 
    _degrees,
    _scale,
    _startingIndex,
    _speed,
    _trailLength,
    _showPoints,
    _showLines,
  ) {
    // Pass the arguments into their respective variables
    this.numPoints = _numPoints;
    this.degrees = _degrees;
    this.scale = _scale;
    this.startIndex = _startingIndex;
    this.speed = _speed;
    this.trailLength = _trailLength;
    this.showPoints = _showPoints;
    this.showLines = _showLines;

    // Declare arrays
    this.points = [];
    this.trails = [];

    // Declare variables
    this.step = 0;
    this.target = 0;
    this.stepFrames = this.speed * 60; // 60 FPS
    this.vocalSet = false;
    this.drumSet = false;
    this.bassSet = false;
    this.otherSet = false;

    // Repeat for the value of the trailLength variable
    for (let i = 0; i < this.trailLength; i++) {
      // Append trails array with vector
      this.trails.push(createVector(-100, -100));
    }
  }

  // SETTER METHODS
  // Set vocal
  setVocal(value) {
    // Check if value is above threshold
    if (value > vocalThreshold) {
      this.vocal = map(value, 0, 100, 1, vocalSpeed);
    }
    else {
      this.vocal = 1;
    }

    // Set boolean to true
    this.vocalSet = true;
  }

  // Set bass
  setDrum(value) {
    // Check if value is above threshold
    if (value > drumThreshold) {
      this.drum = map(value, 0, 100, 1, drumSpeed);
    }
    else {
      this.drum = 1;
    }

    // Set boolean to true
    this.drumSet = true;
  }

  // Set bass
  setBass(value) {
    // Check if value is above threshold
    if (value > bassThreshold) {
      this.bass = map(value, 0, 100, 1, bassSpeed);
    }
    else {
      this.bass = 1;
    }

    // Set boolean to true
    this.bassSet = true;
  }

  // Set bass
  setOther(value) {
    // Check if value is above threshold
    if (value > otherThreshold) {
      this.other = map(value, 0, 100, 1, otherSpeed);
    }
    else {
      this.other = 1;
    }

    // Set boolean to true
    this.otherSet = true;
  }

  // PATH FUNCTION
  path() {
    // Reset array
    this.points = [];

    // Repeat for number of points
    for (let i = this.startIndex; i <= this.numPoints + this.startIndex; i++) {
      // Declare variables
      let angle = i * this.degrees;
      let r = this.scale * sqrt(i);
      let x = r * cos(angle);
      let y = r * sin(angle);

      // Append points array with vector
      this.points.push(createVector(x, y));
    }
  }

  // MOVE FUNCTION
  move() {
    // Increment step variable
    // Check for booleans set to true
    if (this.vocalSet) {
      this.step += this.vocal;
    }
    if (this.drumSet) {
      this.step += this.drum;
    }
    if (this.bassSet) {
      this.step += this.bass;
    }
    if (this.otherSet) {
      this.step += this.other;
    }
    else {
      this.step++;
    }
    
    // Check if step exceeds total frames
    if (this.step >= this.stepFrames) {
      // Reset step variable
      this.step = 0;

      // Increment target variable
      this.target++;

      // Check if target exceeds points array length
      if (this.target > this.points.length - 2) {
        // Reset target variable
        this.target = 0;
      }
    }
  }

  // SHOW FUNCTION
  show() {
    // Repeat for each point in the points array
    for (let i = 0; i < this.points.length; i++) {
      // Declare the adjusted index based on the starting index
      let currentPointIndex = (i + this.startIndex) % this.points.length;

      // Check if index does not exceed points array length
      if (currentPointIndex < this.points.length - 1) {
        // Check if showLines boolean is true
        if (showLines) {
          // Declare styles
          stroke(255);
          strokeWeight(0.5);
          noFill();

          // Draw line
          line(
            this.points[currentPointIndex].x,
            this.points[currentPointIndex].y,
            this.points[currentPointIndex + 1].x,
            this.points[currentPointIndex + 1].y
          );
        }
      }

      // Check if showPoints boolean is true
      if (showPoints) {
        // Declare styles
        stroke(255);
        strokeWeight(2);
        noFill();

        // Draw ellipse
        ellipse(this.points[currentPointIndex].x, this.points[currentPointIndex].y, 10);
      }
    }

    // Declare variables
    let progress = map(this.step, 0, this.stepFrames, 0, 1);
    let trailVector = p5.Vector.lerp(
      this.points[this.target],
      this.points[(this.target + 1) % this.points.length],
      progress
    );

    // Append trails array from the beginning
    this.trails.unshift(trailVector);

    // Remove last value in the trails array
    this.trails.pop();
    
    // Repeat for all trails of the trails array
    for (const [i, v] of this.trails.entries()) {
      // Declare styles
      noStroke();
      fill(255, 0, 0, map(i, 0, this.trailLength, 200, 50));
      
      // Draw ellipse
      ellipse(v.x, v.y, 16, 16);
    }
  }
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
  if (song.isPlaying() == true) {
    // Declare styles
    fill(0);
    rect(0, -25, 200, 50);
    fill(255);

    // Draw text
    text(nf(counter, 2, 2), 0, 0);
  }
  pop();
}