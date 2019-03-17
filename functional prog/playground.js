const numbers = [15, 4, 11, 27, 56, 10, 4, 7, 14, 25, 66, 33];
const users = ['martha', 'eve', 'johnny', 'thedude', 'onyxx', 'dagesus', 'duckling44'];
const furniture = [
  {
    name: 'Table',
    price: 100,
    available: true,
  },
  {
    name: 'Chair',
    price: 20,
    available: false,
  },
  {
    name: 'Bookshelf',
    price: 55,
    available: true,
  },
  {
    name: 'Sofa',
    price: 1200,
    available: true,
  },
  {
    name: 'Coffeetable',
    price: 45,
    available: false,
  },
  {
    name: 'Bed',
    price: 800,
    available: false,
  },
  {
    name: 'Nightstand',
    price: 12,
    available: true,
  },
];

//MAP 1
let distance_13 = numbers.map(x=>x-13);

//MAP 2)
let square_roots = numbers.map(x=>Math.sqrt(x));


//MAP 3)
let names_length = users.map(x=>x.length);



//MAP 4)
const usersElm = document.querySelector('.users');
users.map(x=>{
    li = document.createElement('li');
    li.textContent = x;
    return li;
}).forEach(li => usersElm.appendChild(li));



//MAP 5)
let prices = furniture.map(x=>x.price);


//FILTER 1)
let odd_nums = numbers.filter(x=> x % 2);

//FILTER 2)
let cheap_furn = furniture.filter(x=> x.price < 200);

//FILTER 3)
let avail_furn = furniture.filter(x=> x.available);

console.log(avail_furn); 

var emptyArray = ['this','array', 'is', 'full'];

emptyArray.forEach()