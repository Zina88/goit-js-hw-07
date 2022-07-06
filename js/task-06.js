// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', inputValidatiom);

// const inputValidatiom = () => {
//   inputEl.value.length !== +inputEl.dataset.length
//     ? (inputEl.classList.add('invalid'), inputEl.classList.remove('valid'))
//     : (inputEl.classList.add('valid'), inputEl.classList.remove('invalid'));
// };

const inputEl = document.querySelector('#validation-input');
const checkNumber = +inputEl.dataset.length;

inputEl.addEventListener('blur', inputValidatiom);

function inputValidatiom(event) {
  if (event.currentTarget.value.length === checkNumber) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  }
  inputEl.classList.remove('valid');
  return inputEl.classList.add('invalid');
}
