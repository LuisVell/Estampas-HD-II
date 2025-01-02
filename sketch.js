let QuadSize = 60;
let Colors = ["#DDBA2C", "#2372B4", "#AD2B33",'#29fc0d', '#fc0d19',"#2845b8", "#b328b8", "#25ad10", "#fc5a03", "#03fcf4"];
let ColorsXtra = []
let baseFlama = new Array(6);
let streamMod;

function preload() {
    for(let i=0;i<6;i++){
        baseFlama[i] = loadImage(
            "Estilo/Psicodelismo/Flamas/Flama-0" + str(i + 1) + ".svg"
        );
    }
    streamMod = loadImage("Estilo/Streamline/modulo.svg");
}

function setup() {
	var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    strokeWeight(0.5);
    frameRate(.5);
    imageMode(CENTER);
    Generate()
}

function draw() {
    Generate()
}

function Generate(){
    switch (parseInt(random(-1,6))) {
        case 0:
            GenerateBauhaus()
            break;
        case 1:
            GenerateItalian()
            break;
        case 2:
            GeneratePsicodelismo()
            break;
        case 3:
            GenerateStreamline()
            break;
        case 4:
            GenerateUlm()
            break;
        case 5:
            GenerateSwiss()
            break;
    }
    
}

function GenerateBauhaus() {
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
            if (!grid[i][f]&&(1==int(random(0,3)))) {
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

function GenerateItalian() {
    for (let x = 0; x < 50; x++) {
        for (let y = 0; y < 50; y++) {
            let CircleBase = int(random(50,100))
            let Minicircle = int((random(20,40)))
            push();
            let c =  Colors.slice().concat(ColorsXtra.slice());
            c.sort(() => Math.random() - 0.5);
            fill(c[0]);
            translate(x * CircleBase, y * CircleBase);
            circle(0, 0, CircleBase);
            for (let i = 0; i < 2; i++) {
                rotate(radians(int(random(20, 150))));
                fill(c[i + 1]);
                arc(0, 0, Minicircle, Minicircle, radians(0), radians(180));
            }
            pop();
        }
    }
}

function GeneratePsicodelismo() {
    for (let i = 0; i < 100; i++) {
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

function GenerateStreamline() {
    let r = int(random(0,4));
    let FRot;
    for (let y = 0; y < int(height/QuadSize)+5; y++) {
        FRot = r;
        for (let x = 0; x < int(width/QuadSize)+5; x++) {
            push();
            if (r == 5) {
                x += 1;
                r = 3;
                FRot = 4;
            }
            translate(
                (x * QuadSize) + (QuadSize / 2),
                (y * QuadSize) + (QuadSize / 2)
            );
            rotate(radians(r * 90));
            if(3==int(random(0,4))){
                fill(Colors[int(random(Colors.length))]);
                noStroke();
                rect(-(QuadSize / 2), -(QuadSize / 2), QuadSize, QuadSize);
            }
            tint(Colors[int(random(Colors.length))])
            image(streamMod, 0, 0, QuadSize, QuadSize);
            switch (r) {
                case 0:
                    r = 1;
                    break;
                case 1:
                    r = 3;
                    x += 1;
                    break;
                case 2:
                    r = 0;
                    break;
                case 3:
                    r = 2;
                    break;
            }
            pop();
        }
        switch (FRot) {
            case 0:
                r = 3;
                break;
            case 1:
                r = 2;
                break;
            case 2:
                r = 5;
                break;
            case 3:
                r = 1;
                break;
            case 4:
                r = 0;
                break;
        }
    }
}

function GenerateUlm(){
    function EquiTriangle(X, Y, W) {
        push();
        translate(X, Y);
        triangle(0, 0, 0, W, W, 0);
        pop();
    }
    function Unity(X, Y) {
        let TriangleSize = QuadSize/2;
        push(); //Layer 0
        translate(X, Y);
        fill(Colors[int(random(Colors.length))]);
        square(0, 0, QuadSize); //Fundo
        push(); //Layer 1
        translate(QuadSize / 2, QuadSize / 2);
        rotate((PI / 2) * int(random(1, 3)));
        fill(Colors[int(random(Colors.length))]);
        EquiTriangle(22 - QuadSize / 2, 28 - QuadSize / 2, TriangleSize);
        fill(Colors[int(random(Colors.length))]);
        EquiTriangle(
            TriangleSize + 30 - QuadSize / 2,
            TriangleSize + 20 - QuadSize / 2,
            -TriangleSize
        );
        pop(); //L0
        pop(); //L1
    }
    rotate(PI / 4);
    for (let i = -50; i < 50; i++) {
        for (let f = -50; f < 50; f++) {
            if(3!=int(random(0,4))){
                Unity(QuadSize * i, QuadSize * f);
            }
            
        }
    }
}

function GenerateSwiss(){
    let tetrominos = [
        [[1, 0],[0, 1],[1, 1],], //O
        [[0, 1],[0, 2],[0, 3],], //i
        [[1, 0],[1, -1],[2, -1],], //s
        [[1, 0],[1, 1],[2, 1],], //z
        [[1, 0],[2, 0],[1, 1],], //t
        [[0, 1],[0, 2],[1, 2],], //l
        [[0, 1],[0, 2],[-1, 2],], //j
    ];
    let tetriCor = ["#000080","#800000","#008000","#008080","#808000","#800080","#c0c0c0",];

    function tetromino(m) {
        fill(tetriCor[m]);
        let t = tetrominos[m];
        quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
        for (let i = 0; i < t.length; i++) {
            push();
            translate(t[i][0] * QuadSize, t[i][1] * QuadSize);
            quad(0, 0, QuadSize, 0, QuadSize, QuadSize, 0, QuadSize);
            pop();
        }
    }

    function Pattern6() {
        push();
        translate(3 * QuadSize, 0);
        tetromino(6);
        pop();
        push();
        translate(3 * QuadSize, 0);
        rotate(radians(90));
        tetromino(5);
        pop();
        push();
        translate(0, 2 * QuadSize);
        tetromino(2);
        pop();
    }
    
    function Pattern5() {
        push();
        translate(3 * QuadSize, 0);
        tetromino(1);
        pop();
        push();
        translate(0, 7 * QuadSize);
        rotate(radians(-90));
        tetromino(1);
        pop();
        push();
        translate(3 * QuadSize, 6 * QuadSize);
        rotate(radians(-90));
        tetromino(2);
        pop();
        push();
        translate(3 * QuadSize, 6 * QuadSize);
        rotate(radians(180));
        tetromino(4);
        pop();
        push();
        translate(0, 3 * QuadSize);
        rotate(radians(-90));
        tetromino(4);
        pop();
        push();
        translate(0, 5 * QuadSize);
        rotate(radians(-90));
        tetromino(3);
        pop();
        push();
        translate(3 * QuadSize, 3 * QuadSize);
        rotate(radians(180));
        tetromino(5);
        pop();
    }
    
    function Pattern4() {
        push();
        translate(3 * QuadSize, 0);
        tetromino(1);
        pop();
        push();
        translate(0, 2 * QuadSize);
        tetromino(2);
        pop();
        push();
        translate(2 * QuadSize, 2 * QuadSize);
        tetromino(5);
        pop();
        push();
        translate(0, 3 * QuadSize);
        tetromino(0);
        pop();
        push();
        translate(3 * QuadSize, 0);
        rotate(radians(90));
        tetromino(5);
        pop();
    }
    
    function Pattern3() {
        tetromino(1);
        push();
        translate(4 * QuadSize, 0);
        rotate(radians(90));
        tetromino(5);
        pop();
        push();
        translate(3 * QuadSize, QuadSize);
        rotate(radians(90));
        tetromino(3);
        pop();
        push();
        translate(3 * QuadSize, QuadSize);
        tetromino(6);
        pop();
    }
    
    function Pattern2() {
        tetromino(1);
        push();
        translate(QuadSize, 0);
        tetromino(0);
        pop();
        push();
        translate(3 * QuadSize, 0);
        tetromino(1);
        pop();
        push();
        translate(2 * QuadSize, 2 * QuadSize);
        tetromino(5);
        pop();
        push();
        translate(QuadSize, 2 * QuadSize);
        tetromino(6);
        pop();
    }
    
    function Pattern1() {
        tetromino(0);
        push();
        translate(2 * QuadSize, 3 * QuadSize);
        tetromino(0);
        pop();
        push();
        translate(0, 2 * QuadSize);
        tetromino(5);
        pop();
        push();
        translate(3 * QuadSize, QuadSize);
        rotate(radians(90));
        tetromino(3);
        pop();
        push();
        translate(4 * QuadSize, 3 * QuadSize);
        rotate(radians(180));
        tetromino(5);
        pop();
    }


    for (let x = 0; x < int(width / QuadSize) + 1; x += 4) {
        let y = 0;
        while (y < int(height / QuadSize) + 1) {
            if(3!=int(random(0,4))){
                push();
                translate(x * QuadSize, y * QuadSize);
                switch (int(random(-1, 8))) {
                    case 0:
                        Pattern1();
                        y += 5;
                        break;
                    case 1:
                        Pattern2();
                        y += 5;
                        break;
                    case 2:
                        Pattern3();
                        y += 4;
                        break;
                    case 3:
                        Pattern4();
                        y += 5;
                        break;
                    case 4:
                        Pattern5();
                        y += 7;
                        break;
                    case 5:
                        Pattern6();
                        y += 3;
                        break;
                }
                pop();
            }else{
                y+=4
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    Generate();
}