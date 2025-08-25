let TriangleSize = 50;
let QuadSize = 100;
let BG = "#fa3e00";
let BaseBG = "#fa3e00";
let Colors = ["#2845b8", "#b328b8", "#25ad10"];
let BaseColors = Colors.slice();;
let ColorsXtra = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    Generate();
}

function Save(){
    saveCanvas('Italiano -'+Date.now()+'.jpg')
}

function Generate(){
    push();
    rotate(PI / 4);
    Unity(100, 100);
    for (let i = -50; i < 50; i++) {
        for (let f = -50; f < 50; f++) {
            Unity(QuadSize * i, QuadSize * f);
        }
    }
    pop();
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
        fill(BG);
        square(0, 0, QuadSize); //Fundo
        push(); //Layer 1
            translate(QuadSize / 2, QuadSize / 2);
            rotate((PI / 2) * int(random(1, 3)));
            let colors = Colors.concat(ColorsXtra); //Concatenar aqui não é a melhor coisa, mas o p5 não me ajudou
            fill(colors[int(random(colors.length))]);
            EquiTriangle(22 - QuadSize / 2, 28 - QuadSize / 2, TriangleSize);
            fill(colors[int(random(colors.length))]);
            EquiTriangle(
                TriangleSize + 30 - QuadSize / 2,
                TriangleSize + 20 - QuadSize / 2,
                -TriangleSize
            );
        pop(); //L1
    pop(); //L0
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate()
}
