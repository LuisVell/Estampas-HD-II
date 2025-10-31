
class Psicodelismo{
    constructor(baseFlama,Colors,ColorsXtra){
        this.baseFlama = baseFlama;
        this.Colors = Colors;
        this.ColorsXtra = ColorsXtra;
    }

    Generate(o=null,p=0.5,bg=true) {
        stroke(0)
        if(bg){
            background(255);
        }
        for (let i = 0; i < 800; i++) {
            if(o && (Math.random() > p)){
                break;
            }
            push();
            translate(random(0, width), random(0, height));
            rotate(radians(random(0, 270)));
            let s = int(random(0, this.baseFlama.length));
            let colors = (this.Colors.slice().concat(this.ColorsXtra.slice())).sort(() => Math.random() - 0.5);
            tint(colors[int(random(0, colors.length))]);
            strokeWeight(0.5);
            image(this.baseFlama[s], 0, 0);
            pop();
        }
    }
}
