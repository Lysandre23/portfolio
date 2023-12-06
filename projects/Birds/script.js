const width = window.innerWidth,
      height = window.innerHeight,
      nbBirds = 100


var birds = new Array(nbBirds);

function setup() {
    createCanvas(width, height);
    for(var i=0; i<nbBirds; i++) {
        birds[i] = new Bird(0.1*width+random(width*0.8),0.1*height+random(height*0.8));
    }
    fill("white");
    noStroke();
    background(0);
}

function draw() {
    //background(232, 67, 147,90);
    background(0);
    drawG();
    for(var i=0; i<birds.length; i++) {
        birds[i].move(i);
        birds[i].draw();
    }
    

}

function drawG() {
    let g = createVector(0,0);
    for(var i=0; i<birds.length; i++) {
        g.add(birds[i].pos);
    }
    g.div(nbBirds);
    fill("#6c5ce7");
    circle(g.x,g.y,20)
    fill("white");
}