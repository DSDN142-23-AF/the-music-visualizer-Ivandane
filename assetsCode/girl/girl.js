// Declare frame (0 to 10, 0 to 5 for eyes)
let frame = 1;

// Declare instance variables
let mask, head, eyes, pupils;

// Declare clearBackground
let clearBackground = true;

// SETUP FUNCTION
function setup() {
  // Create canvas
  createCanvas(300, 300);

  // Declare new (0, 0) point
  translate(width / 2, height / 2);

  // If clearBackground is true
  if (clearBackground) {
    // Set background to fully transparent
    clear();
  }

  // If clearBackground is false
  else {
    // Set background color
    background(170);
  }

  // Create instances (comment out the instances to hide them)
  mask = new p5(maskSketch);
  head = new p5(headSketch);
  eyes = new p5(eyesSketch);
  pupils = new p5(pupilsSketch);
}

// MASK SKETCH INSTANCE
function maskSketch(p) {
  // SETUP FUNCTION
  p.setup = function() {
    // Create canvas
    p.createCanvas(300, 300);

    // Set background color
    p.background(255, 0);

    // Declare new (0, 0) point
    p.translate(p.width / 2, p.height / 2); 

    // Declare styles
    p.stroke(255);
    p.strokeWeight(2.5);
    p.noFill();
    p.scale(0.6);

    // Create scribble instance
    scribble = new Scribble(p);

    // Declare scribble variables
    scribble.bowing = 1;
    scribble.roughness = 1.25;

    // Draw butterfly mask
    // Left side
    p.push();
    p.scale(map(frame, 0, 10, 1, 0.4), 1);
    p.strokeWeight(5);
    scribble.scribbleCurve(0, 8, -230, -165, -50, -150, -200, -175);
    scribble.scribbleCurve(-230, -165, -150, 15, -250, -105, -170, 15);
    scribble.scribbleCurve(-150, 15, 0, 30, -220, 180, -20, 100);

    // Right side
    scribble.scribbleCurve(0, 8, 230, -165, 50, -150, 200, -175);
    scribble.scribbleCurve(230, -165, 150, 15, 250, -105, 170, 15);
    scribble.scribbleCurve(150, 15, 0, 30, 220, 180, 20, 100);
    p.pop();

    // Antenna
    scribble.scribbleCurve(-5, -6, -25, -110, -3, -70, -10, -100);
    scribble.scribbleEllipse(-25, -105, 7.5, 12.5);
    scribble.scribbleCurve(5, -6, 25, -110, 3, -70, 10, -100);
    scribble.scribbleEllipse(25, -105, -7.5, 12.5);

    // Draw patterns
    // Left side
    p.push();
    p.scale(map(frame, 0, 10, 1, 0.4), 1);
    p.strokeWeight(1);
    scribble.scribbleFilling(
      [-100, -150, -180, -200, -210, -230, -232, -228, -180, -130],
      [-125, -130, -120, -100, -70, -110, -130, -167, -160, -145],
      2, p.random(0, 359)
    );
    p.push();
    p.translate(-90, -70);
    p.angleMode(DEGREES);
    p.rotate(-40);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 30, 70);
    p.pop();
    p.push();
    p.translate(-160, -30);
    p.angleMode(DEGREES);
    p.rotate(-20);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 20, 40);
    p.pop();
    p.push();
    p.translate(-120, 80);
    p.angleMode(DEGREES);
    p.rotate(10);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 45, 20);
    p.pop();

    // Right side
    scribble.scribbleFilling(
      [100, 150, 180, 200, 210, 230, 232, 228, 180, 130],
      [-125, -130, -120, -100, -70, -110, -130, -167, -160, -145],
      2, p.random(0, 359)
    );
    p.push();
    p.translate(90, -70);
    p.angleMode(DEGREES);
    p.rotate(40);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 30, 70);
    p.pop();
    p.push();
    p.translate(160, -30);
    p.angleMode(DEGREES);
    p.rotate(20);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 20, 40);
    p.pop();
    p.push();
    p.translate(120, 80);
    p.angleMode(DEGREES);
    p.rotate(-10);
    p.strokeWeight(2);
    scribble.scribbleEllipse(0, 0, 45, 20);
    p.pop();
  }
}

// HEAD SKETCH
function headSketch(p) {
  // SETUP FUNCTION
  p.setup = function() {
    // Create canvas
    p.createCanvas(300, 300);

    // Set background color
    p.background(255, 0);

    // Declare new (0, 0) point
    p.translate(p.width / 2, p.height / 2);

    // Declare styles
    p.stroke(255);
    p.strokeWeight(5);
    p.noFill();
    p.scale(0.6);

    // Create scribble instance
    scribble = new Scribble(p);

    // Declare scribble variables
    scribble.bowing = 1;
    scribble.roughness = 1.25;

    // Draw head
    scribble.scribbleCurve(-100, 65, 70, 100, -80, 135, 40, 135);
    scribble.scribbleCurve(-100, 65, -110, 20, -120, 65, -130, 20);

    // Draw neck
    scribble.scribbleCurve(-25, 125, -75, 185, -15, 185, -65, 175);
    scribble.scribbleCurve(25, 125, 75, 185, 15, 185, 65, 175);

    // Draw hair
    scribble.scribbleCurve(-120, -130, 0, -165, -100, -150, -70, -180);
    scribble.scribbleCurve(120, -130, 0, -165, 100, -150, 70, -180);
    
    scribble.scribbleCurve(-115, 20, 0, -110, -20, -30, -5, -100);
    scribble.scribbleCurve(0, -110, 120, 185, 170, -20, 0, 100);

    scribble.scribbleCurve(-120, -130, -150, 185, -190, -40, -100, 80);
    scribble.scribbleCurve(120, -130, 150, 185, 190, -40, 100, 80);

    // Draw nose
    p.push();
    p.strokeWeight(1.5);
    scribble.scribbleFilling([0, -4, 0, 4], [60, 67, 66, 67], 2, random(0, 359));
    p.pop();

    // Draw mouth
    p.bezier(-10, 100, -8, 99, 8, 99, 10, 100);
  };
}

// EYES SKETCH
function eyesSketch(p) {
  // SETUP FUNCTION
  p.setup = function() {
    // Create canvas
    p.createCanvas(300, 300);

    // Set background color
    p.background(255, 0);

    // Declare new (0, 0) point
    p.translate(p.width / 2, p.height / 2);
    
    // Declare styles
    p.stroke(255);
    p.strokeWeight(2.5);
    p.noFill();
    p.scale(0.6);

    // Create scribble instance
    scribble = new Scribble(p);

    // Declare scribble variables
    scribble.bowing = 1;
    scribble.roughness = 0.75;

    // Draw eyes
    // Left side
    scribble.scribbleCurve(-95, 28, -35, 28, -60, map(frame, 0, 5, 0, 50), -45, map(frame, 0, 5, 10, 40));
    scribble.scribbleCurve(-95, 28, -35, 28, -70, 50, -35, 40);

    // Right side
    scribble.scribbleCurve(95, 28, 35, 28, 60, map(frame, 0, 5, 0, 50), 45, map(frame, 0, 5, 10, 40));
    scribble.scribbleCurve(95, 28, 35, 28, 70, 50, 35, 40);

    // Draw pupils
    p.push();
    p.strokeWeight(1);
    if (frame == 0) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 21, -90, 23, -95, 20, -100, 15);
      p.bezier(-70, 12, -72, 10, -78, 2, -76, 0);
      p.bezier(-53, 11, -51, 8, -50, 0, -52, -2);
      p.bezier(-40, 18, -38, 16, -32, 8, -34, 6);

      p.bezier(88, 21, 90, 23, 95, 20, 100, 15);
      p.bezier(70, 12, 72, 10, 78, 2, 76, 0);
      p.bezier(53, 11, 51, 8, 50, 0, 52, -2);
      p.bezier(40, 18, 38, 16, 32, 8, 34, 6);
      p.pop();
    }
    if (frame == 1) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 24, -90, 24, -95, 21, -100, 18);
      p.bezier(-70, 20, -72, 20, -78, 2, -76, 7);
      p.bezier(-53, 18, -51, 8, -52, 5, -52, 4);
      p.bezier(-40, 23, -38, 16, -33, 14, -34, 9);

      p.bezier(88, 24, 90, 24, 95, 21, 100, 18);
      p.bezier(70, 20, 72, 20, 78, 2, 76, 7);
      p.bezier(53, 18, 51, 8, 52, 5, 52, 4);
      p.bezier(40, 23, 38, 16, 33, 14, 34, 9);
      p.pop();
    }
    if (frame == 2) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 26, -90, 25, -95, 23, -100, 21);
      p.bezier(-70, 25, -72, 22, -78, 19, -80, 14);
      p.bezier(-53, 24, -48, 7, -48, 13, -50, 13);
      p.bezier(-40, 25, -36, 23, -33, 23, -30, 18);

      p.bezier(88, 26, 90, 25, 95, 23, 100, 21);
      p.bezier(70, 25, 72, 22, 78, 19, 80, 14);
      p.bezier(53, 24, 48, 7, 48, 13, 50, 13);
      p.bezier(40, 25, 36, 23, 33, 23, 30, 18);
      p.pop();
    }
    if (frame == 3) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 27, -90, 27, -95, 23, -100, 21);
      p.bezier(-70, 28, -72, 28, -78, 24, -82, 21);
      p.bezier(-53, 28, -48, 24, -48, 26, -46, 21);
      p.bezier(-40, 28, -36, 26, -33, 24, -28, 20);

      p.bezier(88, 27, 90, 27, 95, 23, 100, 21);
      p.bezier(70, 28, 72, 28, 78, 24, 82, 21);
      p.bezier(53, 28, 48, 24, 48, 26, 46, 21);
      p.bezier(40, 28, 36, 26, 33, 24, 28, 20);
      p.pop();
    }
    if (frame == 4) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 31, -90, 28, -95, 32, -102, 32);
      p.bezier(-70, 35, -72, 35, -76, 37, -80, 40);
      p.bezier(-53, 36, -48, 36, -48, 38, -42, 41);
      p.bezier(-40, 32, -36, 28, -33, 30, -26, 32);

      p.bezier(88, 31, 90, 28, 95, 32, 102, 32);
      p.bezier(70, 35, 72, 35, 76, 37, 80, 40);
      p.bezier(53, 36, 48, 36, 48, 38, 42, 41);
      p.bezier(40, 32, 36, 28, 33, 30, 26, 32);
      p.pop();
    }
    if (frame == 5) {
      p.push();
      p.strokeWeight(2);
      p.bezier(-88, 34, -90, 32, -95, 36, -102, 38);
      p.bezier(-70, 40, -72, 39, -76, 41, -80, 46);
      p.bezier(-53, 40, -48, 40, -48, 42, -42, 47);
      p.bezier(-40, 36, -36, 32, -33, 34, -26, 36);

      p.bezier(88, 34, 90, 32, 95, 36, 102, 38);
      p.bezier(70, 40, 72, 39, 76, 41, 80, 46);
      p.bezier(53, 40, 48, 40, 48, 42, 42, 47);
      p.bezier(40, 36, 36, 32, 33, 34, 26, 36);
      p.pop();
    }
    p.pop();
  }
}

// PUPILS SKETCH
function pupilsSketch(p) {
  // SETUP FUNCTION
  p.setup = function() {
    // Create canvas
    p.createCanvas(300, 300);

    // Set background color
    p.background(255, 0);

    // Declare new (0, 0) point
    p.translate(p.width / 2, p.height / 2);
    
    // Declare styles
    p.stroke(255);
    p.strokeWeight(1);
    p.noFill();
    p.scale(0.6);

    // Create scribble instance
    scribble = new Scribble(p);

    // Declare scribble variables
    scribble.bowing = 1;
    scribble.roughness = 0.75;

    // Draw pupils
    if (frame == 0) {
      scribble.scribbleFilling([-42, -40, -42, -55, -70, -75, -73, -58, -50], [18, 27, 35, 39, 38, 27, 15, 12, 14], 2, p.random(0, 359));
      scribble.scribbleFilling([42, 40, 42, 55, 70, 75, 73, 58, 50], [18, 27, 35, 39, 38, 27, 15, 12, 14], 2, p.random(0, 359));
    }
    if (frame == 1) {
      scribble.scribbleFilling([-42, -40, -42, -55, -70, -75, -73, -58, -50, -42], [24, 27, 35, 39, 38, 27, 20, 19, 20, 24], 2, p.random(0, 359));
      scribble.scribbleFilling([42, 40, 42, 55, 70, 75, 73, 58, 50, 42], [24, 27, 35, 39, 38, 27, 20, 19, 20, 24], 2, p.random(0, 359));
    }
    if (frame == 2) {
      scribble.scribbleFilling([-42, -40, -42, -55, -70, -75, -73, -58, -50, -42], [26, 27, 35, 39, 38, 27, 26, 26, 26, 26], 2, p.random(0, 359));
      scribble.scribbleFilling([42, 40, 42, 55, 70, 75, 73, 58, 50, 42], [26, 27, 35, 39, 38, 27, 26, 26, 26, 26], 2, p.random(0, 359));
    }
    if (frame == 3) {
      scribble.scribbleFilling([-42, -40, -42, -55, -70, -75, -73, -58, -50, -40], [34, 34, 35, 39, 38, 34, 31, 31, 31, 31], 2, p.random(0, 359));
      scribble.scribbleFilling([42, 40, 42, 55, 70, 75, 73, 58, 50, 40], [34, 34, 35, 39, 38, 34, 31, 31, 31, 31], 2, p.random(0, 359));
    }
    if (frame == 4) {
      scribble.scribbleFilling([-42, -40, -42, -55, -70, -75, -73, -58, -50, -40], [34, 34, 35, 39, 38, 34, 35, 35, 35, 34], 2, p.random(0, 359));
      scribble.scribbleFilling([42, 40, 42, 55, 70, 75, 73, 58, 50, 40], [34, 34, 35, 39, 38, 34, 35, 35, 35, 34], 2, p.random(0, 359));
    }
  }
}