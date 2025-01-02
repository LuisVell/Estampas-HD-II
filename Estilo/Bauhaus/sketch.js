let QuadSize = 60;
let Colors = ["#DDBA2C", "#2372B4", "#AD2B33"];
let ColorsXtra = []

let anim = false;


function setup() {
	var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    strokeWeight(0.5);
    Generate();
    frameRate(1)
}

function draw() {
    if(anim){
        Generate()
    }
}

function Save(){
    saveCanvas('Bauhaus -'+Date.now()+'.jpg')
}

function Generate() {
    //Grid
    ///vazio
    let grid = [];
    for (let i = 0; i < int(height/QuadSize)+1; i++) {
        let subList = [];
        for (let f = 0; f < int(width / QuadSize)+1; f++) {
            subList.push(false);
        }
        grid.push(subList);
    } ///Fill
    for (let i = 0; i < grid.length; i++) {
        for (let f = 0; f < grid[i].length; f++) {
            if (!grid[i][f]) {
                let colors = (Colors.slice().concat(ColorsXtra.slice())).sort(() => Math.random() - 0.5);
                push();
                translate(f * QuadSize, i * QuadSize);
                fill(colors[0]);
                let quadSize = QuadSize; //Quadrado Maior
                if (int(random(0, 20)) == 0) {
                    if (i+1 < grid.length && f+1 < grid[i].length) {
                        if (
                            !(
                                grid[i][f+1] &&
                                grid[i+1][f+1] &&
                                grid[i][f]
                            )
                        ) {
                            grid[i][f+1]= true;
                            grid[i+1][f+1]= true;
                            grid[i+1][f]=true;
                            quadSize = QuadSize * 2;
                        }
                    }
                }
                quad(0, 0, quadSize, 0, quadSize, quadSize, 0, quadSize);
                if (int(random(0, 5)) == 0) {
                    let direc = int(random(1, 4));
                    fill(colors[1]);
                    let xf = quadSize;
                    let yf = 0;
                    switch (direc) {
                        case 2:
                            xf = quadSize;
                            yf = quadSize;
                            break;
                        case 3:
                            xf = 0;
                            yf = quadSize;
                            break;
                        case 4:
                            xf = 0;
                            break;
                    }
                    if (int(random(0, 2)) == 0) {
                        Triangle(xf, yf, quadSize, direc);
                    } else {
                        Arc(xf, yf, quadSize, direc);
                    }
                }
                pop();
                grid[i][f] = true;
            }
        }
    }
}

function Triangle(x, y, l, d) {
    push();
    translate(x, y);
    rotate(radians(d * 90));
    triangle(0, 0, 0, l, l / 2, l / 2);
    pop();
}

function Arc(x, y, l, d) {
    push();
    translate(x, y);
    ellipseMode(CENTER);
    rotate(radians(d * 90));
    arc(0, 0, l * 2, l * 2, radians(0), radians(90), PIE);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}