class Barrier {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 0.04*width;
        this.h = 0.04*width;
        this.open = true;
        this.blocked = false;
    }

    render() {
        strokeWeight(3);
        fill(255);
        stroke(this.blocked == true ? (this.mouseOn() ? "#e74c3c" : "#c0392b") : (this.mouseOn() ? "#209cee" : "#2c3e50"));
        rect(this.x, this.y, this.w, this.h, 2);
        let size = (this.open ? this.w*3 : this.w*0.05);
        line(this.x, this.y+this.h/2, this.x-size, this.y+this.h/2);
    }

    mouseOn() {
        return mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h;
    }
}