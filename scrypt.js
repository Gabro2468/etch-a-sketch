const container = document.querySelector('#container');

let numberGrid = 16
let columnArray = [numberGrid]
let rowArray = [numberGrid]

for(let i=0; i<numberGrid; i++){
    columnArray[i] = document.createElement('div');
    columnArray[i].classList.add('column');
    container.appendChild(columnArray[i]);
    let column = columnArray[i];
    for(let j=0; j<numberGrid; j++){
        rowArray[j] = document.createElement('div');
        rowArray[j].classList.add('square');
        column.appendChild(rowArray[j]);
    }
}