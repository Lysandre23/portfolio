class Road {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    render() {
        stroke("#2c3e50");
        strokeWeight(5);
        noFill();
        rect(this.x, this.y, this.w, this.h, 30);
    }
}