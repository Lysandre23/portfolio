const WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight,
      SIDE = 17,
      X_ORIGIN = WIDTH/2,
      Y_ORIGIN = HEIGHT/2,
      ANGLE = 35,
      MINIMUM_SIZE = 5,
      MAXIMUM_SIZE = 50,
      NUMBER_SQUARE = 8,
      INCREMENT_ALPHA = 1;

var cube = [
    
];

var t = 0;

function setup() {
    createCanvas(WIDTH,HEIGHT);
    angleMode(DEGREES);
    noStroke();
    initCube();
}

function draw() {
    background(255);
    for(var i=0; i<cube.length; i++) {
        cube[i].draw();
        cube[i].ondulate(t);
    }
    t += 0.05;
}

function initCube() {
    for(var i=NUMBER_SQUARE; i>-NUMBER_SQUARE; i--) {
        for(var j=NUMBER_SQUARE; j>-NUMBER_SQUARE; j--) {
            cube.push(new Cube(i,j,dist(0,0,i,j)));
        }
    }
}