const WIDTH = window.innerWidth-15;
const HEIGHT = window.innerHeight-20;
const RAY_NUMBER = 1000;
var ray = [];
var wall = [[100,0,101,501],[101,501,250,500],[250,500,500,250],[500,250,800,251],[800,251,801,600]];

function setup() {
    createCanvas(WIDTH,HEIGHT);
    stroke(255);
    strokeWeight(1);
    noFill();
    // TODO : Création des Ray
    for(var i=0; i<RAY_NUMBER; i++) {
        ray.push(new Ray(i*2*Math.PI/RAY_NUMBER+0.1));
    }
}

function draw() {
    background(0);
    l = ray.length;
    x = mouseX;
    y = mouseY;
    stroke(255,0,0);
    strokeWeight(3);
    for(var i=0; i<wall.length; i++) {
        line(wall[i][0],wall[i][1],wall[i][2],wall[i][3]);
    }
    stroke(250,250,0);
    strokeWeight(1);
    for(var i=0; i<l; i++) {
        ray[i].draw(x,y)
    }
}

function inIntervall(n,b1,b2) {
    if(b1 > b2) {
        if(n > b2 && n < b1) {
            return true;
        }else{
            return false;
        }
    }else{
        if(n > b1 && n < b2) {
            return true;
        }else{
            return false;
        }
    }
}