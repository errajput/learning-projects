const htmlBox = document.querySelector('#html');
const hiddenListElements = document.querySelectorAll('.hide');

htmlBox.addEventListener('click', () => {
  //   htmlBox.style.color = 'red';

  hiddenListElements.forEach((element) => {
    // element.classList.remove('hide');
    element.classList.toggle('hide');
  });
});
