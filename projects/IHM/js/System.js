class System {
    constructor() {
        this.carpet = new Carpet(width/2-width*0.17, height*0.63, width*0.34, width*0.34/5);
        this.road = new Road(0.15*width, 0.15*height, 0.7*width, 0.7*height);
        //this.robot = new Robot(0.15*width, 0.5*height, 0.12*height);
        this.piston1 = new Piston(0.4*width, height*0.63-0.07*width, 1);
        this.piston2 = new Piston(0.4*width + 0.05*width + 15, height*0.63-0.07*width, 2);
        this.barrier = new Barrier(0.22*width, 0.25*height);
        this.pistonMag = new Piston(0.67*width, height*0.63-0.14*width, 3);
    }

    render() {
        this.road.render();
        //this.robot.render();
        this.carpet.render();
        this.piston1.render();
        this.piston2.render();
        this.barrier.render();
        this.pistonMag.render();
        // Render Mag
        noFill();
        stroke(150);
        strokeWeight(2);
        circle(0.67*width+25, height*0.63-0.07*width+25, 70);
        this.infoBull();
    }

    isElementClicked() {
        let obj = null;
        if(this.carpet.mouseOn()) obj = 'carpet';
        if(this.piston1.mouseOn()) obj = 'piston1';
        if(this.piston2.mouseOn()) obj = 'piston2';
        if(this.barrier.mouseOn()) obj = 'barrier';
        if(this.pistonMag.mouseOn()) obj = 'pistonMag'
        return obj;
    }

    infoBull() {
        textSize(20);
        stroke(255);
        fill("#209cee");
        if(this.carpet.mouseOn()) text(lang[language]["Conveyor"], mouseX+15, mouseY-15); 
        if(this.piston1.mouseOn()) text(lang[language]["Piston"], mouseX+15, mouseY-15); 
        if(this.piston2.mouseOn()) text(lang[language]["Piston"], mouseX+15, mouseY-15); 
        if(this.barrier.mouseOn()) text(lang[language]["Barrier"], mouseX+15, mouseY-15); 
        if(this.pistonMag.mouseOn()) text("StorePiston", mouseX+15, mouseY-15); 
    }
}