/* const randInt = (lower, upper) => {
    const spread = Math.random() * (upper -lower);
    return Math.round(spread) + lower;
}

const rollDice = () => {
    return randInt(1,6)
}


let roll1 = rollDice();
let roll1 = rollDice();

alert(roll1);
alert(roll2); */



 const salary = (wage, days, hours) => {
    return wage * days * hours;
}

const taxedSalary = (money, tax) => {
    return money*(1-tax)
}

const taxedSalary2 = (wage, days, hours, tax) => {
    return salary(wage, days, hours)*(1-tax)
}

let varSalary = salary(25, 21, 7.5);
let result = taxedSalary(varSalary, 0.2);

let result2 = taxedSalary2(25, 21, 7.5, 0.2)

console.log(result);
alert(result);



/* let salary = wage*days*hours;
console.log(salary);
alert(salary); */
 */