const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 9;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
       case 'saturday':
        return 10;
        break;
       case 'sunday':
        return 11;
        break;
      }
  }
  
  const getActualSleepHours = () => {
   return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8   ;
    return idealHours * 7;
  }
  
const sleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    let difference = actualSleepHours - idealSleepHours;

    if (actualSleepHours < idealSleepHours) {
        return 'fucking bad. you should sleep more. You are over: ' + difference + ' hours';
    } else{
        return 'you are alright. But sleep more anyway. Your debt is: ' + difference + ' hours';
    }
}

console.log(getIdealSleepHours());
console.log(getActualSleepHours());
console.log(sleepDebt());
  