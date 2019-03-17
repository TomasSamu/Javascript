document.addEventListener('DOMContentLoaded', () => {

    let question = new Question('how much?', 'answered');
    let app = document.querySelector('.app'); 
    question.mount(app);

    let question2 = new Question('why?', 'answered');
    question2.mount(app);


});