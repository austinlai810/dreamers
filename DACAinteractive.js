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
  

  var countX = 0;
  var countY = 0;
  var index = 0;
  fill("#FCA311");

  while(countX < 10){
	countY = 0;
	while(countY < 8){
		index = index + 1;
	 	countY = countY + 1;
	 	if(state == "Today"){
	 		if(index > 74){
	 			fill("#81B29A");
	 		}
	 	}else if(state == "2017"){
	 		if(index > 0 && index < 15){
	 			fill("#FF6A5C");

	 		}else if(index >= 15 && index <= 74){
	 			fill("#FCA311");
	 		}else if(index > 74){
	 			fill("#81B29A");

	 		}
	 	}else if(state == "2018"){
	 		if(index > 0 && index < 28){
	 			fill("#FF6A5C");

	 		}else if(index >= 28 && index <= 74){
	 			fill("#FCA311");
	 		}else if(index > 74){
	 			fill("#81B29A");

	 		}
	 	}else if(state == "2019"){
	 		if(index > 0 && index <= 74){
	 			fill("#FF6A5C");
	 		}else if(index > 74){
	 			fill("#81B29A");

	 		}
	 	}
		ellipse(countX*30 + 15, countY*30, 25, 25);
	}
	countX = countX + 1;
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