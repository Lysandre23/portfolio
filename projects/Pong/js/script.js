// Variables principales
var canvas = new Canvas(600,600);
var xplayer = 10;
var yplayer = 275;
var sizeplayer = 80;
var xballe = 300;
var yballe = 300;
var xvitesse = 1;
var yvitesse = 1;
var scoreplayer  = 0;
var scorebot = 0;
var timer = 0;
var newg = false;
var ybot = 520;
var idx = document.URL.indexOf('?');
var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
var branleur = pairs[0].split("=")[1] != "true";
var infinity = true;
var particles = new Array();
var maxLife = 500;

// Fonctions principales

function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener('mousemove', function(e) {
   if(branleur == false) {
      yplayer = e.clientY-sizeplayer/2;
   }
});

function bot() {
   if(infinity == true) {
      ybot = yballe-40;
   }else{
      if(yballe > ybot-40) {
         ybot+=3;
      }
      if(yballe < ybot+40) {
         ybot-=3;
      }
   }
   canvas.rect(580,ybot,10,80,{color:'blue',style:'stroke',lineWidth:'3'});
}

function feignasse() {
   yplayer = yballe-sizeplayer/2;
}

function drawScore() {
   canvas.ctx.font = "50px Arial";
   canvas.ctx.strokeStyle = "orange";
   canvas.ctx.strokeText(scoreplayer,260,45);
   canvas.ctx.fillStyle = "white";
   canvas.ctx.fillText(" | ",293,40);
   canvas.ctx.strokeStyle = "blue";
   canvas.ctx.strokeText(scorebot,340,45);
}

function newGame() {
   if(scorebot < 3 && scoreplayer < 3) {
      for(var i=0; i<50000; i++) {
      }
      xballe = 300;
      yballe = 300;
      if(random(100)<50) {
         xvitesse = 1;
      }else{
         xvitesse = -1;
      }
      if(random(100)<50) {
         yvitesse = 1;
      }else{
         yvitesse = -1;
      }
   }else{
      canvas.ctx.font = "30px Arial";
      canvas.ctx.strokeStyle = "white";
      if(scorebot == 3) {
         canvas.ctx.strokeText("Le robot a gagné",210,290);
      }else{
         canvas.ctx.strokeText("Le joueur a gagné",210,290);
      }
      setTimeout(reset,5000);
   }
}

function reset() {
   scorebot = 0;
   scoreplayer = 0;
   xballe = 300;
   yballe = 300;
   if(random(100)<50) {
      xvitesse = 1;
   }else{
      xvitesse = -1;
   }
   if(random(100)<50) {
      yvitesse = 1;
   }else{
      yvitesse = -1;
   }
}

function addParticles() {
   for(var i=0; i<120; i++) {
      let angle = random(360);
      let xvit = Math.cos(angle*Math.PI/180)/random(10);
      let yvit = Math.sin(angle*Math.PI/180)/random(10);
      let p = [xballe,yballe,xvit,yvit,0];
      particles.push(p);
   }
}

function sillon() {
   let ecartx = random(10)/50;
   let ecarty = random(10)/50;
   particles.push([xballe,yballe,-xvitesse/2+ecartx,-yvitesse/2+ecarty,0]);
}

function main() {
   canvas.reset();
   if(branleur == true) {
      feignasse();
   }
   canvas.rect(xplayer,yplayer,10,sizeplayer,{color:'orange',style:'stroke',lineWidth:'3'}); // Affichage joueur
   // Déplacement de la balle
   if(xballe-10 == 20 || xballe+10 == 580) {
      if(xballe-10 == 20 && yballe > yplayer && yballe < yplayer+80) {
         xvitesse = 1;
      }
      if(xballe+10 == 580 && yballe > ybot && yballe < ybot+80) {
         xvitesse = -1;
      }
      addParticles();
   }

   // Déplacement des particules
   for(var i=0; i<particles.length; i++) {
      particles[i][0] += particles[i][2];
      particles[i][1] += particles[i][3];
      particles[i][4]++;
      if(particles[i][4] == maxLife) {
         particles.splice(i,i);
      }
   }

   // Sillon de la balle
   sillon();

   // Affichage des particules
   for(var i=0; i<particles.length; i++) {
      canvas.circle(particles[i][0],particles[i][1],1,{color:'white'});
   }

   // Sortie  de balle
   if(xballe+10 > 582) {
      scoreplayer+=1;
      newGame();
   }
   if(xballe-10 < 18) {
      scorebot+=1;
      newGame();
   }
   if(yballe-10 == 0) {
      yvitesse = 1;
      addParticles();
   }
   if(yballe+10 == 600) {
      yvitesse = -1;
      addParticles();
   }
   xballe += xvitesse;
   yballe += yvitesse;
   canvas.circle(xballe,yballe,10,{color:'red',style:'stroke',lineWidth:'3'});
   bot();
   // score
   drawScore();
}

setInterval(main,5);
