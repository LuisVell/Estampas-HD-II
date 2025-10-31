class Swiss {
    constructor(QuadSize,Colors,width,height){
        this.QuadSize = QuadSize;
        this.Colors = Colors;
        this.tetrominos = [
            [[1, 0],[0, 1],[1, 1],], //O
            [[0, 1],[0, 2],[0, 3],], //i
            [[1, 0],[1, -1],[2, -1],], //s
            [[1, 0],[1, 1],[2, 1],], //z
            [[1, 0],[2, 0],[1, 1],], //t
            [[0, 1],[0, 2],[1, 2],], //l
            [[0, 1],[0, 2],[-1, 2],], //j
        ];
        this.width = width;
        this.height = height;
    }

    Generate(o=null,p=0.5){
        stroke(0);
        for (let x = 0; x < int(this.width / this.QuadSize) + 1; x += 4) {
            let y = 0;
            while (y < int(this.height / this.QuadSize) + 1) {
                push();
                translate(x * this.QuadSize, y * this.QuadSize);
                if(o && (Math.random() > p)){
                    y+=7;
                    x+=4;
                    continue;
                }
                switch (int(random(-1, 8))) {
                    case 0:
                        this.Pattern1();
                        y += 5;
                        break;
                    case 1:
                        this.Pattern2();
                        y += 5;
                        break;
                    case 2:
                        this.Pattern3();
                        y += 4;
                        break;
                    case 3:
                        this.Pattern4();
                        y += 5;
                        break;
                    case 4:
                        this.Pattern5();
                        y += 7;
                        break;
                    case 5:
                        this.Pattern6();
                        y += 3;
                        break;
                }
                pop();
            }
        }
    }

/* Seria demorado demais criar um sistema que populasse o grid com tetrominos, logo foram criados padrões retangulares de tamanhos conhecidos para facilitar o processo*/

    Pattern1() {
        this.tetromino(0);
        push();
        translate(2 * this.QuadSize, 3 * this.QuadSize);
        this.tetromino(0);
        pop();
        push();
        translate(0, 2 * this.QuadSize);
        this.tetromino(5);
        pop();
        push();
        translate(3 * this.QuadSize, this.QuadSize);
        rotate(radians(90));
        this.tetromino(3);
        pop();
        push();
        translate(4 * this.QuadSize, 3 * this.QuadSize);
        rotate(radians(180));
        this.tetromino(5);
        pop();
    }

    Pattern2() {
        this.tetromino(1);
        push();
        translate(this.QuadSize, 0);
        this.tetromino(0);
        pop();
        push();
        translate(3 * this.QuadSize, 0);
        this.tetromino(1);
        pop();
        push();
        translate(2 * this.QuadSize, 2 * this.QuadSize);
        this.tetromino(5);
        pop();
        push();
        translate(this.QuadSize, 2 * this.QuadSize);
        this.tetromino(6);
        pop();
    }

    Pattern3() {
        this.tetromino(1);
        push();
        translate(4 * this.QuadSize, 0);
        rotate(radians(90));
        this.tetromino(5);
        pop();
        push();
        translate(3 * this.QuadSize, this.QuadSize);
        rotate(radians(90));
        this.tetromino(3);
        pop();
        push();
        translate(3 * this.QuadSize, this.QuadSize);
        this.tetromino(6);
        pop();
    }

    Pattern4() {
        push();
        translate(3 * this.QuadSize, 0);
        this.tetromino(1);
        pop();
        push();
        translate(0, 2 * this.QuadSize);
        this.tetromino(2);
        pop();
        push();
        translate(2 * this.QuadSize, 2 * this.QuadSize);
        this.tetromino(5);
        pop();
        push();
        translate(0, 3 * this.QuadSize);
        this.tetromino(0);
        pop();
        push();
        translate(3 * this.QuadSize, 0);
        rotate(radians(90));
        this.tetromino(5);
        pop();
    }

    Pattern5() {
        push();
        translate(3 * this.QuadSize, 0);
        this.tetromino(1);
        pop();
        push();
        translate(0, 7 * this.QuadSize);
        rotate(radians(-90));
        this.tetromino(1);
        pop();
        push();
        translate(3 * this.QuadSize, 6 * this.QuadSize);
        rotate(radians(-90));
        this.tetromino(2);
        pop();
        push();
        translate(3 * this.QuadSize, 6 * this.QuadSize);
        rotate(radians(180));
        this.tetromino(4);
        pop();
        push();
        translate(0, 3 * this.QuadSize);
        rotate(radians(-90));
        this.tetromino(4);
        pop();
        push();
        translate(0, 5 * this.QuadSize);
        rotate(radians(-90));
        this.tetromino(3);
        pop();
        push();
        translate(3 * this.QuadSize, 3 * this.QuadSize);
        rotate(radians(180));
        this.tetromino(5);
        pop();
    }

    Pattern6() {
        push();
        translate(3 * this.QuadSize, 0);
        this.tetromino(6);
        pop();
        push();
        translate(3 * this.QuadSize, 0);
        rotate(radians(90));
        this.tetromino(5);
        pop();
        push();
        translate(0, 2 * this.QuadSize);
        this.tetromino(2);
        pop();
    }

    tetromino(m) { /*Essa função traduz os tetrominos para formas*/
        fill(this.Colors[m]);
        let t = this.tetrominos[m];
        quad(0, 0, this.QuadSize, 0, this.QuadSize, this.QuadSize, 0, this.QuadSize);
        for (let i = 0; i < t.length; i++) {
            push();
            translate(t[i][0] * this.QuadSize, t[i][1] * this.QuadSize);
            quad(0, 0, this.QuadSize, 0, this.QuadSize, this.QuadSize, 0, this.QuadSize);
            pop();
        }
    }
}
