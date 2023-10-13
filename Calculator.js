let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let expression = display.value;
  
  if (expression) {
    try {
      let result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
}