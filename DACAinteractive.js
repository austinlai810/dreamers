var state = '2017';
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}




function seventeenfunction() {
    document.getElementById("button").innerHTML = "In 2017, the amount of people at risk of losing DACA is close to the amount of minutes in a year.";
    state = '2017'
}



function eightteenfunction() {
    document.getElementById("button").innerHTML = "In 2018, the number of people who will lose DACA is about equal to the number of teachers employed in California.";
    state = '2018'
}



function nineteenfunction() {
    document.getElementById("button").innerHTML = "In 2019, the number of people who will have lost DACA is about the number of Apple computers sold in a month.";
    state = '2019'

}

var scaleValue = 1;
var canvasMax = 360;


function setup() {
    var cWidth = document.getElementById('chart').offsetWidth;
    var myCanvas = createCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
    myCanvas.parent('chart');
}


function draw() {
    push();
    scale(scaleValue);
    background('#ffffff');


    var countX = 0;
    var countY = 0;
    var index = 0;
    var tota2017 = 10;
    var tota2018 = 10;
    var tota2019 = 10;

    fill("#FCA311");

    while (countX < 11) {
        countY = 0;
        while (countY < 7) {
            index = index + 1;
            countY = countY + 1;
            if (state == "2017") {
                if (index >10) {
                    fill("#81B29A");
                }
            } else if (state == "2018") {
                if (index > 0 && index < 15) {
                    fill("#FF6A5C");

                } else if (index >= 15 && index <= 74) {
                    fill("#FCA311");
                } else if (index > 74) {
                    fill("#81B29A");

                }
            } else if (state == "2019") {
                if (index > 0 && index < 28) {
                    fill("#FF6A5C");

                } else if (index >= 28 && index <= 74) {
                    fill("#FCA311");
                } else if (index > 74) {
                    fill("#81B29A");

                }
            }
            ellipse(countX * 30 + 15, countY * 30, 25, 25);
        }
        countX = countX + 1;
    }





    pop();
}

function orangefunction() {
    document.getElementById("button").innerHTML = "In 2017, the amount of people at risk of losing DACA is close to the amount of minutes in a year.";
    state = '2017'

}

function windowResized() {
    //cavas size will be resized in case window size has changed
    var cWidth = document.getElementById('chart').offsetWidth;
    var cHeight = document.getElementById('chart').offsetHeight;
    scaleValue = min(canvasMax, cWidth) / canvasMax;
    resizeCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
}