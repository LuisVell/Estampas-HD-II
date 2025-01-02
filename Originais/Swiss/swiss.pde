int QuadSize = 50;

int[][][] tetrominos = {
    {{1,0},{0,1},{1,1}}, //O
    {{0,1},{0,2},{0,3}}, //i
    {{1,0},{1,-1},{2,-1}}, //s
    {{1,0},{1,1},{2,1}}, //z
    {{1,0},{2,0},{1,1}}, //t
    {{0,1},{0,2},{1,2}}, //l
    {{0,1},{0,2},{-1,2}} //j
};

int[] Colors = {#000080,#800000,#008000,#008080,#808000,#800080,#c0c0c0};

void setup() {
    noStroke();
    size(600,600);
    frameRate(1);
}

void draw() {
    for(int x=0;x<(int(width/QuadSize)+1);x+=4){
        int y=0;
        while(y<(int(height/QuadSize)+1)){
            pushMatrix();
                translate(x*QuadSize,y*QuadSize);
                switch (int(random(-1,8))) {
                    case 0:
                        Pattern1();
                        y+=5;
                    break;
                    case 1:
                        Pattern2();
                        y+=5;
                    break;
                    case 2:
                        Pattern3();
                        y+=4;
                    break;
                    case 3:
                        Pattern4();
                        y+=5;
                    break;
                    case 4:
                        Pattern5();
                        y+=7;
                    break;
                    case 5:
                        Pattern6();
                        y+=3;
                    break;	
                }
            popMatrix();
        }
    }
}

void Pattern6(){
    pushMatrix();
        translate(3*QuadSize,0);
        tetromino(6);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,0);
        rotate(radians(90));
        tetromino(5);
    popMatrix();
    pushMatrix();
        translate(0,2*QuadSize);
        tetromino(2);
    popMatrix();

}

void Pattern5(){
    pushMatrix();
        translate(3*QuadSize,0);
        tetromino(1);
    popMatrix();
    pushMatrix();
        translate(0,7*QuadSize);
        rotate(radians(-90));
        tetromino(1);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,6*QuadSize);
        rotate(radians(-90));
        tetromino(2);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,6*QuadSize);
        rotate(radians(180));
        tetromino(4);
    popMatrix();
    pushMatrix();
        translate(0,3*QuadSize);
        rotate(radians(-90));
        tetromino(4);
    popMatrix();
    pushMatrix();
        translate(0,5*QuadSize);
        rotate(radians(-90));
        tetromino(3);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,3*QuadSize);
        rotate(radians(180));
        tetromino(5);
    popMatrix();

}

void Pattern4(){
    pushMatrix();
        translate(3*QuadSize,0);
        tetromino(1);
    popMatrix();
    pushMatrix();
        translate(0,2*QuadSize);
        tetromino(2);
    popMatrix();
    pushMatrix();
        translate(2*QuadSize,2*QuadSize);
        tetromino(5);
    popMatrix();
    pushMatrix();
        translate(0,3*QuadSize);
        tetromino(0);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,0);
        rotate(radians(90));
        tetromino(5);
    popMatrix();
}

void Pattern3(){
    tetromino(1);
    pushMatrix();
        translate(4*QuadSize,0);
        rotate(radians(90));
        tetromino(5);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,QuadSize);
        rotate(radians(90));
        tetromino(3);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,QuadSize);
        tetromino(6);
    popMatrix();
}

void Pattern2(){
    tetromino(1);
    pushMatrix();
        translate(QuadSize,0);
        tetromino(0);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,0);
        tetromino(1);
    popMatrix();
    pushMatrix();
        translate(2*QuadSize,2*QuadSize);
        tetromino(5);
    popMatrix();
    pushMatrix();
        translate(QuadSize,2*QuadSize);
        tetromino(6);
    popMatrix();
}

void Pattern1(){
    tetromino(0);
    pushMatrix();
        translate(2*QuadSize,3*QuadSize);
        tetromino(0);
    popMatrix();
    pushMatrix();
        translate(0,2*QuadSize);
        tetromino(5);
    popMatrix();
    pushMatrix();
        translate(3*QuadSize,QuadSize);
        rotate(radians(90));
        tetromino(3);
    popMatrix();
    pushMatrix();
        translate(4*QuadSize,3*QuadSize);
        rotate(radians(180));
        tetromino(5);
    popMatrix();
}

void tetromino(int m){
    fill(Colors[m]);
    int[][] t = tetrominos[m];
    quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
    for(int i=0;i<t.length;i++){
        pushMatrix();
        translate(t[i][0]*QuadSize,t[i][1]*QuadSize);
        quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
        popMatrix();
    }
}
