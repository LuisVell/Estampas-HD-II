let TriangleSize = 50;
let QuadSize = 100;
let Colors = ["#2845b8", "#b328b8", "#25ad10"];
let Frames = 20;
let NowFrame = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    NowFrame += 1;
    background(120, 140, 0);
    rotate(PI / 4);
    Unity(100, 100);
    for (let i = -50; i < 50; i++) {
        for (let f = -50; f < 50; f++) {
            Unity(QuadSize * i, QuadSize * f);
        }
    }
}
function EquiTriangle(X, Y, W) {
    push();
    translate(X, Y);
    triangle(0, 0, 0, W, W, 0);
    pop();
}
function Unity(X, Y) {
    push(); //Layer 0
    translate(X, Y);
    fill("#fa3e00");
    square(0, 0, QuadSize); //Fundo
    push(); //Layer 1
    translate(QuadSize / 2, QuadSize / 2);
    rotate((PI / 2) * int(random(1, 3)));
    fill(Colors[int(random(Colors.length))]);
    EquiTriangle(22 - QuadSize / 2, 28 - QuadSize / 2, TriangleSize);
    fill(Colors[int(random(Colors.length))]);
    EquiTriangle(
        TriangleSize + 30 - QuadSize / 2,
        TriangleSize + 20 - QuadSize / 2,
        -TriangleSize
    );
    pop(); //L0
    pop(); //L1
}
