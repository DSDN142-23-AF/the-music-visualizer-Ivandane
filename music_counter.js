// THESE VARIABLES MUST NOT BE CHANGED
let papersDefault = [];
let papersDefaultShuffled = [];
let papersMove = [];
let phyButterflies = [];
let phyHearts = [];
let flowerObjects = [];
let butterflies = [];
let hearts = [];
let heads = [];
let pupilColors = [];
let pupilsDefault = [];
let pupilsMove = [];
let eyesDefault = [];
let eyesMove = [];
let eyesClosed = [];
let masks = [];
let flowers = [];
let petals = [];

let songTitle, composer, author;
let paper, savedPage, croppedPage;
let pupilColor, randomPupilColor, girl;
let annieFont;
let currentTime;
let initialize = true;
let shuffleSet = true;
let savePageCompleted = false;

// THESE VARIABLES CAN BE CHANGED
let otherSpeed = 50;
let otherThreshold = 60;
let drumThreshold = 75;

let showLines = false;
let showPoints = false;
let showCounter = false;

// DRAW ONE FRAME FUNCTION
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // Initialize
  if (initialize) {
    // Prepare images
    prepareImages();

    // Prepare objects
    prepareObjects();

    // Load font
    annieFont = loadFont('fonts/AnnieUseYourTelescope-Regular.ttf');

    // Set background color
    background(255);

    // Set initialize to false
    initialize = false;
  }

  // Declare new (0, 0) point
  translate(width / 2, height / 2);

  // If song is not playing
  if (!song.isPlaying()) {
    // Set savePageCompleted to false
    savePageCompleted = false;

    // Draw background image
    image(papersDefault[0], 0 - (width / 2), 0 - (height / 2));

    // Create objects
    songTitle = new Letters('butterfly kiss'.toUpperCase(), 0, -50, 50, 15);
    composer = new Letters('Song by Shoji Meguro', 0, 0, 30, 5);
    author = new Letters('Made by Ivan Mangubat, 2024', 0, 325, 30, 5);
    
    // Run object show functions
    songTitle.show();
    composer.show();
    author.show();
  }

  // If song is playing
  else {
    // Declare bgFrame variable
    let bgFrame = floor((counter * 5) % papersDefault.length);

    // If bgFrame is on the first frame, and suffleSet is true
    if (bgFrame === 0 && shuffleSet) {
      // Shuffle papersDefault array
      papersDefaultShuffled = shuffleArray(papersDefault);

      // Set shuffleSet to false
      shuffleSet = false;
    }

    // If bgFrame is not on the first frame
    if (bgFrame !== 0) {
      // Set shuffleSet to true
      shuffleSet = true;
    }
    
    // Draw background image
    image(papersDefaultShuffled[bgFrame], 0 - (width / 2), 0 - (height / 2));

    // Create objects
    songTitle = new Letters('butterfly kiss'.toUpperCase(), 0, -50, 50, 15);
    composer = new Letters('Song by Shoji Meguro', 0, 0, 30, 5);
    author = new Letters('Made by Ivan Mangubat, 2024', 0, 325, 30, 5);

    // Run timed events
    timedEvents(drum, bass, other, counter);
  }

  // If show counter is true
  if (showCounter) {
    // Draw counter
    drawCounter(counter);
  }
}

// PREPARE IMAGES FUNCTION
function prepareImages() {
  // Load papersDefault
  for (let i = 0; i < 5; i++) {
    // Create filename variable
    let filename = 'assets/paper/default/paper_' + nf(i, 2) + '.jpg';

    // Append papersDefault with image
    papersDefault.push(loadImage(filename));
  }

  // Load papersMove
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/paper/move/paper_' + nf(i, 2) + '.png';

    // Append papersMove with image
    papersMove.push(loadImage(filename));
  }

  // Load butterflies
  for (let i = 0; i < 20; i++) {
    // Create filename variable
    let filename = 'assets/butterfly/butterfly_' + nf(i, 2) + '.png';

    // Append butterflies with image
    butterflies.push(loadImage(filename));
  }

  // Load heads
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/head/head_' + nf(i, 2) + '.png';

    // Append heads with image
    heads.push(loadImage(filename));
  }

  // Load pupilsDefault
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/pupils/default/pupils_' + nf(i, 2) + '.png';

    // Append pupilsDefault with image
    pupilsDefault.push(loadImage(filename));
  }

  // Load pupilsMove
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/pupils/move/pupils_' + nf(i, 2) + '.png';

    // Append pupilsMove with image
    pupilsMove.push(loadImage(filename));
  }

  // Load eyesDefault
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/eyes/default/eyes_' + nf(i, 2) + '.png';

    // Append eyesDefault with image
    eyesDefault.push(loadImage(filename));
  }

  // Load eyesMove
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/eyes/move/eyes_' + nf(i, 2) + '.png';

    // Append eyesMove with image
    eyesMove.push(loadImage(filename));
  }

  // Load eyesClosed
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/eyes/closed/eyes_' + nf(i, 2) + '.png';

    // Append eyesClosed with image
    eyesClosed.push(loadImage(filename));
  }

  // Load masks
  for (let i = 0; i < 20; i++) {
    // Create filename variable
    let filename = 'assets/mask/mask_' + nf(i, 2) + '.png';

    // Append array with image
    masks.push(loadImage(filename));
  }

  // Load hearts
  for (let i = 0; i < 10; i++) {
    // Create filename variable
    let filename = 'assets/heart/heart_' + nf(i, 2) + '.png';

    // Append hearts with image
    hearts.push(loadImage(filename));
  }

  // Load flowers
  for (let i = 0; i < 5; i++) {
    // Create filename variable
    let filename = 'assets/flower/flower_' + nf(i, 2) + '.png';

    // Append flowers with image
    flowers.push(loadImage(filename));
  }

  // Load petals
  for (let i = 0; i < 5; i++) {
    // Create filename variable
    let filename = 'assets/petal/petal_' + nf(i, 2) + '.png';

    // Append petals with image
    petals.push(loadImage(filename));
  }
}

// PREPARE OBJECTS FUNCTION
function prepareObjects() {
  // Declare pupil colors
  // Colors: brown, green, blue
  pupilColors = [color(100, 45, 0, 200), color(30, 100, 0, 200), color(0, 65, 190, 200)];

  // Randomise pupil color
  randomPupilColor = floor(random(pupilColors.length));
  pupilColor = pupilColors[randomPupilColor];
  
  // Create girl object
  girl = new Girl(
    heads, // Heads image array
    pupilColor, // Pupil color
    pupilsDefault, // Pupils default image array
    pupilsMove, // Pupils move image array
    eyesDefault, // Eyes default image array
    eyesMove, // Eyes move image array
    eyesClosed, // Eyes closed image array
    masks // Masks image array
  );

  // Create butterflies objects
  for (let i = 0; i < 7; i++) {
    phyButterflies.push(new Phyllotaxis(
      butterflies, // Image array
      color(0, 0, 255, 200), // Color
      500, // Number of points
      51, // Degrees
      6.5, // Scale
      1000 + i, // Starting index
      10 // Speed
    )); 
  }

  // Create hearts objects
  for (let i = 0; i < 7; i++) {
    phyHearts.push(new Phyllotaxis(
      hearts, // Image array
      color(255, 0, 0, 200), // Color
      1000, // Number of points
      137.5, // Degrees
      2, // Scale
      20000 + (i * 3), // Starting index
      20 // Speed
    ));
  }

  // Create flowers objects
  flowerObjects.push(new Flower(
    flowers,
    petals,
    -150,
    -300
  ));
  flowerObjects.push(new Flower(
    flowers,
    petals,
    150,
    -300
  ));
  flowerObjects.push(new Flower(
    flowers,
    petals,
    -150,
    300
  ));
  flowerObjects.push(new Flower(
    flowers,
    petals,
    150,
    300
  ));
}

// TIMED EVENTS FUNCTION
function timedEvents(drum, bass, other, counter) {
  // Title Cover
  if (counter < 3.4) {
    songTitle.update(counter);
    songTitle.show(counter);
    
    composer.update(counter);
    composer.show(counter);

    author.update(counter);
    author.show(counter);
  }
  if (counter >= 3.4 && counter < 5.4) {
    songTitle.update(counter);
    songTitle.setErase();
    songTitle.show(counter);
    
    composer.update(counter);
    composer.setErase();
    composer.show(counter);

    author.update(counter);
    author.setErase();
    author.show(counter);
  }

  // Girl Functions
  if (counter >= 5.4 && counter < 6.4) {
    girl.setDraw();
  }
  if (counter >= 5.4) {
    girl.showHead(counter);
  }
  if (counter >= 5.4 && counter < 40.1) {
    girl.showEyesClosed(counter);
  }
  if (counter >= 40.1 && counter < 70.4) {
    girl.showEyesOpen(drum, counter);
    girl.showMask(counter);
  }
  if (counter >= 70.4 && counter < 130.4) {
    girl.showEyesOpen(drum, counter);
  }
  if (counter >= 130.4) {
    girl.showEyesClosed(drum, counter);
  }

  // Phyllotaxis Functions
  if (counter >= 18 && counter < 19) {
    for (const phy of phyButterflies) {
      phy.setDraw();
    }
  }
  if (counter >= 18 && counter < 40.1) {
    for (const phy of phyButterflies) {
      phy.path();
      phy.show(counter);
    }
  }
  if (counter >= 20 && counter < 40.1) {
    for (const phy of phyButterflies) {
      phy.move(other);
    }
  }
  if (counter >= 40.1 && counter < 70.4) {
    otherSpeed = 60;
    otherThreshold = 75;

    for (const phy of phyHearts) {
      phy.path();
      phy.show(counter);
      phy.move(other);
    }
  }
  if (counter >= 70.4) {
    otherSpeed = 50;
    otherThreshold = 60;

    for (const phy of phyButterflies) {
      phy.path();
      phy.show(counter);
      phy.move(other);
    }
  }

  // Flower Functions
  if (counter >= 10.4 && counter < 40.1) {
    for (const flower of flowerObjects) {
      flower.setChorus(false);
      flower.setTintColor(bass);
      flower.setRotate(bass);
      flower.setScale(bass);
      flower.show(counter);
    }
  }
  if (counter >= 40.1 && counter < 70.4) {
    for (const flower of flowerObjects) {
      flower.setChorus(true);
      flower.setTintColor(bass);
      flower.setRotate(bass);
      flower.setScale(bass);
      flower.show(counter);
    }
  }
  if (counter >= 70.4) {
    for (const flower of flowerObjects) {
      flower.setChorus(false);
      flower.setTintColor(drum);
      flower.setRotate(bass);
      flower.setScale(bass);
      flower.show(counter);
    }
  }

  // Transition Functions
  if (counter >= 40 && counter < 42) {
    if (!savePageCompleted) {
      savedPage = get();

      croppedPage = new PaperTransition(savedPage, papersMove);

      savePageCompleted = true;
    }

    if (croppedPage) {
      croppedPage.update();
      croppedPage.show(counter);
    }
  }
  if (counter >= 42 && counter < 43) {
    savePageCompleted = false;
  }
  if (counter >= 70.3 && counter < 72.3) {
    if (!savePageCompleted) {
      savedPage = get();

      croppedPage = new PaperTransition(savedPage, papersMove);

      savePageCompleted = true;
    }

    if (croppedPage) {
      croppedPage.update();
      croppedPage.show(counter);
    }
  }
}

// IMAGE DRAW ANIMATION FUNCTION
function imageDrawAnimation(instance, img, x, y, frame, frameLength, frameRate) {
  // If song is playing, and instance's drawSet is true
  if (song.isPlaying() && instance.drawSet) {
    // Create new counter for this function
    let drawCounter = newCounter('drawAnimation', frame, frameLength, frameRate);

    // Create mask graphics
    let mask = createGraphics(img.width, img.height);

    // Map masks X/Y to drawCounter and image width/height
    let maskX = map(drawCounter, 0, frameLength, img.width, img.width * 3);
    let maskY = map(drawCounter, 0, frameLength, img.height, img.height * 3);

    // Get current image to be masked
    let maskedImg = img.get();

    // Declare mask styles
    mask.noStroke();
    mask.fill(0);

    // Draw shape
    mask.beginShape();
    mask.vertex(0 - img.width, 0 - img.height);
    mask.vertex(maskX, 0 - img.height);
    mask.vertex(0 - img.width, maskY);
    mask.endShape(CLOSE);

    // Apply mask to image
    maskedImg.mask(mask);

    // Draw masked image
    image(maskedImg, x, y);

    // If drawCounter is on the last frame
    if (drawCounter === frameLength - 1) {
      // Set instance's drawSet to false
      instance.drawSet = false;

      // Exit function
      return;
    }
  }
}

// IMAGE ERASE ANIMATION FUNCTION
function imageEraseAnimation(instance, img, x, y, frame, frameLength, frameRate) {
  // If song is playing, and instance's eraseSet is true
  if (song.isPlaying() && instance.eraseSet) {
    // Create new counter for this function
    let eraseCounter = newCounter('eraseAnimation', frame, frameLength, frameRate);
    
    // Create mask graphics
    let mask = createGraphics(img.width, img.height);

    // Map mask X/Y to eraseCounter and image width/height
    let maskX = map(eraseCounter, 0, frameLength, 0 - (img.width * 2), 0);
    let maskY = map(eraseCounter, 0, frameLength, 0 - (img.height * 2), 0);
    
    // Get current image to be masked
    let maskedImg = img.get();

    // Declare mask styles
    mask.noStroke();
    mask.fill(0);

    // Draw shape
    mask.beginShape();
    mask.vertex(img.width * 2, img.height * 2);
    mask.vertex(maskX, img.height * 2);
    mask.vertex(img.width * 2, maskY);
    mask.endShape(CLOSE);

    // Apply mask to image
    maskedImg.mask(mask);

    // Draw masked image
    image(maskedImg, x, y);

    // If eraseCounter is on the last frame
    if (eraseCounter === frameLength - 1) {
      // Set instance's eraseSet to false
      instance.eraseSet = false;

      // Exit function
      return;
    }
  }
}

// SHUFFLE ARRAY FUNCTION
function shuffleArray(array) {
  // Repeat for length of array
  for (let i = array.length - 1; i > 0; i--) {
    // Declare random variable
    const j = floor(random() * (i + 1));

    // Swap array indexes
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Return array
  return array;
}

// SHOW COUNTER FUNCTION
function drawCounter(counter) {
  // Declare new (0, 0) point
  push();
  translate(0, (height / 2) - 20);

  // Declare styles
  noStroke();
  fill(0);
  textFont('Arial');
  textAlign(CENTER);
  textSize(30);

  // If song is playing
  if (song.isPlaying()) {
    // Draw text
    text(nf(counter, 2, 2), 0, 0);
  }
  pop();
}

// NEW COUNTER FUNCTION
const newCounter = (function () {
  // Declare object for different instances
  const counters = {};

  // Function
  return function (identifier, oldCounter, oldCounterLength, frameRate) {
    // If identifier is not in counters object
    if (!counters[identifier]) {
      // Declare identifier variables
      counters[identifier] = {
        previousCounter: 0,
        thisCounter: 0,
      };
    }

    // Create new counter for this function
    let newThisCounter = floor((oldCounter * frameRate) % oldCounterLength);

    // If new counter does not equal previous counter
    if (newThisCounter !== counters[identifier].previousCounter) {
      // Increment counter
      counters[identifier].thisCounter++;

      // Set previous counter to new counter value
      counters[identifier].previousCounter = newThisCounter;

      // Return counter
      return counters[identifier].thisCounter;
    }

    // Return counter
    return counters[identifier].thisCounter;
  };
})();