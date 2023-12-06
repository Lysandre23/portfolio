class Bird {
    constructor(x,y) {
        this.pos = createVector(x,y);   
        this.velocity = createVector(random(-5,5),random(-5,5));
        this.desiredVelocity = createVector(0,0);
        this.maxSpeed = 6;
        this.steering = createVector(0,0);
        this.maxSteering = 0.4;
        this.size = 7;
    }

    move(k) {
        /*
            3 règles :
            - fly towards the center of mass (v1)
            - keep a small distance away from others (totalDist)
            - match velocity with near birds (v3)
        */
       let v1temp = createVector(0,0);
       let v3temp = createVector(0,0);
       let totalDist = createVector(0,0);

       let localNeighbors = 0;
       let largeNeighbors = 0;

        for(var i=0; i<birds.length; i++) {
            if(i != k) {
                let detectionDistance = dist(this.pos.x,this.pos.y,birds[i].pos.x,birds[i].pos.y);
                if(detectionDistance < 250) {
                    largeNeighbors++;
                    v1temp.add(birds[i].pos);
                    v3temp.add(birds[i].velocity);
                }
                // LocalNeighbors
                if(detectionDistance < 20) {
                    localNeighbors++;
                    let d = createVector(this.pos.x-birds[i].pos.x,this.pos.y-birds[i].pos.y);
                    totalDist.add(d);
                }
            }
        }
        /*
        if(k == 0) {
            stroke("red")
            noFill();
            circle(this.pos.x,this.pos.y,600)
            fill("white");
            noStroke()
        }
        */

        // Average each vectors
        v1temp.div((largeNeighbors == 0 ? 1 : largeNeighbors));
        totalDist.div((localNeighbors == 0 ? 1 : localNeighbors)).mult(1);
        let v2 = totalDist.div(5); // separation
        v3temp.div(nbBirds-1);
        let v3 = v3temp.sub(this.velocity).div(5); // alignment
        let v1 = v1temp.sub(this.pos).div(50); // cohesion


        // ----------------------- //

        //this.desiredVelocity = v1.add(v2).add(v3).limit(this.maxSpeed);
        //this.steering = this.desiredVelocity.sub(this.velocity).limit(this.maxSteering);
        //this.velocity.add(this.steering).limit(this.maxSpeed);
        this.velocity.add(v1).add(v2).add(v3).limit(this.maxSpeed)
        this.pos.add(this.velocity);
        
        if(this.pos.x < 0) {
            this.pos.x = width;
        }
        if(this.pos.x > width) {
            this.pos.x = 0;
        }
        if(this.pos.y < 0) {
            this.pos.y = height;
        }
        if(this.pos.y > height) {
            this.pos.y = 0;
        }
        
    }

    draw() {
        beginShape();
        vertex(this.pos.x+this.size*1.5*cos(this.velocity.heading()),this.pos.y+this.size*1.5*sin(this.velocity.heading()));
        vertex(this.pos.x+this.size*cos(this.velocity.heading()+radians(140)),this.pos.y+this.size*sin(this.velocity.heading()+radians(140)));
        vertex(this.pos.x+this.size*cos(this.velocity.heading()+radians(220)),this.pos.y+this.size*sin(this.velocity.heading()+radians(220)));
        endShape(CLOSE);
    }
}