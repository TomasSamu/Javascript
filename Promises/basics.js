//EXERCISE 1
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0){
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  }
  
  const orderSunglasses = () => new Promise(myExecutor);
  
  let orderPromise = orderSunglasses();
  console.log(orderPromise);

  //EXERCISE 2
  console.log("This is the first line code in app.js.");  

  const usingSTO = () => {
    console.log("This line of code will log to the console last.");
  };
  
  setTimeout(usingSTO, 100);
  
  console.log("This is the last line of code in app.js.");


//EXERCISE 3
const prom = new Promise((resolve, reject) => {
    resolve('Yay!');
  });
  
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  prom.then(handleSuccess); //prints Yay!

  









