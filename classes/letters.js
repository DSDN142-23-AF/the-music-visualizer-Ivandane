// LETTERS CLASS
class Letters {
  // CONSTRUCTOR FUNCTION
  constructor(
    _string,
    _x,
    _y,
    _size,
     _spacing
  ) {
    // Pass arguments into their respective variables
    this.string = _string;
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.spacing = _spacing;
    
    // Declare arrays
    this.letters = [];
    this.initialX = [];

    // Declare variables
    this.eraseSet = false;
    this.totalWidth = 0;

    // Repeat for length of string
    for (let i = 0; i < this.string.length; i++) {
      // Calculate total width with spacing
      this.totalWidth += textWidth(this.string.charAt(i)) + this.spacing;
    }

    // Declare starting X position
    let startX = this.x - this.totalWidth / 2 + textWidth(this.string.charAt(0)) / 2;

    // Repeat for length of string
    for (let i = 0; i < this.string.length; i++) {
      // Declare variables
      let letter = this.string.charAt(i);
      let letterWidth = textWidth(letter);

      // Create letters objects
      this.letters.push({
        letter: letter,
        x: startX + letterWidth / 2,
        y: 0,
      });

      // Append intitialX with X object
      this.initialX.push({ x: startX + letterWidth / 2});

      // Increment starting X by width of letter and spacing
      startX += letterWidth + this.spacing;
    }
  }

  // SET ERASE METHOD
  setErase() {
    // Set eraseSet to true
    this.eraseSet = true;
  }

  // UPDATE FUNCTION
  update(counter) {
    // Declare frame variable
    let randomFrame = floor((counter * 5) % 6);

    // Repeat for each letter in letters array
    for (let i = 0; i < this.letters.length; i++) {
      // Declare random seed
      let seed = randomFrame + i;

      // Set random seed
      randomSeed(seed);

      // Reset letters X/Y to initial positions
      this.letters[i].x = this.initialX[i].x;
      this.letters[i].y = 0;

      // Increment letters X/Y by random offsets
      this.letters[i].x += random(2);
      this.letters[i].y += random(2);
    }
  }

  // SHOW FUNCTION
  show(counter) {
    // Declare frame variable
    let textFrame = floor((counter * 5) % 5);

    // Create mask graphic
    let textImage = createGraphics(this.totalWidth + (this.totalWidth / 5), this.size * 2);

    // Declare new mask (0, 0) point
    textImage.push();
    textImage.translate(textImage.width / 2, textImage.height / 2);
    
    // Declare mask styles
    textImage.fill(0);
    textImage.textFont(annieFont);
    textImage.textAlign(CENTER);
    textImage.textSize(this.size);

    // Repeat for each letter in letters array
    for (let i = 0; i < this.letters.length; i++) {
      // Declare object variables
      let {
        letter, x, y
      } = this.letters[i];

      // Draw text
      textImage.text(letter, x, y);
    }
    textImage.pop();;

    // Declare image mode
    push();
    imageMode(CENTER);

    // If erase set is false
    if (!this.eraseSet) {
      // Draw image
      image(textImage, this.x, this.y);
    }

    // If erase set is true
    else {
      // Run imageEraseAnimation function
      imageEraseAnimation(
        this, // Instance
        textImage, // Image
        this.x, // X
        this.y, // Y
        textFrame, // Frame
        10, // Frame length
        5 // Frame rate
      );
    }
    pop();
  }
}