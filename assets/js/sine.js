let xspacing = 15; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 120.0; // Height of wave
let period = 1000; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let dotSize = 3;
let maxHeight = 300;
const charArray = ["→","↘︎","↓","↙︎","←","↖︎","↑","↗︎"];
/*const charArray = ["I","⥜","⥠","⥔","⟷","⥐","⟷","⥊"];*/
let currentChar = 0;
let intervalID;  // This was for changing characters automatically



function setup() {
  period = random([period*0.7], [period*1.3]);
  if (windowWidth < 600) {
    maxHeight = 300;
    amplitude = 120.0;
    
  }

  let canvas = createCanvas(windowWidth, maxHeight);
  canvas.parent("#animation-container");
  w = width + xspacing;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  setChar();
  updateInterval(); // Call the updateInterval function once at the beginning 
  
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

  if(mouseIsPressed) {
    theta +=0.12;
    
  }

  
  
  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
  
}



function renderWave() { 
  noStroke();
  fill(0, 85);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    text(charArray[currentChar],dotSize + x * xspacing, height / 2 + yvalues[x])
    //ellipse(dotSize + x * xspacing, height / 2 + yvalues[x], dotSize, dotSize);
  }
}


function setChar(){
  /*if(currentChar < charArray.length-1) {
    currentChar++;
  }  else{
    currentChar = 0;
  } */
  
  currentChar = Math.floor(Math.random() * charArray.length); 
  console.log("Current Char:",currentChar);
  updateInterval();
}

function updateInterval() {
  let intervalTime = random(0.2, 0.6) * 1000; // Generate a random interval 
  clearInterval(intervalID); // Clear the previous interval
  intervalID = setInterval(setChar, intervalTime); // Set the new interval
  console.log("Interval updated to:", intervalTime);
} 

