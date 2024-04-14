const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operators');
const ac = document.querySelector('.ac');
const del = document.querySelector('.del');
const plusOrMinus = document.querySelector('.plusOrMinus');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

let firstValue = '';
let secondValue = '';
let result = '';
let operator = '';
display.innerHTML = '0';

numbers.forEach((number) => {
  number.addEventListener('click', (el) => {
    if (!secondValue && !operator) {
      firstValue += el.target.value;
      display.innerHTML = '';
      display.innerHTML = firstValue;
      console.log('firstValue: ', firstValue);
    } else {
      secondValue += el.target.value;
      display.innerHTML = firstValue + operator + secondValue;
      console.log('secondValue: ', secondValue);
    }
  })
});

operators.forEach((op) => {
  op.addEventListener('click', (el) => {
    if (firstValue !== '') {
      operator = el.target.value;
      display.innerHTML += operator;
      console.log(operator)
    }
  })
});

equals.addEventListener('click', () => {
  switch (operator) {
    case '+':
      result = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case '-':
      result = parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case '*':
      result = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case '/':
      result = parseFloat(firstValue) / parseFloat(secondValue);
      break;
    default:
      console.log('Ошибка')
  }
  display.innerHTML = result;
});

ac.addEventListener('click', () => {
  firstValue = '';
  secondValue = '';
  operator = '';
  result = '';
  display.innerHTML = '0';
});

del.addEventListener('click', () => {
  if (!operator) {
    firstValue = firstValue.slice(0, -1);
    display.innerHTML = firstValue;
  } else {
    secondValue = secondValue.slice(0, -1);
    display.innerHTML = firstValue + operator + secondValue;
  }
})