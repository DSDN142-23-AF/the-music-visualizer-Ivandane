// PHYLLOTAXIS CLASS
class Phyllotaxis {
  // CONSTRUCTOR FUNCTION
  constructor(
    _imageArray,
    _numPoints, 
    _degrees,
    _scale,
    _startingIndex,
    _speed,
    _trailLength,
    _showPoints,
    _showLines
  ) {
    // Pass the arguments into their respective variables
    this.imageArray = _imageArray;
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
  // Set counter
  setCounter(value) {
    this.counter = value;
  }

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

  // Set drum
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

  // Set other
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
    // Check for booleans set to true
    if (this.vocalSet) {
      // Increment step variable
      this.step += this.vocal;

      // Reset the boolean
      this.vocalSet = false;
    }
    else if (this.drumSet) {
      // Increment step variable
      this.step += this.drum;

      // Reset the boolean
      this.drumSet = false;
    }
    else if (this.bassSet) {
      // Increment step variable
      this.step += this.bass;

      // Reset the boolean
      this.bassSet = false;
    }
    else if (this.otherSet) {
      // Increment step variable
      this.step += this.other;

      // Reset the boolean
      this.otherSet = false;
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

    // Declare variables

    let frameSpeed;
    if (this.other > otherThreshold) {
      frameSpeed = 5;
    }
    else {
      frameSpeed = 1;
    }
    this.frame = floor((this.counter * 15 * frameSpeed) % this.imageArray.length);
    // console.log(frameSpeed);

    // Set style
    imageMode(CENTER);

    // Repeat for all trails of the trails array
    for (const [i, v] of this.trails.entries()) {
      // Draw image sequence
      image(this.imageArray[this.frame], v.x, v.y, 150, 150);
    }
  }
}