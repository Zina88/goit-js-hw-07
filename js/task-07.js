const inputRangeRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', handleInput);

inputTextRef.style.fontSize = inputRangeRef.value + 'px';

function handleInput() {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
}
