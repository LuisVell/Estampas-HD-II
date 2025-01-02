int CircleBase = 100;
int Minicircle = 40;
int SpaceBtwX = -5;
int SpaceBtwY = -5;


color[] Colors = {#000000,#2845b8,#b328b8,#25ad10,#fc5a03,#03fcf4};

void setup(){
    size(500,700);
    noStroke();
    NewOne();
}

void draw(){}

void NewOne(){
    background(255, 255, 255);
    for(int x = 0;x<50;x++){
        for(int y = 0;y<50;y++){
            Modulo(x*(CircleBase+SpaceBtwX),y*(CircleBase+SpaceBtwY));
        }
    }
}

void mousePressed() {
    if (mousePressed && (mouseButton == LEFT)) {
        NewOne();
    } else if (mousePressed && (mouseButton == RIGHT)) {
        saveFrame("Versao-######.png");
    }

}

void Modulo(int x, int y){
    pushMatrix();
    color[] c = new color[4];
    for(int i=0;i<3;i++){
        c[i] = Colors[int(random(Colors.length))];
    }
    //Checa se realmente ta tudo diferente, ctz q pode ser otimizado
    while(true){
        for(int i=0; i<3; i++){
            for(int f=0; f<3; f++){
                if(i!=f){
                    if(c[i]==c[f]){
                        c[i] = Colors[int(random(Colors.length))];
                    }
                }
            }
        }
        boolean ok = true;
        for(int i=0; i<3; i++){
            for(int f=0; f<3; f++){
                if(i!=f){
                    if(c[i]==c[f]){
                        ok = false;
                    }

                }
            }
        }
        if(ok){
            break;
        }

    }
    fill(c[0]);
    translate(x,y);
    circle(0, 0,CircleBase);
    for(int i = 0;i<2;i++){
        rotate(radians(int(random(45,100))));
        fill(c[i+1]);
        arc(0,0,Minicircle,Minicircle,radians(0),radians(180));
    }
    popMatrix();
}