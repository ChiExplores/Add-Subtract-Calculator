

let result = 0;
let total = document.getElementById('total');
let value = document.getElementById('input');

init();



function init(){
  document.getElementById('input').value = 1;
  total.textContent = 0;
}

function subtract(){
  let parsedValue = parseInt(value.value);
  result -= parsedValue;
  render();
}

function add(){
  let parsedValue = parseInt(value.value);
  result += parsedValue;
  render();
  }
  

function render(){
  if (isNaN(result)) {
    total.textContent = 'NaN';
    total.style.color = 'black';
    return;
  }

  
  total.style.color = result < 0 ? 'red' : 'green';
  if(result === 0) total.style.color = 'black';
  total.textContent = result;
}






 