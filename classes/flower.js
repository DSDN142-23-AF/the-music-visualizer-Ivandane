// FLOWER CLASS
class Flower {
  // CONSTRUCTOR FUNCTION
  constructor(
    _flowers,
    _petals,
    _x,
    _y
  ) {
    // Pass arguments into their respective variables
    this.flowers = _flowers;
    this.petals = _petals;
    this.x = _x;
    this.y = _y;

    // Declare variables
    this.tintColor = 0;
    this.rotate = 0;
    this.scale = 1;
    this.chorus = false;
  }

  // SET CHORUS METHOD
  setChorus(value) {
    // Set chorus to value (true/false)
    this.chorus = value;
  }

  // SET TINT COLOR METHOD
  setTintColor(value) {
    // If chorus is false
    if (!this.chorus) {
      // Map tint color to value and 0/360
      this.tintColor = map(value, 0, 100, 0, 360);
    }

    // If chorus is true
    else {
      // Map tint color to value and 170/240
      this.tintColor = map(value, 0, 100, 170, 240);
    }
    
  }

  // SET ROTATE METHOD
  setRotate(value) {
    // Map rotate to value and 0/359
    this.rotate = map(value, 0, 100, 0, 359);
  }

  // SET SCALE METHOD
  setScale(value) {
    // If chorus is false
    if (!this.chorus) {
      // Map scale to value and 1/1.5
      this.scale = map(value, 0, 100, 1, 1.5);
    }

    // If chorus is true
    else {
      // Map scale to value and 1.5/1.75
      this.scale = map(value, 0, 100, 1.5, 1.75);
    }
    
  }

  // SHOW FUNCTION
  show(counter) {
    // Declare frame variable
    let flowerFrame = floor((counter * 5) % this.flowers.length);
    
    // Declare new (0, 0) point
    push();
    translate(this.x, this.y);

    // Declare styles
    scale(this.scale);
    rotate(this.rotate);
    imageMode(CENTER);

    // Set tint color
    push();
    colorMode(HSB, 360);
    tint(this.tintColor, 360, 360, 300);

    // Draw image
    image(this.petals[flowerFrame], 0, 0);
    pop();

    // Set tint color
    push();
    tint(0, 200);

    // Draw image
    image(this.flowers[flowerFrame], 0, 0);
    pop();
    pop();
  }
}