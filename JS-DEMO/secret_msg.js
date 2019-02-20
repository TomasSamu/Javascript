const secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');

let posToReplace = secretMessage.indexOf('easily');
secretMessage[posToReplace] = 'right';

secretMessage.shift(0);
secretMessage.unshift('Programming');

posToReplace = secretMessage.indexOf('get');

console.log(secretMessage);

secretMessage.splice(posToReplace, 5,"know")

console.log(secretMessage);
