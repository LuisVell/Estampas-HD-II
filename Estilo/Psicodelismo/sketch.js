let baseFlama = new Array(6);
let Colors = ['#29fc0d', '#fc0d19'];
let BaseColors = Colors.slice();
let ColorsXtra = [];

let ObjPsicodelismo;

function preload() {
    for(let i=0;i<6;i++){
        baseFlama[i] = loadImage(
            "Flamas/Flama-0" + str(i + 1) + ".svg"
        );
    }
}

function setup() {
    ObjPsicodelismo = new Psicodelismo(baseFlama,Colors,ColorsXtra);
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
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

function draw() {
    ObjPsicodelismo.Colors = Colors;
    ObjPsicodelismo.ColorsXtra = ColorsXtra;
    ObjPsicodelismo.Generate();
}

function Save(){
    saveCanvas('Psicodelismo -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}
