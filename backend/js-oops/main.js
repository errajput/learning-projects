const listElement = document.querySelector('ul.list');

const technologies = ['Angular', 'HTML', 'CSS'];

class Technology {
  tech;
  constructor(tech) {
    this.tech = tech;
  }
  getElement() {
    const liElem = document.createElement('li');
    liElem.innerHTML = this.tech;
    return liElem;
  }
}

const techElements = technologies.map(function (tech) {
  return new Technology(tech).getElement();
});

listElement.append(...techElements);

// const tech1 = new Technology('Angular');
// listElement.append(tech1.getElement());

// const tech2 = new Technology('HTML');
// listElement.append(tech2.getElement());

// const liElem2 = document.createElement('li');
// liElem2.innerHTML = 'HTML';
// listElement.append(liElem2);