class Carpet {
    constructor(x, y, w, h) {
        this.time = 0;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.running = true;
        this.blocked = false;
    }

    render() {
        noFill();
        stroke(this.blocked == true ? (this.mouseOn() ? "#e74c3c" : "#c0392b") : (this.mouseOn() ? "#209cee" : "#2c3e50"));
        strokeWeight(2);
        rect(this.x, this.y, this.w, this.h, 5);
        
        if(this.running && !this.blocked) {
            this.time += 2;
            if(this.time >= this.w * 0.8) this.time = 0;
            let opacity = 100;
            if(this.x+this.w*0.9-this.time > this.x+this.w/2) {
                opacity = map(this.x+this.w*0.9-this.time, this.x+this.w*0.9, this.x+this.w/2, 100, 255);
            }else{
                opacity = map(this.x+this.w*0.9-this.time, this.x+this.w*0.1, this.x+this.w/2, 100, 255);
            }
            stroke(32, 156, 238, opacity);
            line(this.x+this.w*0.9-this.time, this.y+this.h/2, this.x+this.w*0.9-this.time + Math.cos(Math.PI/4)*0.4*this.h, this.y+this.h/2 + Math.sin(Math.PI/4)*0.4*this.h);
            line(this.x+this.w*0.9-this.time, this.y+this.h/2, this.x+this.w*0.9-this.time + Math.cos(Math.PI/4)*0.4*this.h, this.y+this.h/2 - Math.sin(Math.PI/4)*0.4*this.h);
        }
    }

    enable() {
        this.running = true;
    }
    disable() {
        this.running = false;
    }

    mouseOn() {
        return mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h;
    }
}