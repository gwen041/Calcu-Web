let total;

let input = document.getElementById('input-field');
let operands = document.querySelector('#btn-components');
let initialValue = 0;


operands.addEventListener('click', (event) => {

  let targetNum = event.target;

  if (targetNum.classList.contains('btn-style')) {

    let key = targetNum.textContent;
    
    //input.value += targetNum.textContent;
    // if (input.value === '' || input.value === null) {
    //   input.value = targetNum.textContent;
    // //console.log(targetNum.textContent);
    //   return;
    // }

    if (key == 'AC') {
      input.value = '';
      return;
    }

    if (key == 'DEL') {
      input.value = input.value.slice(0, -1);
      return;
    }

    input.value += key;

  }
});