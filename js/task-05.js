const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputFocus);

function onInputFocus(event) {
  if (event.currentTarget.value === '') {
    refs.output.textContent = 'Anonymous';
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
