let TriangleSize = 50;
let QuadSize = 100;
let BG = "#fa3e00";
let BaseBG = "#fa3e00";
let Colors = ["#2845b8", "#b328b8", "#25ad10"];
let BaseColors = Colors.slice();
let ColorsXtra = [];

let ObjUlm = new Ulm(TriangleSize,QuadSize,BG,Colors,ColorsXtra);

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(0);
    draw();
}

function AnimSetter(){
    let chckrAnim = document.getElementById("chckrAnimation").checked
    if(chckrAnim){
        frameRate(0.5);
    }else{
        frameRate(0);
    }
}

function draw(){
    ObjUlm.Generate();
}

function Save(){
    saveCanvas('Italiano -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}
