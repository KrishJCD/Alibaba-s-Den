var bg,bg2,form,system,code,security1,security2,security3;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security1 = new Security(100,90,100,120,accessCode1);
  security2 = new Security(700,180,700,210,accessCode2);
  security3 = new Security(100,300,100,330,accessCode3);
}

function draw() {
  background(bg);
  clues();
  security1.display();
  security2.display();
  security3.display();

  // Add code to display score in the middle of the screen
  textSize(20);
  fill("white");
  text("Score: "+score,450,100);
  if(score==3)
  {
    clear();
    background(bg2);
    text("TREASURE UNLOCKED!!!!But of No Use.",450,100);
  }


  // Add code to display the end screen


  drawSprites()
}