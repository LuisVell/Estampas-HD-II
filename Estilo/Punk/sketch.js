let Cortes = new Array(13);
let Colors = ['#2d2b2e', '#975067','#ad9623'];
let BaseColors = Colors.slice();
let ColorsXtra = [];

let ObjPunk;

function preload() {
    for(let i=0;i<13;i++){
        Cortes[i] = loadImage(
            "Cortes/Corte-" + str(i + 1).padStart(2, '0') + ".svg"
        );
    }
}

function setup() {
    ObjPunk = new Punk(Cortes,Colors,ColorsXtra);
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
    draw();
    frameRate(0);
}

function AnimSetter(){
    let chckrAnim = document.getElementById("chckrAnimation").checked
    if(chckrAnim){
        frameRate(0.5);
    }else{
        frameRate(0);
    }
}

function draw() {
    ObjPunk.Colors = Colors;
    ObjPunk.ColorsXtra = ColorsXtra;
    ObjPunk.Generate();
}

function Save(){
    saveCanvas('Punk -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}
