// Aven Le Zhou https://www.aven.cc
// IMA, NYU Shanghai
// Artificial Intelligence Arts Fall 2019 https://wp.nyu.edu/shanghai-ima-aiarts/

let classifier;
let img;

let label = "label";
let label1 = "label1";
let probability = 0;
let probability1 = 0;


function preload() {
  img = loadImage("img/tesla-cat.jpg");
  img1 = loadImage("img/bird.jpg")
}


function setup() {
  createCanvas(2000, 1000);
  background(255);

  classifier = ml5.imageClassifier('MobileNet', modelReady);
}


function draw() {

  background(255);
  image(img, 0, 0);
  textSize(20);
  text(label , 100, height/2);
  text(probability, 100, height/2 + 30);
  image(img1, 1000, 0);
  textSize(20);
  text(label1 , 100, height/2 + 110);
  text(probability1, 100, height/2+ 130);
}

// function draw1() {
//   image(img1, 500, 500);
//   textSize(20);
//   text(label , 100, height/2);
//   text(probability, 100, height/2 + 30);
// }

function modelReady() {
  console.log("Model Loaded");
  classifyImage();
}

function classifyImage() {
  classifier.predict(img, gotResult);
  classifier.predict(img1, gotResult1);
}

function gotResult(err, results) {
  label = results[0].className;
  probability = nf(results[0].probability, 0, 2);
  // label = results[1].className;
  // probability = nf(results[1].probability, 0, 2);
}

function gotResult1(err, results) {
  label1 = results[0].className;
  probability1 = nf(results[0].probability, 0, 2);
  // label = results[1].className;
  // probability = nf(results[1].probability, 0, 2);
}
