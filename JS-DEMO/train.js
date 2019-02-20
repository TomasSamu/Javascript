const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

/* console.log(Math.max(...numbers)); */

// While there remain elements to shuffle...
/* const shuffle = () => {

	var currentIndex = numbers.length;
    let temporaryValue;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -=

        temporaryValue = numbers[currentIndex];
        numbers[currentIndex] = numbers[randomIndex];
        numbers[randomIndex] = temporaryValue;
    }
return numbers;
};

shuffle() */

let lastNum = numbers.shift()
console.log(lastNum);
