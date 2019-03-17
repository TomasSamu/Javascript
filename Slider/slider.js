class Slider {

    constructor(color, value){
        this.color = color;
        this.value = value;
    }

    render(){
        this.element = document.createElement('div');
        this.element.className = 'slider';
        this.element.innerHTML = 
        `
        <div class="scale">
            <div class="bar"></div>
            <div class="knob"></div>
        </div>     
        <div class="value">X</div>
        `

        this.element.querySelector('.scale').addEventListener('click', (event) => {

            let width = event.target.offsetWidth;
            this.value = (event.offsetX / width * 255)
            
            alert(this.value);
        });

        return this.element;
    
    }

    mount(parent){
        parent.appendChild(this.render());
        this.update();
    }

    update(){

        const scaleElm = document.querySelector('.scale');
        const valElm = document.querySelector('.value');
        let width = scaleElm.offsetWidth;
        valElm.innerHTML = width;

        
    }

}