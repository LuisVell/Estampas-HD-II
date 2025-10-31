class Streamline{
    constructor(Mod,ModSize,BG,Lines,FillX,FillY){
        this.Mod = Mod;
        this.ModSize = ModSize;
        this.BG = BG;
        this.Lines = Lines;
        this.FillX = FillX;
        this.FillY = FillY;
    }
    Generate(o=null,p=0.5,bg=true) {
        imageMode(CENTER);
        let r = int(random(0,4));
        let FRot;
        if(bg){
            background(this.BG);
        }
        for (let y = 0; y < this.FillY; y++) {
            FRot = r;
            for (let x = 0; x < this.FillX; x++) {
                push();
                if (r == 5) {
                    x += 1;
                    r = 3;
                    FRot = 4;
                }
                if(!(o && (Math.random() > p))){
                    translate(
                        x * (this.ModSize) + this.ModSize / 2,
                        y * (this.ModSize) + this.ModSize / 2
                    );
                    rotate(radians(r * 90));
                    tint(this.Lines)
                    image(this.Mod, 0, 0, this.ModSize, this.ModSize);
                }
                switch (r) {
                    case 0:
                        r = 1;
                        break;
                    case 1:
                        r = 3;
                        x += 1;
                        break;
                    case 2:
                        r = 0;
                        break;
                    case 3:
                        r = 2;
                        break;
                }
                pop();
            }
            switch (FRot) {
                case 0:
                    r = 3;
                    break;
                case 1:
                    r = 2;
                    break;
                case 2:
                    r = 5;
                    break;
                case 3:
                    r = 1;
                    break;
                case 4:
                    r = 0;
                    break;
            }
        }
    }
}