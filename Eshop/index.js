class Product {

    constructor(name,price,quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }

    sell() {

        this.quantity--;
        this.update();
               
    }

    update() {
         this.newElm.querySelector('.quantity').textContent = 'Quantity: ' + this.quantity;
    }

    /******* create fruit details in DOM  *******/
    createFruit(){

        this.newElm = document.createElement('div');
        this.newElm.className = 'fruit';
        this.newElm.innerHTML = (
        `<div class="name">Name: <span> ${this.name}</span></div>
        <div class="price">Price: <span> ${this.price}</span></div>
        <div class="quantity">Quantity: <span> ${this.quantity}</span></div>
        <button class="buy_btn"> BUY</button>`
        );

        const btn = this.newElm.querySelector('.buy_btn');
        btn.addEventListener('click', () => {
            this.sell()
        })

        return this.newElm;


    }
}

const fruits = [
    new Product('apple', '3', '1'),
    new Product('pear', '4', '2'),
    new Product('orange', '5', '2'),
    new Product('lemon', '6', '54'),
    new Product('pineapple', '7', '5'),
    new Product('kiwi', '8', '22'),
    new Product('mango', '9', '77'),
]

    /******* print fruits based on class definition *******/
    document.addEventListener('DOMContentLoaded', () => {
    
    let fruitsList = document.querySelector('.fruits_list');
        
    for (let item of fruits){
        fruitsList.appendChild(item.createFruit());
    }
        
    });

/* 
    render(){
        let buttons = document.querySelectorAll('.buy_btn');
        for (let btn of buttons){

            btn.addEventListener('click', () => {
                console.log(btn);
                this.sell()
            })
            
        }
    } */

/*  document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('.buy_btn')
    button.addEventListener('click', () => {

        sell()
    })

}); */




/* let sumTotal = 0;
const calcItem = (fruit) => {
    let itemPrice = 0;
    itemPrice = fruit.price * fruit.quantity
    console.log(`the price of ${fruit.name} is: ${itemPrice}`)
    return itemPrice;
}


for (let item of fruits) {
    sumTotal = sumTotal + calcItem(item);   
}
console.log(`Total price of fruits is ${sumTotal}`)
 */
