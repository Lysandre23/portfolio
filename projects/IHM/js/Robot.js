class Robot {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    render() {
        fill("white");
        strokeWeight(5);
        stroke(this.mouseOn() ? "#209cee" : "#2c3e50");
        circle(this.x, this.y, this.radius*2);
    }

    mouseOn() {
        return dist(mouseX, mouseY, this.x, this.y) < this.radius;
    }
}