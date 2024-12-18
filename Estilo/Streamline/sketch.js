let Mod;
let ModSize = 100;
let Gap = 0;
let BG;
let ModBG;
let Copy = false;
let KeepDraw = false;
let FillX;
let FillY;

function setup() {
    //createCanvas(600, 800);
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
    FillX = width / ModSize + 1;
    FillY = height / ModSize + 1;
    imageMode(CENTER);

    BG = color(0, 0, 0);
    ModBG = color(0, 0, 0);
}

function preload() {
    Mod = loadImage("modulo.svg");
}

function RandomColor(){
    BG = color(random(0, 255), random(0, 255), random(0, 255));
    ModBG = color(random(0, 255), random(0, 255), random(0, 255));
    draw()
}

/*function keyPressed() {
    if (key == "e") {
        BG = color(random(0, 255), random(0, 255), random(0, 255));
        ModBG = color(random(0, 255), random(0, 255), random(0, 255));
    }
    if (key == "r") {
        
    }
    if (key == "d") {
        BG = color(0, 0, 0);
    }
    if (key == "f") {
        ModBG = color(0, 0, 0);
    }
    if (key == "t") {
        ModBG = BG;
    }
    if (key == "y") {
        BG = ModBG;
    }
    if (key == "k") {
        KeepDraw = !KeepDraw;
    }
    if (key == "l") {
        Copy = !Copy;
    }
    Draw();
}*/

function draw() {
    let r = 0;
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
                x * (ModSize + Gap) + ModSize / 2,
                y * (ModSize + Gap) + ModSize / 2
            );
            rotate(radians(r * 90));
            fill(ModBG);
            noStroke();
            rect(-(ModSize / 2), -(ModSize / 2), ModSize, ModSize);
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
    draw()
}