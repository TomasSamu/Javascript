document.addEventListener('DOMContentLoaded', () => {

let plusElm = document.querySelector('.btn-plus')
let minusElm = document.querySelector('.btn-minus')
let knobElm = document.querySelector('.knob')
let countElm = document.querySelector('#counter')


let counter = countElm.textContent

  plusElm.addEventListener('click', () => {

    if (!isMax(counter)) { 
      console.log('bad')

      counter++;
      createHTML();
     } 

  })

  minusElm.addEventListener('click', () => {

    if (!isMin(counter)){
      counter--
      createHTML();
    }

  })

  const createHTML = () => {
    countElm.textContent = counter;
    knobElm.style.width = counter*10 + '%';
  
  }

});

const isMax = (cnt) => {
  if (cnt === 10){

    return true

  } else {
    return false
}
}  

const isMin = (cnt) => {
  if (cnt === 0){

    return true

  } else {
    return false
}
}  
