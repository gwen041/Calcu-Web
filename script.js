let total;
const input = document.getElementById('input-field');

function btnOne() {
  if (inputLimit()) return;
  const one = document.getElementById('one');
  input.value += one.textContent; 
}

function btnTwo() {
  if (inputLimit()) return;
  const two = document.getElementById('two');
  input.value += two.textContent; 
}

function btnThree() {
  if (inputLimit()) return;
  const three = document.getElementById('three');
  input.value += three.textContent; 
}

function btnFour() {
  if (inputLimit()) return;
  const four = document.getElementById('four');
  input.value += four.textContent; 
}

function btnFive() {
  if (inputLimit()) return;
  const five = document.getElementById('five');
  input.value += five.textContent; 
}

function btnSix() {
  if (inputLimit()) return;
  const six = document.getElementById('six');
  input.value += six.textContent; 
}

function btnSeven() {
  if (inputLimit()) return;
  const seven = document.getElementById('seven');
  input.value += seven.textContent; 
}

function btnEight() {
  if (inputLimit()) return;
  const eight = document.getElementById('eight');
  input.value += eight.textContent; 
}

function btnNine() {
  if (inputLimit()) return;
  const nine = document.getElementById('nine');
  input.value += nine.textContent; 
}

function btnZero() {
  if (inputLimit()) return;
  const zero = document.getElementById('zero');
  input.value += zero.textContent; 
}

const btn = document.querySelector('#btn-components');

btn.addEventListener('click', (event) => {
  const key = event.target;
  
  if(key.classList.contains('symbol')) {
    if (inputLimit()) return;

    const lastChar = input.value.charAt(input.value.length -1);

    if (lastChar === '+' ||lastChar === '-' ||lastChar === 'x' ||lastChar === '/' || lastChar === '.' ) {
      return;
    } else {
      input.value += key.textContent;
    }
  } 
})

function btnDel() {
  const val = String(input.value);
  let newVal = '';

  for (let i = 0; i < val.length - 1; i++) {
    newVal += val[i];
  }
  input.value = newVal;
}

function clearAll() {
  input.value = '';
}

function compute() {
  const nums = String(input.value);
  
  if (input.value == 'null' || input.value == '' || input.value == 'Enter a value') {
    input.value = 'Enter a value';
  } else {
    total = eval(nums.replaceAll('x', '*'));
    input.value = total;
  } 
}

function getLink() {
  window.open('https://github.com/gwen041', '_blank');
}

function inputLimit() {
  return input.value.length >= 14;
}