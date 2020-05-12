const inputEmail = document.querySelector('.form__input--email');
const inputPass = document.querySelector('.form__input--pass');

inputEmail.addEventListener('blur', () => {
  if (inputEmail.value === '') {
    inputEmail.nextElementSibling.classList.remove('form__placeholder--top');
  } else {
    inputEmail.nextElementSibling.classList.add('form__placeholder--top');
  }
})

inputPass.addEventListener('blur', () => {
  if (inputPass.value === '') {
    inputPass.nextElementSibling.classList.remove('form__placeholder--top');
  } else {
    inputPass.nextElementSibling.classList.add('form__placeholder--top');
  }
})
