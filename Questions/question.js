class Question
{
    constructor(text, state){

        this.text = text;
        this.state = state;
        this.vote = 0;
    }

    render()
    {
        this.element = document.createElement('div');
        this.className = 'Questions'
        this.element.innerHTML =
        `
        <div class="questions">
            <h2>Question:</h2>
            <h3>text: </h3>
            <p>${this.text}</p>
            <h4>state: </h4>
            <p>${this.state}</p>
            <button class="btn-up" type="button">UpVote</button>
            <button class="btn-down" type="button">DownVote</button>
        </div>
        `
            let btnUp = this.element.querySelector('.btn-up');
            btnUp.addEventListener('click', ()=>{

            this.vote++;
            console.log(this.vote);

            });

            let btnDown = this.element.querySelector('.btn-down');
            btnDown.addEventListener('click', ()=>{

            this.vote--;
            console.log(this.vote);

            });
        
        return this.element;
    }

    mount(parent)
    {
        parent.appendChild(this.render());
    }
}