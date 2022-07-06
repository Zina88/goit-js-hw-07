const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = form.elements;
  if (email.value === '' || password.value === '') {
    alert('All fields are required');
  }
  return console.log({ email: email.value, password: password.value }), event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);
