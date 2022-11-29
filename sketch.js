
 var button;

var et;

var overButton;

var backwards;

var timeLapse;

var timeTrack;

var blur;

function preload() {
photo = loadImage('et.png');
}

function setup() {
    initializeFields();
  createCanvas(windowWidth, windowHeight);
    //createCanvas(600, 600);
    // Load the image into the program
    et = loadImage("et.png");
    filter(BLUR, 6);
}

function draw() {
    // total canva black
    background(0);
    // rect flahing/blinking
    var m = millis();
    // velocity of flashs ** not working good ** maybe my computer..
    fill(m % 170);
    rect(25, 25, 555, 555, 30);
    image(et, 0, 0);
    textSize(128);
    fill(0, 408, 612, 816);
    // text
    text("Techno", 100, 70, -120);
    filter(BLUR, 6);
    if (overButton == true) {
        noStroke();
        fill(74, 245, 243, 70);
         filter(BLUR, 8);
    } else {
        noStroke();
        fill(237, 10, 222);
    }
    circle(267, 290, 30);
}

function mouseClicked() {
  {
    window.open('https://www.youtube.com/playlist?list=PLLfjXK0h5ZJK01y34_ouFkU5wpFW5HyE7');
  }

    
}

function mouseMoved() {
    checkButtons();
}

function mouseDragged() {
    checkButtons();
}

function checkButtons() {
    if (mouseX > 200 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
        overButton = true;
    } else {
        overButton = false;
    }
}

function initializeFields() {
    et = null;
    overButton = false;
    backwards = false;
    timeLapse = 400;
    timeTrack = 0;
    blur = null;
}



