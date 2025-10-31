let CircleBase = 100;
let Minicircle = 40;
let Colors = ["#000000", "#2845b8", "#b328b8", "#25ad10", "#fc5a03", "#03fcf4"];
let BaseColors = Colors.slice();
let ColorsXtra = [];

let ObjItaliano = new Italiano(CircleBase,Minicircle,Colors,ColorsXtra);

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(0);
    draw();
}

function AnimSetter(){
    let chckrAnim = document.getElementById("chckrAnimation").checked;
    if(chckrAnim){
        frameRate(0.5);
    }else{
        frameRate(0);
    }
}

function draw(){
    ObjItaliano.Colors = Colors.slice();
    ObjItaliano.ColorsXtra = ColorsXtra.slice();
    ObjItaliano.Generate();
}

function Save(){
    saveCanvas('Italiano -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}