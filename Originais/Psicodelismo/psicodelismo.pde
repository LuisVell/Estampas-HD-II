PShape[] baseFlama = new PShape[6];
PShape[] flame = new PShape[6];
color[] colors = {color(41,252,13),color(252,13,25)};

void setup() {
    frameRate(0.5);
    fullScreen();
    size(600, 600);
    for(int i=0;i<6;i++){
      baseFlama[i] = loadShape("Flamas/Flama-0"+(Integer.toString(i+1))+".svg");
      flame[i] = baseFlama[i].getChild("1");
    }
}

void draw() {
  shapeMode(CENTER);
  for(int i=0;i<50;i++){
    pushMatrix();
    translate(random(0,width),random(0,height));
    rotate(radians(random(0,270)));
    int s = int(random(0,flame.length));
    flame[s].disableStyle();
    fill(colors[int(random(0,colors.length))]);
    strokeWeight(0.5);
    shape(flame[s], 0, 0);
    popMatrix();
  }
}
