class NewWave {
    constructor(Cortes,SizeX,SizeY,Colors){
        this.Cortes = Cortes;
        this.SizeX = SizeX;
        this.SizeY = SizeY;
        this.Colors = Colors;
    }

    Generate(o=null,p=0.5,bg=true) {
        noStroke();
        imageMode(CORNER);
        if(bg){
            background(255);
        }
        for (let i = 0; i < 8; i++) {
            for (let f = 0; f < 20; f++){
                if(o && (Math.random() > p)){
                    continue;
                }
                push();
                let x = (f*(this.SizeX+20))-this.SizeX/2;
                let y = ((i*(this.SizeY+20))-this.SizeY/2)+(f%2==1?this.SizeY/2:0);
                translate(x,y);
                let colors = this.Colors.slice(0,2).sort(() => Math.random() - 0.5);
                fill(colors[0]);
                rect(0,0,this.SizeX,this.SizeY);
                var xV = random(this.SizeX*0.1,this.SizeX*0.15);
                var yV = random(this.SizeY*0.05,this.SizeY*0.1);
                fill(colors[1]);
                rect(xV,yV,this.SizeX,this.SizeY);
                let s = int(random(0, this.Cortes.length));
                tint(this.Colors[2]);
                image(this.Cortes[s], xV, yV, this.SizeX, this.SizeY);
                pop();
            }
        }
    }
}
