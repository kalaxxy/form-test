const registrationForm = document.querySelector('.form');
const sendForm = document.querySelector('.form__submit');
const errorEmail = document.querySelector('.form__error');

sendForm.addEventListener('click', e => {
  e.preventDefault();

  const formData = new FormData(registrationForm);
  formData.append("email", registrationForm.elements.email.value);
  formData.append("pass", registrationForm.elements.pass.value);
  formData.append("currency", registrationForm.elements.currency.value);
  formData.append("agreement", registrationForm.elements.agreement.value);
  console.log(formData);

  if(validateForm(registrationForm)) {
    console.log('форма валидна');

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '#');
    xhr.send(formData);
    console.log('форма отправлена');
    
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateFormElem(form.elements.email)) {
    valid = false;
  }

  if (form.elements.email.value === 'samplemail@mail.com') {
    errorEmail.style.display = 'flex';
    form.elements.email.style.borderColor = '#E15433';
    valid = false;
  } else {
    errorEmail.style.display = 'none';
  }

  if (!validateFormElem(form.elements.pass)) {
    valid = false;
  }

  if (!validateFormElem(form.elements.agreement)) {
    valid = false;
  }

  return valid;
}

function validateFormElem(formElem) {
  if (!formElem.checkValidity()) {
    formElem.previousElementSibling.textContent = formElem.validationMessage;
    formElem.previousElementSibling.style.display = 'block';
    formElem.style.borderColor = '#E15433';

    return false;
  } else {
    formElem.previousElementSibling.textContent = '';
    formElem.previousElementSibling.style.display = 'none';
    formElem.style.borderColor = '#20A86B';
    
    return true;
  }
}

