
let curStation = document.querySelector('#cur');
let nextStation = document.querySelector('#next');
let btnGo = document.querySelector('.button_go');
let radioVien = document.querySelector('#Prg-Vien');
let radioPrg = document.querySelector('#Vien-Prg');
let container = document.querySelector('.stationList')

document.addEventListener('DOMContentLoaded', () => {
    curStation.textContent ='';
    nextStation.textContent='';
   

    radioVien.addEventListener('click',() => {

         btnGo.disabled = false;
        let busVienna = new Bus('toVienna', '80');
        busVienna.createRouteTo();
    }) 

    radioPrg.addEventListener('click', () => {
        btnGo.disabled = false;
        let busPrague = new Bus('toPrague', '80');
        busPrague.createRouteTo();
    })


});






