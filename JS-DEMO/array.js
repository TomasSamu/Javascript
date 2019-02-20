/* const menu = document.querySelector('.menu');
let items = ['item1', 'item2','item3']

for (let item of items) {

    let elem = document.createElement('div');
    elem.innerHTML = item;
    menu.appendChild(elem); 

}
 */


 /* SEARCHING 1*/
/*   const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2];
 let count = 0
 let maxCount = 0
  for (let i = 0; i < numbers.length; i++) {

        if (numbers[i + 1] > numbers[i]) {
            count++
            
        } else {

            if (maxCount < count) {
            maxCount = count;
            
            } else {
                count = 0;
            }
        }   
        
    }

console.log(maxCount); */



/* const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

 let avg  = 0
 let sum = 0
 let avfSq = 0

 for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
 }

 avg = sum / (numbers.length);
 avgSq = avg*avg
 console.log(sum)
 console.log(avg)

 for (let i = 0; i < numbers.length; i++) {

    SqNum = (numbers[i] * numbers[i]) - avgSq
 }

 console.log(SqNum);  */



  /* SEARCHING 1*/
  
 const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];
 let count = 0
 let maxCount = 0
  for (let i = 0; i < numbers.length; i++) {

        if (numbers[i + 1] > numbers[i]) {
            count++
            
        } else {

            if (maxCount < count) {
            maxCount = count;
            
            } else {
                count = 0;
            } 

        }  


        
    }

console.log(maxCount);





/* if (maxCount < count) {
    maxCount = count;
    
    } else {
        count = 0;
    } */






