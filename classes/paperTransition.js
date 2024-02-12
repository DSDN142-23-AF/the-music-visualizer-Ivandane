// PAGE TRANSITION CLASS
class PaperTransition {
  // CONSTRUCTOR FUNCTION
  constructor(
    _image,
    _array
  ) {
    // Pass arguments into their respective variables
    this.image = _image;
    this.array = _array;

    // Create mask graphic
    this.mask = createGraphics(width, height);

    // Declare variables
    this.frameCounter = 0;
    this.previousCounter = 0;
    this.transitionCompleted = false;
  }

  // CALCULATE MASK RADIUS HELPER FUNCTION
  calculateMaskRadius() {
    switch (this.frameCounter) {
      case 0:
        return 35;
      case 1:
        return 70;
      case 2:
        return 180;
      case 3:
        return 260;
      case 4:
        return 350;
      case 5:
        return 460;
      case 6:
        return 720;
      case 7:
        return 820;
      case 8:
        return 930;
      default:
        return 1000;
    }
  }

  // UPDATE FUNCTION
  update() {
    // Set mask radius
    this.maskRadius = this.calculateMaskRadius();

    // Declare mask styles
    this.mask.background(255);
    this.mask.noStroke();
    this.mask.fill(0);
    this.mask.ellipseMode(CENTER);
    this.mask.ellipse(width / 2, height / 2, this.maskRadius);
    this.mask.imageMode(CENTER);

    // Load mask pixels
    this.mask.loadPixels();

    // Repeat for each pixel in mask
    for (let i = 0; i < this.mask.pixels.length; i += 4) {
      // If pixel is black
      if (this.mask.pixels[i] === 0) {
        // Set alpha to 0
        this.mask.pixels[i + 3] = 0;
      }
    }

    // Update mask pixels
    this.mask.updatePixels();

    // Apply mask to image
    this.image.mask(this.mask);
  }

  // SHOW FUNCTION
  show(counter) {
    // If transitionCompleted is false
    if (!this.transitionCompleted) {
      // Declare new counter variable
      let newCounter = floor((counter * 10) % this.array.length);

      // If new counter does not equal previous counter
      if (newCounter !== this.previousCounter) {
        // Increment frame counter
        this.frameCounter++;

        // Set previous counter to new counter value
        this.previousCounter = newCounter;
      }

      // If page has been saved
      if (this.image) {
        // Run update function
        this.update();

        // Draw saved page
        image(this.image, 0 - (width / 2), 0 - (height / 2));
      }

      // Draw image
      image(this.array[this.frameCounter], 0 - (width / 2), 0 - (height / 2));

      // If frame is last in the array
      if (this.frameCounter === this.array.length - 1) {
        // Set transitionCompleted to true
        this.transitionCompleted = true;
      }
    }
  }
}
