let QuadSize = 50;
let Colors = ["#000080","#800000","#008000","#008080","#808000","#800080","#c0c0c0",];
let BaseColors = Colors.slice();

let ObjSwiss

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
    ObjSwiss = new Swiss(QuadSize,Colors,windowWidth,windowHeight);
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
    ObjSwiss.Colors = Colors.slice();
    ObjSwiss.Generate(false);
}

function Save(){
    saveCanvas('Escola Suica -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ObjSwiss.width = windowWidth;
    ObjSwiss.height = windowHeight;
    Generate();
}
