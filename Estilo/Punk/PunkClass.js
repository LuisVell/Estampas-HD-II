class Punk{
    constructor(Cortes,Colors,ColorsXtra){
        this.Cortes = Cortes;
        this.Colors = Colors;
        this.ColorsXtra = ColorsXtra;
    }

    Generate(o=null,p=0.5,bg=true) {
        if(bg){
            background(255);
        }
        for (let i = 0; i < 800; i++) {
            if(o && (Math.random() > p)){
                continue;
            }
            push();
            translate(random(0, width), random(0, height));
            rotate(radians(random(0, 270)));
            let s = int(random(0, this.Cortes.length));
            let colors = (this.Colors.concat(this.ColorsXtra)).sort(() => Math.random() - 0.5);
            tint(colors[int(random(0, colors.length))]);
            strokeWeight(0.5);
            image(this.Cortes[s], 0, 0);
            pop();
        }
    }
}

