class Ulm {
    constructor(TriangleSize,QuadSize,BG,Colors,ColorsXtra){
        this.TriangleSize = TriangleSize;
        this.QuadSize = QuadSize;
        this.BG = BG;
        this.Colors = Colors;
        this.ColorsXtra = ColorsXtra;
    }

    Generate(o=null,p=0.5,bg=false){
        stroke(0)
        push();
        rotate(PI / 4);
        this.Unity(100, 100);
        for (let i = -50; i < 50; i++) {
            for (let f = -50; f < 50; f++) {
                if(o && (Math.random() > p)){
                    continue
                }
                this.Unity(this.QuadSize * i, this.QuadSize * f);
            }
        }
        pop();
    }
    
    EquiTriangle(X, Y, W) {
        push();
        translate(X, Y);
        triangle(0, 0, 0, W, W, 0);
        pop();
    }
    
    Unity(X, Y) {
        push(); //Layer 0
            translate(X, Y);
            fill(this.BG);
            square(0, 0, this.QuadSize); //Fundo
            push(); //Layer 1
                translate(this.QuadSize / 2, this.QuadSize / 2);
                rotate((PI / 2) * int(random(1, 3)));
                let colors = this.Colors.concat(this.ColorsXtra); //Concatenar aqui não é a melhor coisa, mas o p5 não me ajudou
                fill(colors[int(random(colors.length))]);
                this.EquiTriangle(22 - this.QuadSize / 2, 28 - this.QuadSize / 2, this.TriangleSize);
                fill(colors[int(random(colors.length))]);
                this.EquiTriangle(
                    this.TriangleSize + 30 - this.QuadSize / 2,
                    this.TriangleSize + 20 - this.QuadSize / 2,
                    -this.TriangleSize
                );
            pop(); //L1
        pop(); //L0
    }
}

