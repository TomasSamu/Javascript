 class Person {
     constructor(firstName, lastName) {

    this.firstName = firstName
    this.lastName = lastName
     }
 }
 
 const simpsons = [
    {name:'Homer',
    email:'homer.simpsons@gmail.com'},
    {name:'Bart',
    email:'bart.simpsons@gmail.com'},
    {name:'Maggie',
    email:'maggie.simpsons@gmail.com'},
    {name:'Marge',
    email:'marge.simpsons@gmail.com'},
 ];

    const createContact = (simp) => {
    let element = document.createElement('div');
    element.className = 'contact';
    element.innerHTML = (
    `<div class="contact__photo">
      <div class="photo">
        <img class="photo__img" src="img/${simp.name.toLowerCase()}.jpg" alt="${simp.firstName}" />
      </div>
    </div>
    <div class="contact__info">
      <p><strong>Name:</strong>${simp.name} Simpson</p>
      <p><strong>E-mail:</strong> ${simp.email.toLowerCase()}</p>
    </div>`
    );

    return element;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelector('.contacts');

    for(let item of simpsons) {
      contacts.appendChild(createContact(item));
    }
  });


/*   const createContact = (simp) => {
    return  `
    <div class="contact"
    <div class="contact__photo">
      <div class="photo">
        <img class="photo__img" src="img/${simp.name.toLowerCase()}.jpg" alt="${simp.firstName}" />
      </div>
    </div>
    <div class="contact__info">
      <p><strong>Name:</strong>${simp.name} Simpson</p>
      <p><strong>E-mail:</strong> ${simp.email.toLowerCase()}</p>
    </div>
    </div>`

  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelector('.contacts');

    for(let item of simpsons) {
      contacts.innerHTML = createContact(item)
    }
  }); */


/* <div class="contact">
  <div class="contact__photo">
    <div class="photo">
      <img class="photo__img" src="img/homer.jpg" alt="Homer" />
    </div>
  </div>
  <div class="contact__info">
    <p><strong>Name:</strong> Homer Simpson</p>
    <p><strong>E-mail:</strong> homer.simpson@gmail.com</p>
  </div>
</div>

<div class="contact">
  <div class="contact__photo">
    <div class="photo">
      <img class="photo__img" src="img/marge.jpg" alt="Marge" />
    </div>
  </div>
  <div class="contact__info">
    <p><strong>Name:</strong> Marge Simpson</p>
    <p><strong>E-mail:</strong> marge.simpson@gmail.com</p>
  </div>
</div>  */