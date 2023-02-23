/* variables fot grid */
const container = document.querySelector('#container');
let amountGrid = 16
let columnArray = []
let rowArray = []

/* variables for buttons */
const clear = document.querySelector('#clear');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const white = document.querySelector('#white');
let color = '';
const colors = ['red','orange','yellow','blue','indigo','lawngreen','lightgreen','cornflowerblue','violet','darksalmon','olive'];

// variables for slider
const slider = document.getElementById('myRange');
let output = document.getElementById('amount');

/* mechanism for grid */
function gridMake(numberGrid,container){
    const squareSize = container.clientWidth / numberGrid;
    for(let i=0; i<numberGrid; i++){
        columnArray[i] = document.createElement('div');
        columnArray[i].classList.add('column');
        columnArray[i].style.width = squareSize + 'px';
        container.appendChild(columnArray[i]);
        let column = columnArray[i];
        for(let j=0; j<numberGrid; j++){
            rowArray[j] = document.createElement('div');
            rowArray[j].classList.add('square');
            rowArray[j].style.height = squareSize + 'px';
            column.appendChild(rowArray[j]);
        }
    }
    window.square = document.querySelectorAll('.square')

    square.forEach(item => {
        item.addEventListener('mouseover', square => {
            square.target.style.backgroundColor = color
        })
    })
}

gridMake(amountGrid,container);

/* mechanism for buttons */
clear.addEventListener('click', () =>{
    square.forEach(item => {
        item.style.backgroundColor = 'rgb(110,110,110)'})
})

black.addEventListener('click', () =>{
    color = 'black'
    container.style.border = '8px solid black'
    clearInterval(myInterval)
})

rainbow.addEventListener('click', () => {
    let colorIndex = 0;
    container.style.borderImage = 'linear-gradient(to bottom, red, orange, yellow, green, blue, indigo) 1';
    myInterval = setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        color = colors[colorIndex];
    }, 500);
});

white.addEventListener('click', () => {
    color = 'white'
    container.style.border = '8px solid azure'
    clearInterval(myInterval)
})

// mechanism for the slider 
output.innerHTML = slider.value + "x" + slider.value;
slider.addEventListener('input', () => {
    output.innerHTML = slider.value + "x" + slider.value;
    amountGrid = slider.value;
    columnArray = []
    rowArray = []
    container.innerHTML = ''
    gridMake(amountGrid,container)
})

