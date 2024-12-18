let CircleBase = 100;
let Minicircle = 40;
let SpaceBtwX = 0;
let SpaceBtwY = 0;
let Colors = ["#000000", "#2845b8", "#b328b8", "#25ad10", "#fc5a03", "#03fcf4"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(1);
}

function draw() {
    background(255, 255, 255);
    for (let x = 0; x < 50; x++) {
        for (let y = 0; y < 50; y++) {
            Modulo(x * (CircleBase + SpaceBtwX), y * (CircleBase + SpaceBtwY));
        }
    }
}

function Modulo(x, y) {
    push();
    let c = new Array(4);
    for (let i = 0; i < 3; i++) {
        c[i] = Colors[int(random(Colors.length))];
    } //Checa se realmente ta tudo diferente, ctz q pode ser otimizado
    while (true) {
        for (let i = 0; i < 3; i++) {
            for (let f = 0; f < 3; f++) {
                if (i != f) {
                    if (c[i] == c[f]) {
                        c[i] = Colors[int(random(Colors.length))];
                    }
                }
            }
        }
        let ok = true;
        for (let i = 0; i < 3; i++) {
            for (let f = 0; f < 3; f++) {
                if (i != f) {
                    if (c[i] == c[f]) {
                        ok = false;
                    }
                }
            }
        }
        if (ok) {
            break;
        }
    }
    fill(c[0]);
    translate(x, y);
    circle(0, 0, CircleBase);
    for (let i = 0; i < 2; i++) {
        rotate(radians(int(random(45, 100))));
        fill(c[i + 1]);
        arc(0, 0, Minicircle, Minicircle, radians(0), radians(180));
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    FillX = width / ModSize + 1;
    FillY = height / ModSize + 1;
    draw()
}