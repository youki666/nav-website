var canvas = document.getElementById('canvas');
  setSize();
 var context = canvas.getContext('2d');
 context.fillStyle = '#111';
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
if(document.body.ontouchstart !== undefined){
	//触屏设备
	
	canvas.ontouchstart = function(e){
	console.log('start');
	var x = e.clientX;
   var y = e.clientY;
	if(Erasering){
    context.clearRect(x-5,y-5,10,10)
	}else{
     painting = true;
     lastPoint= {'x':x,'y':y}
	}
  
}
canvas.ontouchmove = function() {
	console.log('moving');
}
 canvas.ontouchend = function(){
 	console.log('end');
 }
}else {

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
	context.lineWidth = 5;
	context.lineTo(x2,y2)//end
	context.stroke();
	context.closePath();
}
/********************************/
var Erasering = false;
document.getElementById('eraser')
eraser.onclick = function(){
	Erasering = !Erasering;
	if(Erasering){
	  eraser.textContent = 'eraser'
	}else{
		eraser.textContent = 'pencil'
	}
}
