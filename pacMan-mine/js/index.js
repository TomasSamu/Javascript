
document.addEventListener('DOMContentLoaded', ()=> {
    console.log('page loaded');
    let pacman = new Pacman(0,0,'pista','open', 'right');
    let field = document.querySelector('.field')

    pacman.mount(field)

window.addEventListener('keydown', (e)=> {

    if (e.keyCode === 39) {
        pacman.move('right');
    } else if(e.keyCode === 37){
        pacman.move('left');
    } else if (e.keyCode === 38){
        pacman.move('up');
    } else if (e.keyCode === 40){
        pacman.move('down');
    }

})
})