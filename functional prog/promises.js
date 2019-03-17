//EXAMPLE FROM CLASS

/* const deliver = () => {
    return new Promise((resolve, reject) => {
      const package = {
        content: "An awesome bomb",
      }
   
      setTimeout(() => {
        if(Math.random() >= 0.5) {
          resolve(package);
        } else {
          reject("Ooops...")
        }
      }, 5000);
    });
  }

deliver()
  .then(p => console.log(p))
  .catch(err => console.log('Error: ' + err)); */


//EXERCISE 1)
/*  const testNum = (num) =>
{
    return new Promise((resolve, reject) => {

        if(num < 10){
            resolve(num);
        }   else {
            reject('error');
        }
    });
}

testNum(9).then(p=>console.log(p)).catch(err=>console.log('Error: ' + err));  */

//EXERCISE 2)
/* const coinToss = () => 
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (Math.random() <0.33){
                resolve('tails');
            } else if (Math.random() < 0.66){
                resolve('heads');
            } else {
                reject('off the table');
            }
        }, 1000);

    });
}
coinToss().then(x=>console.log(x)).catch(err=>console.log(err)) */




