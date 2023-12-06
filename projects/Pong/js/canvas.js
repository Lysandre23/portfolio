// CLASS
class Canvas {
   constructor(width,height,parameter) {
      this.width = width;
      this.height = height;
      if(typeof(parameter) == 'undefined') {
         parameter = {isFullScreen:false,color:'black'};
      }
      this.isFullScreen = parameter.isFullScreen;
      this.color = parameter.color;
      try {
         $('body').append("<canvas id='canvas' style='background-color:" + this.color + ";' id='canvas' width='" + this.width + "' height='" + this.height + "'></canvas>");
         this.canvas = document.getElementById('canvas');
         this.ctx = this.canvas.getContext('2d');
         if(this.isFullScreen == true) {  // Gestion du plein écran
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
         }
      }catch(error) {
         console.log("jQuery is not included in your html code");
         console.log('Add this line before your script : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>');
      }
   }

   save() {
      this.ctx.save();
   }

   restore() {
      this.ctx.restore();
   }

   reset() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.rect(0,0,this.width,this.height);
      this.ctx.fill();
   }

   square(x,y,size,parameter) {
      let color;
      let style;
      let lineWidth;
      if(typeof(parameter) == 'undefined') {
         parameter = {};
      }
      color = parameter.color;
      style = parameter.style;
      lineWidth = parameter.lineWidth;
      if(typeof(color) == 'undefined') {
         color = 'white';
      }
      if(typeof(style) == 'undefined') {
         style = 'fill';
      }
      if(typeof(lineWidth) == 'undefined') {
         lineWidth = '1';
      }
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = color;
      this.ctx.rect(x,y,size,size);
      if(style == 'fill') {
         this.ctx.fill();
      }else{
         this.ctx.stroke();
      }
   }

   rect(x,y,xsize,ysize,parameter) {
      if(typeof(parameter) == 'undefined') {
         parameter = {};
      }
      let color = parameter.color;
      let style = parameter.style;
      let lineWidth = parameter.lineWidth;
      if(typeof(color) == 'undefined') {
         color = 'white';
      }
      if(typeof(style) == 'undefined') {
         style = 'fill';
      }
      if(typeof(lineWidth) == 'undefined') {
         lineWidth = '1';
      }
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = color;
      this.ctx.rect(x,y,xsize,ysize);
      if(style == 'fill') {
         this.ctx.fill();
      }else{
         this.ctx.stroke();
      }
   }

   gradient(x1,y1,xsize,ysize,parameter) {
      if(typeof(parameter) == 'undefined') {
         console.log("Error...");
      }else{
         let gradient = this.ctx.createLinearGradient(x1,y1,x1+xsize,y1+ysize);
         for(var color in parameter) {
            gradient.addColorStop(color,parameter[color]);
         }
         this.ctx.fillStyle = gradient;
         this.ctx.fillRect(x1,y1,xsize,ysize);
      }
   }

   circle(x,y,r,parameter) {
      let color;
      let style;
      let lineWidth;
      if(typeof(parameter) == 'undefined') {
         parameter = {};
      }
      color = parameter.color;
      style = parameter.style;
      lineWidth = parameter.lineWidth;
      if(typeof(color) == 'undefined') {
         color = 'white';
      }
      if(typeof(style) == 'undefined') {
         style = 'fill';
      }
      if(typeof(lineWidth) == 'undefined') {
         lineWidth = '1';
      }
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = color;
      this.ctx.arc(x,y,r,0,2*Math.PI);
      if(style == 'fill') {
         this.ctx.fill();
      }else{
         this.ctx.stroke();
      }
   }
}
