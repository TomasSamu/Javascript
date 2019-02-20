 /* ------- For loop example --------- */
/* const reverse = (str) => {

   let newStr = "";
   for(let i = str.length-1; i >= 0; i--){
    newStr = newStr + str[i];
   }
       
return newStr;
} */


/* -------- find string in array ----------------*/

/* const reverse = (str) => {

    let newStr = "";

        let arr = "My name is tomas"

        if (arr.includes(str)) {
            newStr = str;
        }

        return newStr;
  }
    
 console.log(reverse('tomas')); */


 /* -------------- convert and sum numbers --------------*/

/*  let myNums = ['1','2','3','4']

 const sumNums = (arr) => {

    let sumTotal = 0;
    for(let i = 0; i <= arr.length-1; i++) {
    
    let num = parseInt(arr[i])

    sumTotal += num
    }   

    return sumTotal
 }

 console.log(sumNums(myNums)); */


 /* let myNums = ['1','2','3','-5','8','-4'];

 const sumPositive = (arr) => {
   let sumTotal = 0;
    for(i = 0; i <= arr.length - 1; i++) {

        let num = parseInt(arr[i]);

        if (arr[i] > 0){

            sumTotal +=num;
        }   
    }

    return sumTotal;
 }

 console.log(sumPositive(myNums)); */

let myNums = ['1','2','3','-5','8','-4'];

 const sumPositive = (arr) => {

   let sumTotal = 0;
    for(i = 0; i <= arr.length - 1; i++) {

        let num = parseInt(arr[i]);

        if (arr[i] > 0){
            sumTotal +=num;
        }   
    }
    return sumTotal;
 }
 console.log(sumPositive(myNums));


 

