let WhatToShow = [0,1,2,3,4,5,6,7]
let WhatToShowBase = WhatToShow.slice()

let NewCortes = new Array(3);
let NewSizeX = 100;

let PsicoFlama = new Array(6);
let PunkCortes = new Array(13);
let StreamForm

let ObjBauhaus = new Bauhaus(60,["#DDBA2C", "#2372B4", "#AD2B33"],[])
let ObjItaliano = new Italiano(100,40,["#000000", "#2845b8", "#b328b8", "#25ad10", "#fc5a03", "#03fcf4"],[])
let ObjNewWave
let ObjPsico
let ObjPunk
let ObjStream
let ObjSwiss
let ObjUlm


function preload() {
    //New Wave
    for(let i=0;i<3;i++){
        NewCortes[i] = loadImage(
            "Estilo/New_Wave/Letras/Letra-0" + str(i + 1) + ".svg"
        );
    }
    ObjNewWave = new NewWave(NewCortes,NewSizeX,(5*NewSizeX)/3,['#6d9b45','#f7c654','#5ca8eb'])
    //Psicodelismo
    for(let i=0;i<6;i++){
        PsicoFlama[i] = loadImage(
            "Estilo/Psicodelismo/Flamas/Flama-0" + str(i + 1) + ".svg"
        );
    }
    ObjPsico = new Psicodelismo(PsicoFlama,['#29fc0d', '#fc0d19'],[])
    //Punk
    for(let i=0;i<13;i++){
        PunkCortes[i] = loadImage(
            "Estilo/Punk/Cortes/Corte-" + str(i + 1).padStart(2, '0') + ".svg"
        );
    }
    ObjPunk = new Punk(PunkCortes,['#2d2b2e', '#975067','#ad9623'],[])
    //StreamLine
    StreamForm = loadImage("Estilo/Streamline/modulo.svg") 
}

function setup() {
	var cnv = createCanvas(windowWidth,windowHeight)
    cnv.parent('Draw')
    //Streamline (necessario aqui para pegar o tamnho certo do canva)
    ObjStream = new Streamline(StreamForm,100,'#000000','#FFFFFF',(width/100 + 1),(height/100 + 1))
    //Swiss
    ObjSwiss = new Swiss(50,["#000080","#800000","#008000","#008080","#808000","#800080","#c0c0c0",],width,height);
    //Ulm
    ObjUlm = new Ulm(50,100,"#fa3e00",["#2845b8", "#b328b8", "#25ad10"],[])
    frameRate(0.5)
    draw()
}

function Select(s){
    if(s>-1){
        WhatToShow = s
    }else{
        WhatToShow = WhatToShowBase
    }
}

function draw() {
    let r = WhatToShow
    let complete = false
    if(Array.isArray(WhatToShow)){
        r = WhatToShow[Math.floor(Math.random() * WhatToShow.length)]
        complete = true
    }
    switch (r) {
        case 0:
            ObjBauhaus.Generate(complete)
            break;
        case 1:
            ObjSwiss.Generate(complete,undefined,false)
            break;
        case 2:
            ObjStream.Generate(complete,undefined,!complete)
            break;
        case 3:
            ObjUlm.Generate(complete,undefined,false)
            break;
        case 4:
            ObjItaliano.Generate(complete,undefined,!complete)
            break;
        case 5:
            ObjPsico.Generate(complete,undefined,false)
            break;
        case 6:
            ObjNewWave.Generate(complete,undefined,!complete)
            break;
        case 7:
            ObjPunk.Generate(complete,undefined,false)
            break;
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    draw();
}