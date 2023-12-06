class Cube {
    constructor(x,y,d) {
        this.x = X_ORIGIN+SIDE*(Math.cos(ANGLE)*x-Math.cos(ANGLE)*y);
        this.y = Y_ORIGIN+SIDE*(+Math.sin(ANGLE)*x+Math.sin(ANGLE)*y);
        this.h = MINIMUM_SIZE;
        this.d = d;
    }

    draw() {
        beginShape();
        fill('#55efc4');
        vertex(this.x,this.y+this.h); // A
        vertex(this.x+SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)+this.h); // B
        vertex(this.x+SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)-this.h); //F
        vertex(this.x,this.y-this.h); // E
        endShape(CLOSE);
        beginShape();
        fill('#00b894')
        vertex(this.x,this.y+this.h); // A
        vertex(this.x-SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)+this.h) // D
        vertex(this.x-SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)-this.h) // D
        vertex(this.x,this.y-this.h); // E
        endShape(CLOSE);
        beginShape();
        fill('#ffeaa7');
        vertex(this.x,this.y-this.h); // E
        vertex(this.x+SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)-this.h); //F
        vertex(this.x,this.y+2*SIDE*Math.sin(ANGLE)-this.h) // G
        vertex(this.x-SIDE*Math.cos(ANGLE),this.y+SIDE*Math.sin(ANGLE)-this.h) // H
        endShape(CLOSE);
        //vertex(this.x,this.y-2*SIDE*Math.sin(ANGLE)) // C
        //vertex(this.x-SIDE*Math.cos(ANGLE),this.y-SIDE*Math.sin(ANGLE)) // D
    }

    ondulate(k) {
        this.h = MINIMUM_SIZE+(MAXIMUM_SIZE-MINIMUM_SIZE)*(Math.cos(this.d+k)+1);
    }
}