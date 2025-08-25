let CircleBase = 100;
let Minicircle = 40;
let SpaceBtwX = 0;
let SpaceBtwY = 0;
let Colors = ["#000000", "#2845b8", "#b328b8", "#25ad10", "#fc5a03", "#03fcf4"];
let BaseColors = Colors.slice();;
let ColorsXtra = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    Generate();
}

function Save(){
    saveCanvas('Italiano -'+Date.now()+'.jpg')
}

function Generate() {
    background(255, 255, 255);
    for (let x = 0; x < 50; x++) {
        for (let y = 0; y < 50; y++) {
            Modulo(x * (CircleBase + SpaceBtwX), y * (CircleBase + SpaceBtwY));
        }
    }
}

function Modulo(x, y) {
    push();
    let c =  Colors.concat(ColorsXtra);
    while(c[0]=='#000000'){
        c.sort(() => Math.random() - 0.5);
    }
    fill(c[0]);
    translate(x, y);
    circle(0, 0, CircleBase);
    for (let i = 0; i < 2; i++) {
        rotate(radians(int(random(20, 150))));
        fill(c[i + 1]);
        arc(0, 0, Minicircle, Minicircle, radians(0), radians(180));
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate()
}