class Ray {
    constructor(alpha) {
        this.alpha = alpha;
    }

    draw(x,y) {
        // ! Cherche les points d'intersection
        let intersectionPoints = [];
        let C = [x,y];
        let D = [x+cos(this.alpha)*3000,y+sin(this.alpha)*3000];
        for(var i=0; i<wall.length; i++) {
            let A = [wall[i][0],wall[i][1]];
            let B = [wall[i][2],wall[i][3]];
            let E = [B[0]-A[0],B[1]-A[1]];
            let F = [D[0]-C[0],D[1]-C[1]];
            let P = [-E[1],E[0]];
            let h = ((A[0]-C[0])*P[0]+(A[1]-C[1])*P[1])/(F[0]*P[0]+F[1]*P[1]);
            if(F[0]*P[0]+F[1]*P[1] == 0) {
                // ! Vecteurs colinéaires -> pas de point d'intersection
            }else{
                if(h > 0 && h < 1) {
                    if(inIntervall(C[0]+F[0]*h,wall[i][0],wall[i][2]) && inIntervall(C[1]+F[1]*h,wall[i][1],wall[i][3])) {
                        intersectionPoints.push([C[0]+F[0]*h,C[1]+F[1]*h]);
                    }
                }
            }
        }
        if(intersectionPoints.length == 0) {
            // ! Aucun point d'intersection
            line(x,y,x+cos(this.alpha)*3000,y+sin(this.alpha)*3000);
        }else{
            let min = 10000;
            let p = [0,0];
            for(var i=0; i<intersectionPoints.length; i++) {
                if(dist(intersectionPoints[i][0],intersectionPoints[i][1],x,y) < min) {
                    min = dist(intersectionPoints[i][0],intersectionPoints[i][1],x,y);
                    p = [intersectionPoints[i][0],intersectionPoints[i][1]];
                }
            }
            line(x,y,p[0],p[1]);
        }
    }
}