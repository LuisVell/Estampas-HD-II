function FillColors(){
    let divC = document.getElementById('box-ColorsContainer')
    divC.innerHTML=''
    for(let i=0;i<Colors.length;i++){
        divC.innerHTML+='<input class="btnBaseColors" type="color" value="'+Colors[i]+'" id="OcustomColor-'+String(i)+'" onChange="ColorArrayEdit(1,'+String(i)+')">'
    }
    let div = document.getElementById('box-ColorsXContainer')
    if(div){
        div.innerHTML=''
        for(let i = 0;i<ColorsXtra.length;i++){
            div.innerHTML+='<div class="customColorUnit"><input class="btnBaseColors" id="customColor-'+String(i)+'" onChange="ColorArrayEdit(0,'+String(i)+')" type="color" value="'+ColorsXtra[i]+'"><button class="customColorX" onClick="DeleteColor('+String(i)+')">X</button></div>'
        };
        div.innerHTML+='<button id="btnAddColor" onClick="AddColor()">+</button>'
    }
}

function ColorArrayEdit(f,i){
    let input = document.getElementById((f==1?'O':'')+'customColor-'+String(i))
    if(f==1){
        Colors[i] = input.value
    }else{
        ColorsXtra[i] = input.value
    }
}

function DeleteColor(i){
    ColorsXtra.splice(i, 1)
    FillColors()
}

function AddColor(){
    if(ColorsXtra.length>7){
        return
    }
    ColorsXtra.push('#'+Math.floor(Math.random()*16777215).toString(16))
    FillColors()
}

function Reset_Colors(){
    Colors = BaseColors.slice()
    FillColors()
}
function Del_CustomColors(){
    ColorsXtra = []
    FillColors()
}

window.onload = ()=>{
    FillColors()
}