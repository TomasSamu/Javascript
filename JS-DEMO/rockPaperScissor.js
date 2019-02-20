const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
  } else {
    console.log('Error');
  }
   
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else if (randomNumber === 2){
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    
    if (userChoice === computerChoice){
      return 'The game was tie'
    }
    
    if(userChoice === 'rock') {
      if (computerChoice === 'paper') {
          console.log('Computer won!')
      } else{
        console.log('User won!')
      }
    }
    
     if(userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          console.log('Computer won!')
      } else{
        console.log('User won!')
      }
     }
       
     if(userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          console.log('Computer won!')
      } else{
        console.log('User won!')
      }
     } 
  }
  
    const playGame = () => {
       const userChoice = getUserChoice('rock');
       const computerChoice = getComputerChoice();

       console.log(userChoice);
       console.log(computerChoice);

       console.log(determineWinner(userChoice, computerChoice));    
    }
   playGame();
    
  