PShape Mod;

int ModSize = 100;
int Gap = 0;

color  BG = color(0,0,0);
color ModBG = color(0,0,0);
boolean Copy = false;
boolean KeepDraw = false;

int FillX;
int FillY;

void setup(){
    size(600,800);
    frameRate(1);
    FillX = (600/ModSize)+1;
    FillY = (800/ModSize)+1;
    Mod = loadShape("modulo.svg");
    Mod.enableStyle();
    shapeMode(CENTER);
    Draw();
}

void draw(){
    if(KeepDraw){
        if(!Copy){
            if(BG != color(0,0,0)){
                BG = color(random(0, 255), random(0, 255), random(0, 255));
            }
            if(ModBG != color(0,0,0)){
                ModBG = color(random(0, 255), random(0, 255), random(0, 255));
            }
        }else{
            BG = color(random(0, 255), random(0, 255), random(0, 255));
            ModBG = BG;
        }
        Draw();
    }
}

void keyPressed(){
    if(key == 'e'){
        BG = color(random(0, 255), random(0, 255), random(0, 255));
    }
    if(key == 'r'){
        ModBG = color(random(0, 255), random(0, 255), random(0, 255));
    }
    if(key == 'd'){
        BG = color(0,0,0);
    }
    if(key == 'f'){
        ModBG = color(0,0,0);
    }
    if(key == 't'){
        ModBG = BG;
    }
    if(key == 'y'){
        BG = ModBG;
    }
    if(key == 'k'){
        KeepDraw = !KeepDraw;
    }
    if(key == 'l'){
        Copy = !Copy;
    }
    Draw();
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  ModSize += e*-1;
  if(ModSize<10){
    ModSize=10;
  }
  FillX = (600/ModSize)+1;
  FillY = (800/ModSize)+1;
  Draw();
}

void Draw(){
    int rotate = 0;
    int FRot;
    background(BG);
    for(int y=0;y<FillY;y++){
        FRot = rotate;
        for(int x=0;x<FillX;x++){
            pushMatrix();
            if(rotate==5){
                x+=1;
                rotate = 3;
                FRot = 4;
            }
            translate((x*(ModSize+Gap))+(ModSize/2), (y*(ModSize+Gap))+(ModSize/2));
            rotate(radians(rotate*90));
            fill(ModBG);
            noStroke();
            rect(-(ModSize/2),-(ModSize/2),ModSize,ModSize);
            shape(Mod, 0, 0, ModSize, ModSize);
            switch (rotate) {
                case 0:
                    rotate = 1;
                    break;
                case 1:
                    rotate = 3;
                    x+=1;
                    break;
                case 2:
                    rotate = 0;
                    break;
                case 3:
                    rotate = 2;
                    break;
            }
            popMatrix();
        };
        switch (FRot) {
            case 0:
                rotate = 3;
                break;
            case 1:
                rotate = 2;
                break;
            case 2:
                rotate = 5;
                break;
            case 3:
                rotate = 1;
                break;
            case 4:
                rotate = 0;
                break;
        }
    };
}