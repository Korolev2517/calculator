const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operators');
const ac = document.querySelector('.ac');
const del = document.querySelector('.del');
const plusOrMinus = document.querySelector('.plusOrMinus');
const percent = document.querySelector('.percent');

let firstValue = '';
let secondValue = '';
let result = '';
let operator = '';
display.innerHTML = '0';


// Присваиваем значение для первого и второго числа и выводим на экран
numbers.forEach((number) => {
  number.addEventListener('click', (el) => {
    if (!secondValue && !operator) {
      firstValue += el.target.value;
      display.innerHTML = '';
      display.innerHTML = firstValue;
      if (firstValue.length > 3) {
        firstValue.slice(0, -1)
      }
      console.log('firstValue: ', firstValue);
    } else {
      secondValue += el.target.value;
      display.innerHTML = firstValue + operator + secondValue;
      console.log('secondValue: ', secondValue);
    }
  })
});

// Определяем какая из математических операций задана и выводим на экран
operators.forEach((op) => {
  op.addEventListener('click', (el) => {
    if (firstValue !== '') {
      operator = el.target.value;
      display.innerHTML += operator;
      console.log(operator)
    }
  })
});

// Производим математическую операцию
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
  if (Number.isInteger(result)) {
    display.innerHTML = result;
  } else {
    display.innerHTML = result.toFixed(1);
  }
  console.log('result: ', result)
  firstValue = result;
  secondValue = '';
});

// Сбрасываем все значения переменных и математических операций
ac.addEventListener('click', () => {
  firstValue = '';
  secondValue = '';
  operator = '';
  result = '';
  display.innerHTML = '0';
});

// Посимвольное удаление
del.addEventListener('click', () => {
  if (!operator) {
    firstValue = firstValue.slice(0, -1);
    display.innerHTML = firstValue;
  } else {
    secondValue = secondValue.slice(0, -1);
    display.innerHTML = firstValue + operator + secondValue;
  }
})

// Изменение операнда с отрицательного на положительного и наоборот
plusOrMinus.addEventListener('click', () => {
  if (firstValue !== '') {
    display.innerHTML = -firstValue;
    firstValue = display.innerHTML;
    console.log('firstValue: ', firstValue)
  } else if (firstValue !== '' && secondValue !== '' && operator !== '') {
    result = -result;
  }
})

// Вычисление процентов
percent.addEventListener('click', () => {
  if (firstValue !== '') {
    display.innerHTML = firstValue / 100;
    firstValue = display.innerHTML;
    console.log('firstValue: ', firstValue)
  } else if (firstValue !== '' && secondValue !== '' && operator !== '') {
    result = result / 100;
  }
})


