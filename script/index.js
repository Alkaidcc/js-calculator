const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const display_top = document.querySelector('.top-display');
const display_bottom = document.querySelector('.bottom-display');
const key_clear = document.querySelector('#key-ac')
const key_equal = document.querySelector('#key-equal')
const key_divide = document.querySelector('#key-div')
const key_multiply = document.querySelector('#key-mul')
const key_subtract = document.querySelector('#key-sub')
const key_add = document.querySelector('#key-add')

operands.forEach(operand => {
  operand.addEventListener('click', function () {
    if (['+', '-', '×', '/'].includes(display_bottom.innerHTML)) {
      display_bottom.innerHTML = this.innerHTML;
    } else {
      display_bottom.innerHTML += this.innerHTML;
    }
    display_top.innerHTML += this.innerHTML;
  });
})
operators.forEach(operator => {
  operator.addEventListener('click', function () {
    if (['+', '-', '×', '/'].includes(display_top.innerHTML.substring(display_top.innerHTML.length - 1))) {
      display_top.innerHTML = display_top.innerHTML.replace(/[\+\-×/]/g, this.innerHTML);
    } else {
      display_top.innerHTML += this.innerHTML;
    }
    display_bottom.innerHTML = this.innerHTML;
  });
})
key_clear.addEventListener('click', function () {
  display_top.innerHTML = '';
  display_bottom.innerHTML = '';
})