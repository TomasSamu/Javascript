class Pacman {

constructor(xpos, ypos, name, mouth, facing){
    this.xpos = xpos;
    this.ypos = ypos;
    this.name = name;
    this.mouth = mouth;
    this.facing = facing;
}

  move(dir){
      console.log('move start');

    if (this.mouth === 'open'){
        this.mouth = 'closed';
    } else {
        this.mouth = 'open';
    }
    this.facing = dir
    switch (dir){
        case 'right':    
        this.xpos++;
        break;

        case 'left':
        this.xpos--;
        break;

        case 'up':
        this.ypos--;
        break;

        case 'down':
        this.ypos++;
        break;
    }

this.update()
 }

 render(){
    
    this.element = document.createElement('div');
    this.element.className = 'pac boy-active-light';
    this.element.innerHTML = `${this.name}: 0`;

    return this.element;
}

 mount(parent){
     parent.appendChild(this.render());
     this.update()
 }

update(){

    let pacM = document.querySelector('.pac')

    if (this.mouth === 'closed'){
      this.element.style.backgroundPositionX = '85px';
    } else {
    this.element.style.backgroundPositionX = '0px';
    }

    if (this.facing === 'right'){ 
        this.element.style.backgroundPositionY = '0px';
        }else if (this.facing === 'left'){ 
        this.element.style.backgroundPositionY = -85 + 'px';
    } else if (this.facing === 'down'){
        this.element.style.backgroundPositionY = -2*85 + 'px';
    } else if (this.facing === 'up'){
        this.element.style.backgroundPositionY = -3*85 + 'px';
    }

    this.element.style.left = this.xpos * 85 + 'px';
    this.element.style.top = this.ypos * 85 + 'px';
}


//end class
}
