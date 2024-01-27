// DECLARE VARIABLES
const fps = 60;
let initialize = true;
let currentTime;
let phyllotaxis = [];

// These variables can be parameterised
let numPoints = 1000;
let degrees = 51; // 137.5;
let scale = 10;
let startingIndex = 500;
let step = 1;
let totalTime = 240; // In seconds
let trailLength = 5; // Length of trail (min. 1)
let showPoints = false;
let showLines = false;

// DRAW ONE FRAME FUNCTION
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // Setup
  if (initialize) {
    // Declare styles
    angleMode(DEGREES);

    // Assign variables with new class
    phyllotaxis[0] = (new Phyllotaxis(
      numPoints,
      degrees,
      scale,
      startingIndex,
      step,
      totalTime,
      trailLength,
      showPoints,
      showLines,
      fps
    ));

    phyllotaxis[1] = (new Phyllotaxis(
      500,
      137.5,
      10,
      250,
      1,
      120,
      trailLength,
      showPoints,
      showLines,
      fps
    ));
    
    // Set boolean to false
    initialize = false;
  }

  // Declare style
  background(0);
  translate(width / 2, height / 2);
  
  // Run Phyllotaxis functions
  if (song.isPlaying()) {
    // Repeat for each class in the array
    for (const phy of phyllotaxis) {
      phy.move();
      phy.update();
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
    _step,
    _totalTime,
    _trailLength,
    _showPoints,
    _showLines,
    _fps
  ) {
    // Declare arrays
    this.points = [];
    this.trails = [];

    // Declare variables
    this.numPoints = _numPoints;
    this.degrees = _degrees;
    this.scale = _scale;
    this.startIndex = _startingIndex;
    this.step = _step;
    this.totalTime = _totalTime;
    this.trailLength = _trailLength;
    this.showPoints = _showPoints;
    this.showLines = _showLines;
    this.fps = _fps;

    this.totalfps = this.totalTime * this.fps;
    this.stepFrames = this.totalfps / (this.numPoints / 10);
    this.timer = 0;
    this.target = 0;

    // Repeat for trail length
    for (let i = 0; i < this.trailLength; i++) {
      // Append array with vector
      this.trails.push(createVector(-100, -100));
    }
  }

  // MOVE FUNCTION
  move() {
    // Reset array
    this.points = [];

    // Repeat for number of points
    for (let i = this.startIndex; i <= this.numPoints + this.startIndex; i += this.step) {
      // Declare variables
      let angle = i * this.degrees;
      let r = this.scale * sqrt(i);
      let x = r * cos(angle);
      let y = r * sin(angle);

      // Append array with vector
      this.points.push(createVector(x, y));
    }
  }

  // UPDATE FUNCTION
  update() {
    // Increment variable
    this.timer += 10;

    // Check if timer exceeds total frames
    if (this.timer >= this.stepFrames) {
      // Reset variable
      this.timer = 0;

      // Increment variable
      this.target++;

      // Check if target exceeds points array length
      if (this.target > this.points.length - 2) {
        // Reset variable
        this.target = 0;
      }
    }
  }

  // SHOW FUNCTION
  show() {
    // Repeat for each point in the array
    for (let i = 0; i < this.points.length; i++) {
      // Declare the adjusted index based on the starting index
      let adjustedIndex = (i + this.startIndex) % this.points.length;

      // Check if index does not exceed points array length
      if (adjustedIndex < this.points.length - 1) {
        // Check if boolean is true
        if (showLines) {
          // Declare styles
          stroke(255);
          strokeWeight(0.5);
          noFill();

          // Draw line
          line(
            this.points[adjustedIndex].x,
            this.points[adjustedIndex].y,
            this.points[adjustedIndex + 1].x,
            this.points[adjustedIndex + 1].y
          );
        }
      }

      // Check if boolean is true
      if (showPoints) {
        // Declare styles
        stroke(255);
        strokeWeight(2);
        noFill();

        // Draw ellipse
        ellipse(this.points[adjustedIndex].x, this.points[adjustedIndex].y, 12, 12);
      }
    }

    // Declare variables
    let progress = map(this.timer, 0, this.stepFrames, 0, 1);
    let trailVector = p5.Vector.lerp(
      this.points[this.target],
      this.points[(this.target + 1) % this.points.length],
      progress
    );

    // Append array at the beginning
    this.trails.unshift(trailVector);

    // Remove last value in the array
    this.trails.pop();

    // Declare style
    noStroke();

    // Repeat for all values of the trails array
    for (const [i, v] of this.trails.entries()) {
      // Declare style
      fill(255, 0, 0, map(i, 0, this.trailLength, 255, 50)); // Adjusts alpha with each iteration
      
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

  // Draw text if song is playing
  if (song.isPlaying() == true) {
    fill(0);
    rect(0, -25, 200, 50);
    fill(255);
    text(nf(counter, 2, 2), 0, 0);
  }
  pop();
}