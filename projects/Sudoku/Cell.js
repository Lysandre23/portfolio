class Cell {
    constructor(x,y) {
        this.active = false;
        this.value = 0;
        this.x = x;
        this.y = y;
    }

    draw() {
        stroke(220);
        strokeWeight(0.5);
        fill((this.active ? 240 : 255));
        rect(this.x*cellSize,this.y*cellSize,cellSize,cellSize);
        fill(150);
        noStroke();
        if(this.value > 0 && this.value < 10) {
            text(this.value,(this.x+0.35)*cellSize,(this.y+1-0.3)*cellSize);
        }
    }

    turnActive() {
        this.active = !this.active;
    }

    mouseOn() {
        
    }
}