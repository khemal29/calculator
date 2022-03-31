let show = document.querySelector('.tampil');
let hasilAkhir = document.querySelector('.hasil');
let $buttons = document.querySelectorAll('button');
let opPressed = false;
let valOne = [];
let valTwo = [];
let operator = [];
let final = 0;
[...$buttons].map((x) => {
  x.addEventListener('click', function (e) {
    switch (this.innerHTML) {
      case 'C':
        clearDisplay();
        break;
      case 'Del':
        removeNumber();
        break;
      case '+/-':
        makeNegative();
        break;
      case '=':
        makeCalculation();
        break;
      case '+':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '*':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '/':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '-':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;
      default:
        if (valOne.length > 11) {
          alert('No more values beyond 12');
        } else {
          valOne.push(this.innerText);
          show.textContent = valOne.join('');
          console.log(valOne);
        }
        break;
      case '.':
        if (valOne.includes('.')) {
          alert('You cannot use anymore decimals');
        } else {
          valOne.push(this.innerText);
          show.textContent = valOne.join('');
        }
        break;
    }
  });
});
function clearDisplay() {
  show.textContent = '';
  hasilAkhir.textContent = '';
  valOne = [];
  valTwo = [];
  operator = [];
}
function removeNumber(e) {
  valOne.pop();
  show.textContent = valOne.join('');
}
function makeNegative() {
  if (valOne.length < 1) {
    return false;
  } else if (valOne[0] == '-') {
    valOne.shift();
  } else {
    valOne.unshift('-');
  }
  show.textContent = valOne.join('');
}
function makeCalculation() {
  if (valTwo.length > 0 && operator.length !== 0) {
    final = eval(valTwo + operator + valOne.join(''));
    hasilAkhir.textContent = '';
    hasilAkhir.textContent = eval(final).toFixed(2);
    show.textContent = '';
    valTwo = eval(final);
    valOne = [];
  } else if (operator.length == 0) {
    alert('Data Cannot Be Empty!!!');
  } else {
    final = final = eval(valTwo + operator + valOne.join(''));
    console.log('final');
    console.log(final);
    hasilAkhir.textContent = '';
    show.textContent = '';
    hasilAkhir.textContent = eval(final).toFixed(2);
    valTwo = eval(final);
    valOne = [];
  }
}
function storeValue() {
  if (valOne.length == 0 && valTwo.length == 0) {
    return false;
  } else if (valTwo.length > 0) {
    hasilAkhir.textContent = valTwo + ' ' + operator;
  } else if (valTwo.length == 0) {
    valTwo.push(valOne.join(''));
    valOne = [];
    show.textContent = '';
    hasilAkhir.textContent = '';
    hasilAkhir.textContent = valTwo + ' ' + operator;
  }
  hasilAkhir.textContent = valTwo + ' ' + operator;
}