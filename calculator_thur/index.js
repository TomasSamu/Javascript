

let number = 0;
let op = null;
let result = 0;


const binOp = (symbol) => {

    const input = document.querySelector('.numInp');
    result = parseInt(input.value);

    equals()
    
     input.focus();
     input.setSelectionRange(0, input.value.length);
    
     op = symbol
     console.log('cfg')

}

const equals = () => {

    const input = document.querySelector('.numInp');
    number = parseInt(input.value);

    switch (op) {

        case '+':
        result += number
        break;

        case '-':
        result -= number
        break;

        case '*':
        result *= number
        break;

        case '/':
        result /= number
        break;

        default:
        result = number;
    }

    input.value = result;
}
    
 document.addEventListener('DOMContentLoaded', () => {

    const btnPlus = document.querySelector('#btn-plus');
    btnPlus.addEventListener('click', () => {
        binOp('+');
    });

    const btnMinus = document.querySelector('#btn-minus')
    btnMinus.addEventListener('click', () => {
        binOp('-');
    });

    const btnMult = document.querySelector('#btn-mult')
    btnMult.addEventListener('click', () => {
        binOp('*');
    })

    const btnDiv = document.querySelector('#btn-div')
    btnDiv.addEventListener('click', () => {
        binOp('/');
    });

});




