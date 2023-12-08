const width = window.innerWidth;
const height = window.innerHeight;

let path;
let start = 0;
let maxPercent = 0;
let speed = 6;

function setup() {
    createCanvas(width, height);
    path = generatePath(8000000, 0.0005);
    angleMode(DEGREES);
}

function draw() {
    background(255);
    renderPath(path, start, start+5000);
    renderBike(path, start, start+5000);
    start += speed;
}

function generatePath(n, dt) {
    let xoff = 0;
    let p = new Array();
    for(let i=0; i<n; i++) {
        let h = noise(xoff)*height;
        p.push({x: i, y: h});
        xoff += dt;
    }
    return p;
}

function renderPath(p, a, b) {
    strokeWeight(3);
    let step = width/(b-a);
    for(let i=0; i<b-a; i++) {
        if(i > 0) {
            //circle(i*step, height-p[i+a].y, 3);
            line(i*step, height-p[i+a].y, (i-1)*step, height-p[i+a-1].y);
        }
    }
}

function renderBike(p, a, b) {
    let delta = b-a;
    let offsetY = 10;
    let length = 35;
    let backWheelX = a+delta/2;
    let frontWheel = {x: null, y: null};

    let backWheel = {x: width/2, y: height-p[backWheelX].y-offsetY};
    let indexClosest = 0;
    let minDist = 10000;
    let precision = 360;
    for(let i=0; i<precision; i++) {
        let x = Math.round(map(width/2+cos(i*360/precision)*length, 0, width, a, a+(b-a)));
        let d = dist(width/2+cos(i*360/precision)*length, height-p[backWheelX].y+sin(i*360/precision)*length, width/2+cos(i*360/precision)*length, height-p[x].y);
        if(d < minDist && x > backWheelX) {
            minDist = d;
            indexClosest = i;
        }
    }
    frontWheel = {x: width/2+cos(indexClosest*360/precision)*length, y: height-p[backWheelX].y-offsetY+sin(indexClosest*360/precision)*length};
    let angle = atan2(frontWheel.y-backWheel.y, frontWheel.x-backWheel.x);
    
    //speed = Math.round(map(angle, -90, 90, 0, 8))
    circle(backWheel.x, backWheel.y, 18);
    circle(frontWheel.x, frontWheel.y, 18);
    
    let point1 = {x: backWheel.x+cos(angle-40)*length/2, y: backWheel.y+sin(angle-40)*length/2};
    line(backWheel.x, backWheel.y, point1.x, point1.y);

    let point2 = {x: backWheel.x+cos(angle)*length/2, y: backWheel.y+sin(angle)*length/2};
    line(backWheel.x, backWheel.y, point2.x, point2.y);

    line(point1.x, point1.y, point2.x, point2.y);

    let point3 = {x: backWheel.x+cos(angle-26)*length, y: backWheel.y+sin(angle-26)*length};
    line(point1.x, point1.y, point3.x, point3.y);
    line(point2.x, point2.y, point3.x, point3.y);
    line(point3.x, point3.y, frontWheel.x, frontWheel.y);

    /* Selle */
    let angle2 = atan2(point1.y-point2.y, point1.x-point2.x);
    let point4 = {x: point1.x+cos(angle2)*length/4, y: point1.y+sin(angle2)*length/4};
    line(point1.x, point1.y, point4.x, point4.y);
    line(point4.x-cos(angle)*length/9, point4.y-sin(angle)*length/8, point4.x+cos(angle)*length/9, point4.y+sin(angle)*length/8)

    // Guidon
    let point5 = {x: point3.x+cos(angle2)*length/6, y: point3.y+sin(angle2)*length/6};
    let point6 = {x: point5.x+cos(angle)*length/7, y: point5.y+sin(angle)*length/7}
    line(point3.x, point3.y, point5.x, point5.y);
    line(point5.x, point5.y, point6.x, point6.y);

    // Curve guidon
    let point7 = {x: point6.x-cos(angle2)*length/11, y: point6.y-sin(angle2)*length/11};
    arc(point7.x, point7.y, length/6, length/6, angle2, angle2+180);
}