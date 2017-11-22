var state = 'Today';
function myfunction(){
	document.getElementById("button").innerHTML = "Today, the amount of people that will lose DACA is 6% of the content sent everyday on Snapchat.";
	state = 'Today'
}




function greenfunction(){
	document.getElementById("button").innerHTML = "In 2018, the number of people who will lose DACA is about equal to the number of teachers employed in California.";
	state = '2018'
}


function bluefunction(){
	document.getElementById("button").innerHTML = "In 2019, the number of people who will have lost DACA is about the number of Apple computers sold in a month,";
	state = '2019'

}

var scaleValue = 1;
var canvasMax = 360;

function setup() {
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var myCanvas = createCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
  myCanvas.parent('canvasContainer');
}


function draw() {
  push();
  scale(scaleValue);
  background('#ffffff');
  

  var count = 0;
  while(count <= 300){
  	count = count + 30;
  	fill(255,0,0);

  	if(state == 'Today'){
	  	if(count <150){
	  		fill(0,255,0);
	  	}
	 }else if(state == '2017'){
	 	if(count <50){
	  		fill(0,255,0);
	  	}
	 }
  	ellipse(count, 50, 25,25);
  	ellipse(count, 80, 25,25);
  	ellipse(count, 110, 25,25);
  	ellipse(count, 140, 25,25);
  	if(state == 'Today'){
	  	if(count < 180){
	  		fill(0,255,0);
	  	}
  	}
  	fill(255,0,0);

  	ellipse(count, 170, 25,25);
  	ellipse(count, 200, 25,25);
  	ellipse(count, 230, 25,25);
  	ellipse(count, 260, 25,25);

  }
  
  

  pop();
}


function orangefunction(){
	document.getElementById("button").innerHTML = "In 2017, the amount of people at risk of losing DACA is close to the amount of minutes in a year.";
	state = '2017'

}

function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var cHeight = document.getElementById('canvasContainer').offsetHeight;
  scaleValue = min(canvasMax,cWidth)/canvasMax;
  resizeCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
}[]