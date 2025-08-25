let Cortes = new Array(13);
let Colors = ['#2d2b2e', '#975067','#ad9623'];
let BaseColors = Colors.slice();
let ColorsXtra = []

function preload() {
    for(let i=0;i<13;i++){
        Cortes[i] = loadImage(
            "Cortes/Corte-" + str(i + 1).padStart(2, '0') + ".svg"
        );
    }
}

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    Generate()
    frameRate(0)
}

function Save(){
    saveCanvas('Punk -'+Date.now()+'.jpg')
}

function Generate() {
    background(255);
    for (let i = 0; i < 800; i++) {
        push();
        translate(random(0, width), random(0, height));
        rotate(radians(random(0, 270)));
        let s = int(random(0, Cortes.length));
        let colors = (Colors.concat(ColorsXtra)).sort(() => Math.random() - 0.5);
        tint(colors[int(random(0, colors.length))]);
        strokeWeight(0.5);
        image(Cortes[s], 0, 0);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}
