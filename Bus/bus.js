class Bus{

    constructor(direction, seats){
        this.direction = direction;
        this.stations = [];
        this.seats = seats;
        this.passengers;
        this.last_station;
    }
    
    createRouteTo(){
    
    //*** 2 possible routes as per direction
        container.innerHTML ='';
        if (this.direction === 'toVienna'){
            this.stations = ['Praha', 'Jihlava', 'Brno', 'Breclav', 'Viden']
        }else{
            this.stations = ['Viden', 'Breclav', 'Brno', 'Jihlava', 'Praha']
        }
    //****create elements into page */
        for (let item = 0; item < this.stations.length; item++){
            this.newStation = document.createElement('ul');
            this.newStation.className = 'station';
            this.newStation.innerHTML = (`<li> ${this.stations[item]}</li>`);   
            container.appendChild(this.newStation);
    
            //update initial stations
            curStation.textContent = this.stations[0]
            nextStation.textContent = this.stations[1]
        }
    //*** on bus depart (go button)*/
        btnGo.addEventListener('click', () => {
    
            const nextStationName = document.querySelector('#next').textContent;
            this.drive(nextStationName);    
            });
        }
    
        drive(station){
    
            this.last_station = this.stations.indexOf(station);
             console.log(this.last_station);
    
            if (this.last_station < this.stations.length-1){
    
            curStation.textContent = this.stations[this.last_station];
            nextStation.textContent = this.stations[this.last_station + 1];
    
        }else{ 
            curStation.textContent = `${this.stations[this.last_station]} (final destination)`;
            nextStation.textContent = '';
            btnGo.disabled = true;
        }
    
        }
    
    //end of class
    }
    