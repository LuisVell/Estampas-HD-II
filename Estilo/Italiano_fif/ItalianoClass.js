class Italiano {
    constructor(CircleBase,Minicircle,Colors,ColorsXtra){
        this.CircleBase = CircleBase;
        this.Minicircle = Minicircle;
        this.Colors = Colors;
        this.ColorsXtra = ColorsXtra;
    }

    Generate(o=null,p=0.5,bg=true) {
        noStroke();
        if(bg){
            background(255, 255, 255);
        }
        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                if (!(o && (Math.random() > p))){
                    this.Modulo(x * (this.CircleBase), y * (this.CircleBase));
                }
            }
        }
    }

    Modulo(x, y) {
        push();
        let c =  this.Colors.concat(this.ColorsXtra);
        c.sort(() => Math.random() - 0.5);
        while(c[0]=='#000000'){
            c.sort(() => Math.random() - 0.5);
        }
        fill(c[0]);
        translate(x, y);
        circle(0, 0, this.CircleBase);
        for (let i = 0; i < 2; i++) {
            rotate(radians(int(random(20, 150))));
            fill(c[i + 1]);
            arc(0, 0, this.Minicircle, this.Minicircle, radians(0), radians(180));
        }
        pop();
    }

}