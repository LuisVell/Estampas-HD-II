let Cortes = new Array(3);
let SizeX = 100;
let SizeY = (5*SizeX)/3;
let Colors = ['#6d9b45','#f7c654','#5ca8eb'];
let BaseColors = Colors.slice();

let ObjNewWave;

function preload() {
    for(let i=0;i<3;i++){
        Cortes[i] = loadImage(
            "Letras/Letra-0" + str(i + 1) + ".svg"
        );
    }
}

function setup() {
    ObjNewWave = new NewWave(Cortes,SizeX,SizeY,Colors);
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
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
    ObjNewWave.Colors = Colors;
    ObjNewWave.Generate();
}

function Save(){
    saveCanvas('New_Wave -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}
