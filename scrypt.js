/* variables fot grid */
const container = document.querySelector('#container');
let numberGrid = 16
let columnArray = [numberGrid]
let rowArray = [numberGrid]

/* variables for buttons */
const clear = document.querySelector('#clear');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const white = document.querySelector('#white');
let color = '';
const colors = ['red','orange','yellow','blue','indigo','lawngreen','lightgreen','cornflowerblue','violet','darksalmon','olive'];

/* mechanism for grid */
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

const square = document.querySelectorAll('.square')

square.forEach(item => {
    item.addEventListener('mouseover', square => {
        square.target.style.backgroundColor = color
    })
})

/* mechanism for buttons */
clear.addEventListener('click', () =>{
    square.forEach(item => {
        item.style.backgroundColor = 'rgb(110,110,110)'})
})

black.addEventListener('click', () =>{
    color = 'black'
    container.style.border = '8px solid black'
})

rainbow.addEventListener('click', () =>{
    color = colors[Math.floor(Math.random()*10)]
    container.style.borderImage = 'linear-gradient(to bottom, red, orange,yellow,green,blue,indigo) 1'
})

white.addEventListener('click', () => {
    color = 'white'
    container.style.border = '8px solid azure' 
})

