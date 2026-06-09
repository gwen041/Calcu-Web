let total;
let input = document.getElementById('input-field');

function btnOne() {
  const one = document.getElementById('one');
  input.value += one.textContent; 
}

function btnTwo() {
  const two = document.getElementById('two');
  input.value += two.textContent; 
}

function btnThree() {
  const three = document.getElementById('three');
  input.value += three.textContent; 
}

function btnFour() {
  const four = document.getElementById('four');
  input.value += four.textContent; 
}

function btnFive() {
  const five = document.getElementById('five');
  input.value += five.textContent; 
}

function btnSix() {
  const six = document.getElementById('six');
  input.value += six.textContent; 
}

function btnSeven() {
  const seven = document.getElementById('seven');
  input.value += seven.textContent; 
}

function btnEight() {
  const eight = document.getElementById('eight');
  input.value += eight.textContent; 
}

function btnNine() {
  const nine = document.getElementById('nine');
  input.value += nine.textContent; 
}

function btnZero() {
  const zero = document.getElementById('zero');
  input.value += zero.textContent; 
}

function btnPoint() {
  const point = document.getElementById('point');
  input.value += point.textContent;
}

function btnDel() {
  let val = String(input.value);
  let newVal = '';

  for (let i = 0; i < val.length - 1; i++) {
    newVal += val[i];
  }
  input.value = newVal;
}

function clearAll() {
  input.value = '';
}

function add() { input.value += "+"; }
function minus() { input.value += '-'; }
function multiply() { input.value += 'x'; }
function divide() { input.value += '/'; }

function compute() {
  let nums = String(input.value);
  
  if (input.value != 'null' || input.value != '') {
    total = eval(nums.replace('x', '*'));
    input.value = total;
  }
}