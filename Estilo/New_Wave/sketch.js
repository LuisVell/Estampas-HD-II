let Cortes = new Array(3);
let SizeX = 100
let SizeY = (5*SizeX)/3
let Colors = ['#6d9b45','#f7c654','#5ca8eb'];
let BaseColors = Colors.slice();

function preload() {
    for(let i=0;i<3;i++){
        Cortes[i] = loadImage(
            "Letras/Letra-0" + str(i + 1) + ".svg"
        );
    }
}

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    noStroke()
    Generate()
}

function Save(){
    saveCanvas('New_Wave -'+Date.now()+'.jpg')
}

function Generate() {
    background(255);
    for (let i = 0; i < 8; i++) {
        for (let f = 0; f < 20; f++){
            push();
            let x = (f*(SizeX+20))-SizeX/2
            let y = ((i*(SizeY+20))-SizeY/2)+(f%2==1?SizeY/2:0)
            translate(x,y);
            let colors = Colors.slice(0,2).sort(() => Math.random() - 0.5);
            fill(colors[0])
            rect(0,0,SizeX,SizeY)
            var xV = random(SizeX*0.1,SizeX*0.15)
            var yV = random(SizeY*0.05,SizeY*0.1)
            fill(colors[1])
            rect(xV,yV,SizeX,SizeY)
            let s = int(random(0, Cortes.length));
            tint(Colors[2]);
            image(Cortes[s], xV, yV, SizeX, SizeY);
            pop();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}
