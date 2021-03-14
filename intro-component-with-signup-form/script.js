//@ts-check
const form = document.getElementById('form');

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error');

  const small = formControl.querySelector('small');
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');

  const small = formControl.querySelector('small');
  small.innerText = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstName = form['first-name'].value;
  const lastName = form['last-name'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (!firstName) {
    addErrorTo('first-name', 'First name cannot be empty');
  } else {
    removeErrorFrom('first-name');
  }

  if (!lastName) {
    addErrorTo('last-name', 'Last name cannot be empty');
  } else {
    removeErrorFrom('last-name');
  }

  if (!email) {
    addErrorTo('email', 'Email cannot be empty');
  } else {
    removeErrorFrom('email');
  }

  if (!password) {
    addErrorTo('password', 'Password cannot be empty')
  } else {
    removeErrorFrom('password');
  }

});
