let xspacing = 20; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 1000.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let dotSize = 3;
let maxHeight = 200;

function setup() {
  if (windowWidth < 600) {
    maxHeight = 100;
    period = 250.0;
    amplitude = 40.0;
  }

  let canvas = createCanvas(windowWidth, maxHeight);
  canvas.parent("#animation-container");
  w = width + xspacing;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(248,249,250);
  clear();
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.01;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(0, 75);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(dotSize + x * xspacing, height / 2 + yvalues[x], dotSize, dotSize);
  }
}
