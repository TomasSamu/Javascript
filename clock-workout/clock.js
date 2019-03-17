class Clock {

    constructor(hours, minutes, period)
    {
        this.hours = hours,
        this.minutes = minutes,
        this.period = period
    }

    hourIncrement()
    {
        this.hours++;

        if(this.hours >= 12){
    
          if (this.am_pm === 'PM'){
            this.am_pm = 'AM';
          } else {
            this.am_pm = 'PM';
          }
          this.hours = 0;
          this.update();
          } 
    
          this.update();
    }

    hourDecrement()
    {

    this.hours--;
    if(this.hours <= 0){

        if (this.am_pm === 'AM'){
        this.am_pm = 'PM';
        } else {
        this.am_pm = 'AM';
        }
        this.hours = 12;
        this.update();

        }

        this.update();
    }
    
    render()
    {
   
        this.element = document.createElement('div');
        this.className = 'clock';
        this.element.innerHTML = 
        `  <div class="clock">
            <div class="control">
            <button id="btn-hours-up" class="digit-btn">+</button>
            <div id="digits-hours" class="digits hours">${this.hours}</div>
            <button id="btn-hours-down" class="digit-btn">-</button>
            </div>
            <div class="separator">:</div>
            <div class="control">
            <button id="btn-minutes-up" class="digit-btn">+</button>
            <div id="digits-minutes" class="digits minutes">${this.minutes}</div>
            <button id="btn-minutes-down" class="digit-btn">-</button>
            </div>
            <div class="am-pm">${this.period}</div>
        </div> 
      `
      let btnHoursUp = this.element.querySelector('#btn-hours-up');
      btnHoursUp.addEventListener('click', () => {
        this.hourIncrement();
      
      })
      let btnHoursDown = this.element.querySelector('#btn-hours-up');
      btnHoursDown.addEventListener('click', () => {
        this.hourIncrement();
      
      })

      return this.element;
    }

    mount(parent)
    {
        parent.appendChild(this.render());
    }

    update()
    {
        let hoursDigits = document.querySelector('#digits-hours');
        let minutesDigits = document.querySelector('#digits-minutes');
        let divAmPm = document.querySelector('.am-pm');
      
        hoursDigits.innerHTML = this.hours;
        minutesDigits.innerHTML = this.minutes;
        divAmPm.innerHTML = this.am_pm;
    }


}