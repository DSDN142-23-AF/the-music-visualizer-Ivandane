// GIRL CLASS
class Girl {
  // CONSTRUCTOR FUNCTION
  constructor(
    _heads,
    _pupilColor,
    _pupilsDefault,
    _pupilsMove,
    _eyesDefault,
    _eyesMove,
    _eyesClosed,
    _masks
  ) {
    // Pass arguments into their respective variables
    this.heads = _heads;
    this.pupilColor = _pupilColor;
    this.pupilsDefault = _pupilsDefault;
    this.pupilsMove = _pupilsMove;
    this.eyesDefault = _eyesDefault;
    this.eyesMove = _eyesMove;
    this.eyesClosed = _eyesClosed;
    this.masks = _masks;

    // Declare variables
    this.currentEyes = 0;
    this.drawSet = false;
  }

  // SET DRAW METHOD
  setDraw() {
    // Set drawSet to true
    this.drawSet = true;
  }

  // SHOW HEAD FUNCTION
  showHead(counter) {
    // Declare frame variable
    let headsFrame = floor((counter * 5) % this.heads.length);

    // Declare styles
    push();
    tint(0, 200);
    imageMode(CENTER);

    // If draw set is not true
    if (!this.drawSet) {
      // Draw image
      image(this.heads[headsFrame], 0, 0);
    }

    // If draw set is true
    else {
      // Run imageDrawAnimation function
      imageDrawAnimation(
        this, // Instance
        this.heads[headsFrame], // Image
        0, // X
        0, // Y
        headsFrame, // Frame
        this.heads.length, // Frame length
        5 // Frame rate
      );
    }
    pop();
  }

  // SHOW EYES CLOSED FUNCTION
  showEyesClosed(counter) {
    // Declare frame variable
    let eyesClosedFrame = floor((counter * 5) % this.eyesClosed.length);

    // Declare styles
    push();
    tint(0, 200);
    imageMode(CENTER);

    // If draw set is false
    if (!this.drawSet) {
      // Draw image
      image(this.eyesClosed[eyesClosedFrame], 0, 0);
    }

    // If draw set is true
    else {
      // Run imageDrawAnimation function
      imageDrawAnimation(
        this, // Instance
        this.eyesClosed[eyesClosedFrame], // Image
        0, // X
        0, // Y
        eyesClosedFrame, // Frame
        this.eyesClosed.length, // Frame length
        5 // Frame rate
      );
    }
    pop();
  }

  // SHOW EYES OPEN FUNCTION
  showEyesOpen(drum, counter) {
    // Declare frame variable
    let eyesFrame = floor((counter * 5) % this.eyesDefault.length);
    
    // Declare styles
    push();
    tint(0, 200);
    imageMode(CENTER);

    // If drum is above threshold
    if (drum >= drumThreshold) {
      // If current eyes is not the last image in the array
      if (this.currentEyes < this.eyesMove.length) {
        // Declare tint color
        push();
        tint(this.pupilColor);

        // Draw images
        image(this.pupilsMove[eyesFrame], 0, 0);
        pop();
        image(this.eyesMove[eyesFrame], 0, 0);

        // Increment current eyes
        this.currentEyes++;
      }

      // If current face is the last face in the array
      else {
        // Declare tint color
        push();
        tint(this.pupilColor);

        // Draw images
        image(this.pupilsDefault[eyesFrame], 0, 0);
        pop();
        image(this.eyesDefault[eyesFrame], 0, 0);
      }
    }
    
    // If drums is below threshold
    else {
      // Declare tint color
      push();
      tint(this.pupilColor);

      // Draw images
      image(this.pupilsDefault[eyesFrame], 0, 0);
      pop();
      image(this.eyesDefault[eyesFrame], 0, 0);

      // Reset current eyes
      this.currentEyes = 0;
    }
    pop();
  }

  // SHOW MASK FUNCTION
  showMask(counter) {
    // Declare frame variable
    let masksFrame = floor((counter * 10) % this.masks.length);

    // Declare styles
    push();
    tint(0, 200);
    imageMode(CENTER);
    
    // Draw image
    image(this.masks[masksFrame], 0, 0);
    pop();
  }
}
