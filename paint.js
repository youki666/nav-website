var canvas = document.getElementById('canvas');
  setSize();
 var context = canvas.getContext('2d');
  var lineWidth = 3;
  thin.onclick = function(){
  	lineWidth = 3;
  }
    thick.onclick = function(){
  	lineWidth = 5;
  }
window.onresize = function(){
   setSize();
}
function setSize(){
	var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height= pageHeight;
}
/********************************/

var painting = false;
var lastPoint = {x:undefined, y:undefined}
if(document.body.ontouchstart !== undefined){//触屏设备
	canvas.ontouchstart = function(e) {
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;
		if(Erasering){
         context.clearRect(x-5,y-5,10,10)
	    }else{ 
         painting = true;
         lastPoint= {'x':x,'y':y}
	   }
		console.log(x,y);
	}
		canvas.ontouchmove = function(e) {
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;
		 if(Erasering){
    	context.clearRect(x-5,y-5,10,10)
      }else{
         if(painting){
       var newPoint = {"x":x,"y":y}
        drawCircle(x,y,1);
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint;
      }
     }
	}
	 canvas.ontouchend = function() {
	painting = false;
}
}
 canvas.onmousedown = function(e){
	var x = e.clientX;
   var y = e.clientY;
	if(Erasering){
    context.clearRect(x-5,y-5,10,10)
	}else{
     painting = true;
     lastPoint= {'x':x,'y':y}
	}
  
};

 canvas.onmousemove = function(e){
    	var x = e.clientX;
        var y = e.clientY;
    if(Erasering){
    	context.clearRect(x-5,y-5,10,10)
    }else{
      if(painting){
       var newPoint = {"x":x,"y":y}
        drawCircle(x,y,1);
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint;
    }
    }
};

 canvas.onmouseup = function() {
	painting = false;
}
function drawCircle(x,y,radius){
	context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2);
    context.fill();
}
function drawLine(x1,y1,x2,y2) {
	context.beginPath();
	context.moveTo(x1,y1);//start
	context.lineWidth = lineWidth;
	context.lineTo(x2,y2)//end
	context.stroke();
	context.closePath();
}

/********************************/
var Erasering = false;
pen.onclick = function(){
	Erasering = false;
	pen.classList.add('active');
	eraser.classList.remove('active');
}
eraser.onclick = function(){
	Erasering = true;
	eraser.classList.add('active');
	pen.classList.remove('active');
	context.fillStyle = '#111';
  	context.strokeStyle = '#111';
}
clear.onclick = function(){//clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
}
save.onclick = function (){
	/*the first method to download*/        
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  
        // here is the most important part because if you dont replace you will get a DOM 18 exception.
        window.location.href=image; // it will save locally
            
   /*the second method to download*/         
/*       var img = canvas.toDataURL('image/png');
       var a = document.createElement('a');
       document.body.appendChild(a);
       a.href = img;
       a.download = 'img';
       a.target = "_blank";
       a.click();*/
}
  red.onclick = function () {
  	context.fillStyle = 'red';
  	context.strokeStyle = 'red';
  	red.classList.add('active');
  	green.classList.remove('active');
  	blue.classList.remove('active');
  }
  green.onclick = function () {
  	context.fillStyle = 'green';
  	context.strokeStyle = 'green';
  	green.classList.add('active');
  	red.classList.remove('active');
  	blue.classList.remove('active');
  }
    blue.onclick = function () {
  	context.fillStyle = 'blue';
  	context.strokeStyle = 'blue';
  	blue.classList.add('active');
  	green.classList.remove('active');
  	red.classList.remove('active');
  }