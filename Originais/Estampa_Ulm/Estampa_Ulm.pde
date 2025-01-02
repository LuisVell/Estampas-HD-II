int TriangleSize = 50;
int QuadSize = 100;
color[] Colors = {#2845b8,#b328b8,#25ad10};

int Frames = 20;
int NowFrame = 0;

void setup(){
  size(600,600);
  frameRate(1);
}

void draw(){
  NowFrame+=1;
  background(120,140,0);
  rotate(PI/4);
  Unity(100,100);
  for(int i=-50;i<50;i++){
    for(int f=-50;f<50;f++){
      Unity(QuadSize*i,QuadSize*f);
    }
  }
  /*saveFrame("Gerados-######.png");
  if(NowFrame>=Frames){
    noLoop();
  }*/
}

void EquiTriangle(int X, int Y, int W){
  pushMatrix();
  translate(X, Y);
  triangle(0, 0, 0, W, W, 0);
  popMatrix();
}

void Unity(int X, int Y){
  pushMatrix(); //Layer 0
  translate(X,Y);
  fill(#fa3e00);
  square(0,0,QuadSize); //Fundo
  pushMatrix(); //Layer 1
  translate(QuadSize/2,QuadSize/2);
  rotate((PI/2)*int(random(1,3)));
  fill(Colors[int(random(Colors.length))]);
  EquiTriangle(22-(QuadSize/2),28-(QuadSize/2),TriangleSize);
  fill(Colors[int(random(Colors.length))]);
  EquiTriangle((TriangleSize+30)-(QuadSize/2),(TriangleSize+20)-(QuadSize/2),-TriangleSize);
  popMatrix();//L0
  popMatrix();//L1
}
