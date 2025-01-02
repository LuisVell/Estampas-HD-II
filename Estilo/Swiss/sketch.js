let QuadSize = 50;
let tetrominos = [
    [[1, 0],[0, 1],[1, 1],], //O
    [[0, 1],[0, 2],[0, 3],], //i
    [[1, 0],[1, -1],[2, -1],], //s
    [[1, 0],[1, 1],[2, 1],], //z
    [[1, 0],[2, 0],[1, 1],], //t
    [[0, 1],[0, 2],[1, 2],], //l
    [[0, 1],[0, 2],[-1, 2],], //j
];
let Colors = ["#000080","#800000","#008000","#008080","#808000","#800080","#c0c0c0",];

let anim = false;

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    Generate()
    frameRate(1)
}

function Save(){
    saveCanvas('Escola Suica -'+Date.now()+'.jpg')
}

function draw() {
    if(anim){
        Generate()
    }
}

function Generate(){
    for (let x = 0; x < int(width / QuadSize) + 1; x += 4) {
        let y = 0;
        while (y < int(height / QuadSize) + 1) {
            push();
            translate(x * QuadSize, y * QuadSize);
            switch (int(random(-1, 8))) {
                case 0:
                    Pattern1();
                    y += 5;
                    break;
                case 1:
                    Pattern2();
                    y += 5;
                    break;
                case 2:
                    Pattern3();
                    y += 4;
                    break;
                case 3:
                    Pattern4();
                    y += 5;
                    break;
                case 4:
                    Pattern5();
                    y += 7;
                    break;
                case 5:
                    Pattern6();
                    y += 3;
                    break;
            }
            pop();
        }
    }
}

function Pattern6() {
    push();
    translate(3 * QuadSize, 0);
    tetromino(6);
    pop();
    push();
    translate(3 * QuadSize, 0);
    rotate(radians(90));
    tetromino(5);
    pop();
    push();
    translate(0, 2 * QuadSize);
    tetromino(2);
    pop();
}

function Pattern5() {
    push();
    translate(3 * QuadSize, 0);
    tetromino(1);
    pop();
    push();
    translate(0, 7 * QuadSize);
    rotate(radians(-90));
    tetromino(1);
    pop();
    push();
    translate(3 * QuadSize, 6 * QuadSize);
    rotate(radians(-90));
    tetromino(2);
    pop();
    push();
    translate(3 * QuadSize, 6 * QuadSize);
    rotate(radians(180));
    tetromino(4);
    pop();
    push();
    translate(0, 3 * QuadSize);
    rotate(radians(-90));
    tetromino(4);
    pop();
    push();
    translate(0, 5 * QuadSize);
    rotate(radians(-90));
    tetromino(3);
    pop();
    push();
    translate(3 * QuadSize, 3 * QuadSize);
    rotate(radians(180));
    tetromino(5);
    pop();
}

function Pattern4() {
    push();
    translate(3 * QuadSize, 0);
    tetromino(1);
    pop();
    push();
    translate(0, 2 * QuadSize);
    tetromino(2);
    pop();
    push();
    translate(2 * QuadSize, 2 * QuadSize);
    tetromino(5);
    pop();
    push();
    translate(0, 3 * QuadSize);
    tetromino(0);
    pop();
    push();
    translate(3 * QuadSize, 0);
    rotate(radians(90));
    tetromino(5);
    pop();
}

function Pattern3() {
    tetromino(1);
    push();
    translate(4 * QuadSize, 0);
    rotate(radians(90));
    tetromino(5);
    pop();
    push();
    translate(3 * QuadSize, QuadSize);
    rotate(radians(90));
    tetromino(3);
    pop();
    push();
    translate(3 * QuadSize, QuadSize);
    tetromino(6);
    pop();
}

function Pattern2() {
    tetromino(1);
    push();
    translate(QuadSize, 0);
    tetromino(0);
    pop();
    push();
    translate(3 * QuadSize, 0);
    tetromino(1);
    pop();
    push();
    translate(2 * QuadSize, 2 * QuadSize);
    tetromino(5);
    pop();
    push();
    translate(QuadSize, 2 * QuadSize);
    tetromino(6);
    pop();
}

function Pattern1() {
    tetromino(0);
    push();
    translate(2 * QuadSize, 3 * QuadSize);
    tetromino(0);
    pop();
    push();
    translate(0, 2 * QuadSize);
    tetromino(5);
    pop();
    push();
    translate(3 * QuadSize, QuadSize);
    rotate(radians(90));
    tetromino(3);
    pop();
    push();
    translate(4 * QuadSize, 3 * QuadSize);
    rotate(radians(180));
    tetromino(5);
    pop();
}

function tetromino(m) {
    fill(Colors[m]);
    let t = tetrominos[m];
    quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
    for (let i = 0; i < t.length; i++) {
        push();
        translate(t[i][0] * QuadSize, t[i][1] * QuadSize);
        quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate()
}
