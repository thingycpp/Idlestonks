let uname = null;

const W = 600;
const H = 450;
var fpsCap = 60;

var c_x = W / 2;
var c_y = H / 2;

var x_velLeft = 0;
var y_velUp = 0;
var x_velRight = 0;
var y_velDown = 0;

var isAlive = true;
var dedText = "Hey, uhhh... don't go there";
var dedText2 = "I said dont >:C";
var tryAgain = 'Restart game by pressing the "esc" key.';
var dedscr = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
	W = windowWidth;
	H = windowHeight;
  frameRate(fpsCap);
  noCursor();
	background(25);
}

function player(p_x, p_y, p_d, p_r, p_g, p_b) {
  if (p_d < 15) {
    p_d = 15;
  }

  p_x -= x_velLeft;
  p_x += x_velRight;
  p_y -= y_velUp;
  p_y += y_velDown;

  if (isAlive) {
    if (keyIsDown(87)) {
      y_velUp += 5;
    }

    if (keyIsDown(65)) {
      x_velLeft += 5;
    }

    if (keyIsDown(68)) {
      x_velRight += 5;
    }

    if (keyIsDown(83)) {
      y_velDown += 5;
    }
  }

  if (p_y === 0 || p_y === windowHeight || p_x === 0 || p_x === windowWidth) {
    y_velUp = 0;
    y_velDown = 0;
    x_velLeft = 0;
    x_velRight = 0;

    isAlive = false;
  }
  
  if(!isAlive) {
    if (dedscr === 1) {
      textSize(W / 20);
      fill(color(207, 0, 15));
      text(dedText, 122, H / 3);
      text(tryAgain, 40, 400);
    }
    
    if (dedscr === 2)
    {
      textSize(W / 20);
      fill(color(207, 0, 15));
      text(dedText2, 122, H / 3);
      text(tryAgain, 40, 400);
    }
    
    if (dedscr === 3)
    {
      dedscr = 1;
    }
  }
  
  if (keyIsDown(80)) {
    isAlive = true;
  }

  const c_co = color(p_r, p_g, p_b);

  noStroke();
  fill(c_co);
  circle(p_x, p_y, p_d);
}

function draw() {
	clear();
  //Colors
  const sky = color(34, 167, 240);
  const b_green = color(0, 230, 64);
  const b_red = color(217, 30, 24);

  //background(25);

  player(c_x, c_y, 15, 118, 93, 105);

  {
    fill(b_green);
    noStroke();
    rect(0 - 50 / 2, 0, 50, H);
  }

  {
    fill(b_red);
    noStroke();
    rect(W - 50 / 2, 0, 50, H);
  }

}
