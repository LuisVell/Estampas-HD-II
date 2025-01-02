let baseFlama = new Array(6);
let Colors = ['#29fc0d', '#fc0d19'];
let ColorsXtra = []

let anim = false;

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    Generate()
    frameRate(1)
}

function preload() {
    for(let i=0;i<6;i++){
        baseFlama[i] = loadImage(
            "Flamas/Flama-0" + str(i + 1) + ".svg"
        );
    }
}

function Save(){
    saveCanvas('Psicodelismo -'+Date.now()+'.jpg')
}

function draw(){
    if(anim){
        Generate()
    }
}

function Generate() {
    background(255);
    for (let i = 0; i < 600; i++) {
        push();
        translate(random(0, width), random(0, height));
        rotate(radians(random(0, 270)));
        let s = int(random(0, baseFlama.length));
        let colors = (Colors.slice().concat(ColorsXtra.slice())).sort(() => Math.random() - 0.5);
        tint(colors[int(random(0, colors.length))]);
        strokeWeight(0.5);
        image(baseFlama[s], 0, 0);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}
