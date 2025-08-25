let Mod;
let ModSize = 100;
let BG = '#000000';
let BGO = '#000000';
let Lines = '#FFFFFF'
let LinesO = '#FFFFFF'
let FillX;
let FillY;

function preload() {
    Mod = loadImage("modulo.svg");
}

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    FillX = width / ModSize + 1;
    FillY = height / ModSize + 1;
    imageMode(CENTER);
    Generate();
}

function Save(){
    saveCanvas('Streamline -'+Date.now()+'.jpg')
}

function Generate() {
    let r = int(random(0,4));
    let FRot;
    background(BG);
    for (let y = 0; y < FillY; y++) {
        FRot = r;
        for (let x = 0; x < FillX; x++) {
            push();
            if (r == 5) {
                x += 1;
                r = 3;
                FRot = 4;
            }
            translate(
                x * (ModSize) + ModSize / 2,
                y * (ModSize) + ModSize / 2
            );
            rotate(radians(r * 90));
            fill(BG);
            noStroke();
            rect(-(ModSize / 2), -(ModSize / 2), ModSize, ModSize);
            tint(Lines)
            image(Mod, 0, 0, ModSize, ModSize);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    FillX = width / ModSize + 1;
    FillY = height / ModSize + 1;
    Generate()
}