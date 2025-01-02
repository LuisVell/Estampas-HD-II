int QuadSize = 60;
color[] Colors = {#DDBA2C,#2372B4,#AD2B33};

void setup(){
    size(600,600);
    strokeWeight(.5);
    Generate();
}

void draw(){}

void mousePressed() {
    Generate();    
}

void Generate(){
    //Grid
    ///vazio
    ArrayList<ArrayList> grid = new ArrayList<ArrayList>();
    for(int i=0;i<int(height/QuadSize);i++){
        ArrayList<Boolean> subList = new ArrayList<Boolean>();
        for(int f=0;f<int(width/QuadSize);f++){
            subList.add(false);
        }
        grid.add(subList);
    }
    ///Fill
    for(int i=0;i<grid.size();i++){
        for(int f=0;f<grid.get(i).size();f++){
            if(!(boolean)grid.get(i).get(f)){
                IntList colors = new IntList();
                for(int c=0;c<Colors.length;c++){
                    colors.set(c,Colors[c]);
                }
                colors.shuffle();
                pushMatrix();
                translate(f*QuadSize,i*QuadSize);
                fill(colors.get(0));
                int quadSize = QuadSize;
                //Quadrado Maior
                if (int(random(0,20))==0){
                    if((i+1<grid.size())&&(f+1<grid.get(i).size())){
                        if(!((boolean)grid.get(i).get(f+1)&&(boolean)grid.get(i+1).get(f+1)&&(boolean)grid.get(i).get(f))){
                            grid.get(i).set(f+1,true);
                            grid.get(i+1).set(f+1,true);
                            grid.get(i+1).set(f,true);
                            quadSize = QuadSize*2;
                        }
                    }
                }
                quad(0, 0, quadSize, 0, quadSize, quadSize, 0, quadSize);
                if(int(random(0,5))==0){
                    int direc = int(random(1,4));
                    fill(colors.get(1));
                    int xf = quadSize;
                    int yf = 0;
                    switch (direc) {
                        case 2:
                            xf=quadSize;
                            yf=quadSize;
                        break;
                        case 3:
                            xf=0;
                            yf=quadSize;
                        break;
                        case 4:
                            xf=0;
                        break;	
                    }
                    if(int(random(0,2))==0){
                        Triangle(xf,yf,quadSize,direc);
                    }else{
                        Arc(xf,yf,quadSize,direc);
                    }
                }
                popMatrix();
                grid.get(i).set(f,true);
            }
        }
    }
}

color RandomColor(){
    return Colors[int(random(0, Colors.length))];
}

void Triangle(int x, int y, int l, int d){
    pushMatrix();
    translate(x, y);
    rotate(radians(d*90));
    triangle(0,0,0,l,(l/2),(l/2));
    popMatrix();
}

void Arc(int x, int y, int l, int d){
    pushMatrix();
    translate(x, y);
    ellipseMode(CENTER);
    rotate(radians(d*90));
    arc(0, 0, l*2, l*2, radians(0), radians(90),PIE);
    popMatrix();
}