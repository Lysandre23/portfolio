class Piston {
    constructor(x,y,n) {
        this.x = x;
        this.y = y;
        this.w = 0.05*width;
        this.h = 0.05*width;
        this.n = n;
        this.activated = false;
        this.blocked = false;
    }

    render() {
        strokeWeight(3);
        fill(255);
        stroke(this.blocked == true ? (this.mouseOn() ? "#e74c3c" : "#c0392b") : (this.mouseOn() ? "#209cee" : "#2c3e50"));
        rect(this.x, this.y, this.w, this.h, 2);
        let n = (this.activated ? this.w*1.5 : 5);
        line(this.x+this.w/2, this.y+this.h, this.x+this.w/2, this.y+this.h+n);
        line(this.x, this.y+this.h+n, this.x+this.w, this.y+this.h+n);
    }

    mouseOn() {
        return mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h;
    }
}