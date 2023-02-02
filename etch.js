let main = document.getElementById('main');

for (let i=1;i<17;i++){
    let row = document.createElement('dib');
    row.classList.add('row' + i)
    for (let e=1;e<17;e++){
        let divs = document.createElement('div');
        divs.classList.add("row");
        row.appendChild(divs);
    }
    main.appendChild(row)
}

let hover = document.querySelectorAll('row');
hover.forEach(e=> e.addEventListener('mouseover',(event)=>
    event.style.backgroundcolor = "red"))