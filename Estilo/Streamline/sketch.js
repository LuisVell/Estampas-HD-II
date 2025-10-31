let Mod;
let ModSize = 100;
let BG = '#000000';
let BGO = '#000000';
let Lines = '#FFFFFF';
let LinesO = '#FFFFFF';

let ObjStreamline;

function preload() {
    Mod = loadImage("modulo.svg");
}

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
    ObjStreamline = new Streamline(Mod,ModSize,BG,Lines, width / ModSize + 1, height / ModSize + 1);
    frameRate(0);
    draw();
}

function draw() {
    ObjStreamline.BG = BG;
    ObjStreamline.Lines = Lines;
    ObjStreamline.Generate();
}

function Save(){
    saveCanvas('Streamline -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ObjStreamline.FillX = width / ModSize + 1;
    ObjStreamline.FillY = height / ModSize + 1;
    draw();
}