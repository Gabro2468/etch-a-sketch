const container = document.querySelector('#container');

let numberGrid = 16
let columnArray = [numberGrid]
let rowArray = [numberGrid]

for(let i=0; i<numberGrid; i++){
    columnArray[i] = document.createElement('div');
    columnArray[i].classList.add('column')
    container.appendChild(columnArray[i]);
}