let main = document.getElementById('main');

function red(e){
    e.target.classList.add('red')
}

function grid(x,y){
    for (let i=1;i<(x+1);i++){
        let row = document.createElement('div');
        row.classList.add('rows')
        for (let e=1;e<(y+1);e++){
            let divs = document.createElement('div');
            divs.addEventListener('mouseover',red);
            divs.classList.add("row");
            row.appendChild(divs);
        }
    main.appendChild(row)
    };
}

function restart(){
    window.location.reload();
}

let input = parseInt(prompt("What size grid would you like",16));

if (input>100){
    prompt("Try again with lower number",20)
} else if (isNaN(input)){
    prompt("Thats not a Number...THIS is a number",40)
} else {
    grid(input,input)
}