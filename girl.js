// GIRL CLASS
class Girl {
  // CONSTRUCTOR FUNCTION
  constructor(
    _heads,
    _facesDefault,
    _facesMove,
    _facesClosed,
    _masksDefault,
    _masksMove
  ) {
    // Pass the arguments into their respective variables
    this.heads = _heads;
    this.facesDefault = _facesDefault;
    this.facesMove = _facesMove;
    this.facesClosed = _facesClosed;
    this.masksDefault = _masksDefault;
    this.masksMove = _masksMove;

    // Declare variables
    this.drumSet = false;
    this.currentFace = 0;
  }

  // SETTER METHODS
  // Set counter
  setCounter(value) {
    this.counter = value;
  }

  // Set drum
  setDrum(value) {
    this.drum = value;
    if (this.drum >= drumThreshold) {
      this.drumSet = true;
    }
    else {
      this.drumSet = false;
    }
  }

  // SHOW HEAD FUNCTION
  showHead() {
    let headsFrame = floor((this.counter * 5) % this.heads.length);

    imageMode(CENTER);

    image(this.heads[headsFrame], 0, 0, 700, 700);
  }

  // SHOW FACE CLOSED FUNCTION
  showFaceClosed() {
    let facesClosedFrame = floor((this.counter * 5) % this.facesClosed.length);

    imageMode(CENTER);

    image(this.facesClosed[facesClosedFrame], 0, 0, 700, 700);
  }

  // SHOW FACE OPEN FUNCTION
  showFaceOpen() {
    let facesFrame = floor((this.counter * 5) % this.facesDefault.length);
    
    imageMode(CENTER);

    if (this.drumSet) {
      if (this.currentFace < this.facesMove.length) {
        image(this.facesMove[facesFrame], 0, 0, 700, 700);
        this.currentFace++;
      }
      else {
        image(this.facesDefault[facesFrame], 0, 0, 700, 700);
      }
    }
    else {
      image(this.facesDefault[facesFrame], 0, 0, 700, 700);
      this.currentFace = 0;
    }
  }

  // SHOW MASK FUNCTION
  showMask() {
    let masksMoveFrame = floor((this.counter * 10) % this.masksMove.length);

    imageMode(CENTER);

    image(this.masksMove[masksMoveFrame], 0, 0, 700, 700);
  }
}