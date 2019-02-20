
/* const acc1 = "000256784";
const acc2 = "000986056";
const acc3 = "001546238";
const acc4 =  "030987456";

let bal1 = "790";
let bal2 = "5600";
let bal3 = "78065";
let bal4 = "120910";

const choice = (abc) => {

    let balance = prompt('what you want to see?')

    if (balance === 'balance') {
        alert (abc);
    } else {
        alert('unknown balance'); 
    }
}

let account_number = prompt('enter your account number')

if (account_number == acc1) {
    choice(bal1);
} else if (account_number == acc2) {
    choice(bal2);
} else if (account_number ==acc3){
    choice(bal3);
} else if (account_number == acc4){
    choice(bal4);
} */



const distance = (a,b) => {
    if (a > b) {
        return a -b;
    } else {
        retrun b - a; 
    }
}

const secret = (c) => {
    return distance (c, c*10);
}

console.log(secret(5));


let id = setInterval(() => {
    console.log('Hey');   
}, 1000)

clearInterval(