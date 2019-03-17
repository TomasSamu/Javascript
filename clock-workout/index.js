
document.addEventListener('DOMContentLoaded', () => {

  let clock = new Clock(10,25,'am');
  let app = document.querySelector('.app'); 
  clock.mount(app);
  
/*   let btnHoursUp = document.querySelector('#btn-hours-up');
  btnHoursUp.addEventListener('click', () => {

    clock.hours++;

    if(clock.hours >= 12){

      if (clock.am_pm === 'PM'){
        clock.am_pm = 'AM';
      } else {
        clock.am_pm = 'PM';
      }
      clock.hours = 0;
      clockUpdate(clock);
      } 

    clockUpdate(clock);
  });
 
  let btnHoursDown = document.querySelector('#btn-hours-down');
  btnHoursDown.addEventListener('click', () => {

    clock.hours--;
    if(clock.hours <= 0){
      if (clock.am_pm === 'AM'){
        clock.am_pm = 'PM';
      } else {
        clock.am_pm = 'AM';
      }
      clock.hours = 12;
      clockUpdate(clock);
      } 

    clockUpdate(clock);
  });

  let btnMinutesUp = document.querySelector('#btn-minutes-up');
  btnMinutesUp.addEventListener('click', () => {

    clock.minutes++;
    if(clock.minutes >= 59){
      clock.hours++;
      clock.minutes = 0;
      clockUpdate(clock);
      } 

    clockUpdate(clock);
  });

  let btnMinutesDown = document.querySelector('#btn-minutes-down');
  btnMinutesDown.addEventListener('click', () => {

    clock.minutes--;
    if(clock.minutes <= 0){
      clock.hours--;
      clock.minutes = 59;
      clockUpdate(clock);
      } 

    clockUpdate(clock);
  }); */

});