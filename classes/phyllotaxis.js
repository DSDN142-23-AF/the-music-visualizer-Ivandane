// PHYLLOTAXIS CLASS
class Phyllotaxis {
  // CONSTRUCTOR FUNCTION
  constructor(
    _imageArray,
    _tintColor,
    _numPoints, 
    _degrees,
    _scale,
    _startingIndex,
    _speed
  ) {
    // Pass arguments into their respective variables
    this.imageArray = _imageArray;
    this.tintColor = _tintColor;
    this.numPoints = _numPoints;
    this.degrees = _degrees;
    this.scale = _scale;
    this.startIndex = _startingIndex;
    this.speed = _speed;

    // Declare array
    this.points = [];

    // Declare variables
    this.step = 0;
    this.target = 0;
    this.stepFrames = this.speed * 60; // 60 FPS
    this.frameSpeed;
    this.otherSet = false;
    this.drawSet = false;
  }

  // SET DRAW METHOD
  setDraw() {
    // Set drawSet to true
    this.drawSet = true;
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
  move(other) {
    // If other is greater than or equal to threshold
    if (other >= otherThreshold) {
      // Map other to 0/otherSpeed
      this.other = map(other, otherThreshold, 100, 0, otherSpeed);
    
      // Increment step by other
      this.step += this.other;

      // If step is greater than or equal to stepFrames
      if (this.step >= this.stepFrames) {
        // Reset step
        this.step = 0;

        // Increment target
        this.target++;

        // If target is greater than length of points array
        if (this.target > this.points.length - 2) {
          // Reset target
          this.target = 0;
        }
      }
    }
  }

  // SHOW FUNCTION
  show(counter) {
    // Repeat for each point in points array
    for (let i = 0; i < this.points.length; i++) {
      // Declare currentPointIndex
      let currentPointIndex = (i + this.startIndex) % this.points.length;

      // If currentPointIndex is less than length of points array
      if (currentPointIndex < this.points.length - 1) {
        // If sowLines is true
        if (showLines) {
          // Declare styles
          stroke(0);
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

      // If showPoints is true
      if (showPoints) {
        // Declare styles
        stroke(0);
        strokeWeight(2);
        noFill();

        // Draw ellipse
        ellipse(this.points[currentPointIndex].x, this.points[currentPointIndex].y, 10);
      }
    }

    // Declare progress mapped to step and 0/1
    let progress = map(this.step, 0, this.stepFrames, 0, 1);

    // Declare currentPoint with vector lerping from current target to future target
    let currentPoint = p5.Vector.lerp(
      this.points[this.target],
      this.points[(this.target + 1) % this.points.length],
      progress
    );

    // If other is greater than or equal to threshold
    if (this.other >= otherThreshold) {
      // Set frameSpeed
      this.frameSpeed = 5;
    }
    
    // If other is below threshold
    else {
      // Set frameSpeed
      this.frameSpeed = 1;
    }

    // Declare frame variable
    let imageFrame = floor(((counter * 10) * this.frameSpeed) % this.imageArray.length);

    // Declare styles
    push();
    tint(this.tintColor);
    imageMode(CENTER);
    
    // If drawSet is false
    if (!this.drawSet) {
      // Draw image
      image(this.imageArray[imageFrame], currentPoint.x, currentPoint.y);
    }

    // If drawSet is true
    else {
      // Run imageDrawAnimation function
      imageDrawAnimation(
        this, // Instance
        this.imageArray[imageFrame], // Frame
        currentPoint.x, // X
        currentPoint.y, // Y
        imageFrame, // Frame
        this.imageArray.length, // Frame length
        10 // Frame rate
      );
    }
    pop();
  }
}