let QuadSize = 60;
let Colors = ["#DDBA2C", "#2372B4", "#AD2B33"];
let BaseColors = Colors.slice();
let ColorsXtra = [];

let ObjBauhaus;

function setup() {
	var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('Draw');
    ObjBauhaus = new Bauhaus(QuadSize,Colors,ColorsXtra);
    strokeWeight(0.5);
    frameRate(0)
    ObjBauhaus.Generate();
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
    ObjBauhaus.Colors = Colors.slice();
    ObjBauhaus.ColorsXtra = ColorsXtra.slice();
    ObjBauhaus.Generate();
}

function Save(){
    saveCanvas('Bauhaus -'+Date.now()+'.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    ObjBauhaus.Generate();
}