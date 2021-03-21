const form = document.getElementById('form');
const email = document.getElementById('email');

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailVal = email.value;
  if (!isValidEmail(emailVal)) {
    form.classList.add('error');

  } else {
    form.classList.remove('error');
    document.body.innerHTML = `Thank you!`;
  }

})