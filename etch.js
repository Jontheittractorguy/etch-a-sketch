let main = document.getElementById('main');
let bodi = document.getElementById('bodi');
let slide = document.getElementById('gridRange');
let sldis = document.getElementById('slideDisplay');
let eraser = document.getElementById('eraser');
let color = document.getElementById('color');
let cmode = document.getElementById('cmode');
let rainMode = document.getElementById('rainbow');
let reset = document.getElementById('reset');
let outside = false;
let flag = false;
let rainb = false;
let colorMod = true;
let paint = color.value;

rainMode.onclick = () => rainbowMode();
cmode.onclick = () => colorMode();
eraser.onclick = () => erase();
reset.onclick = () => slider(slide.value);
main.onmouseleave = () => out()
slide.onchange = (e) => {
    let x = e.srcElement.value;
    slider(x);
}

// if mouse leaves drawing area
function out(){
        flag = false;
}

// slider
function slider(e){
    let sldis = document.querySelector('#slideDisplay');
    sldis.innerHTML = e + " X " + e;
    reload(e);    
}

// switch to color mode
function colorMode(){
    rainMode.style.backgroundColor = "white";
    rainMode.style.color = "black";
    cmode.style.backgroundColor = "blue";
    cmode.style.color = "white";
    eraser.style.backgroundColor = "white";
    eraser.style.color = "black";
    rainb = false;
    colorMod = true;
}

// switch to rainbow mode
function rainbowMode(){
    rainMode.style.backgroundColor = "blue";
    rainMode.style.color = "white";
    cmode.style.backgroundColor = "white";
    cmode.style.color = "black";
    eraser.style.backgroundColor = "white";
    eraser.style.color = "black";
    rainb = true;
    colorMod = false;
}

function erase(){
    cmode.style.backgroundColor = "white";
    cmode.style.color = "black";
    rainMode.style.backgroundColor = "white";
    rainMode.style.color = "black";
    eraser.style.backgroundColor = "blue";
    eraser.style.color = "white";
    rainb = false;
    colorMod = false;
}

//to make random color
function rainbowColor(){
    let hexVal = 0xff;
    let maxVal = 0xFFFFFF;
    let random = Math.random()*maxVal;
    random = Math.floor(random);
    random = random.toString(16);
    let randColor = random.padStart(6,0);
    return "#" + randColor.toUpperCase();
}

// determine mode
function mode(e){
    if (rainb === true && colorMod=== false){
        paint = rainbowColor();
        draw(e,paint);
    } else if (colorMod === true && rainb === false){
        paint = color.value;
        draw(e,paint)
    } else {
        paint = "";
        draw(e,paint);
    };
};

//
function draw(e,paint){
    let main = document.getElementById('main');
    main.onmousedown = ()=>{
        if (paint === ""){
            e.target.style.borderColor = "black";
        } else { 
            e.target.style.borderColor = paint;
        }
        e.target.style.backgroundColor = paint;
        flag = true;
    }
    main.onmouseup = ()=>{
        flag=false;
    }
    if (flag === true){
        if (paint === ""){
            e.target.style.borderColor = "black";
        } else { 
            e.target.style.borderColor = paint;
        }
        e.target.style.backgroundColor = paint;
    }
}

// make the grid
function grid(x,y){
    for (let i=1;i<(x+1);i++){
        let row = document.createElement('div');
        row.classList.add('rows')
        for (let e=1;e<(y+1);e++){
            let divs = document.createElement('div');
            divs.setAttribute('draggable','false');
            divs.style.backgroundColor = "";
            divs.style.border = " 1px solid black";
            divs.addEventListener('mouseover',mode);
            divs.addEventListener('mousedown',mode);
            divs.classList.add("row");
            row.appendChild(divs);
        }
    main.appendChild(row);
    };
}

function reload(e){
    while (main.firstChild)main.removeChild(main.firstChild);
    if (e === undefined){
        let x = document.getElementById('slider').value;
        console.log(e);
        grid(x,x);
    } else {
        grid(parseInt(e),parseInt(e));
    }
    colorMode();
}

window.onload = ()=> {
    slider(16);
}