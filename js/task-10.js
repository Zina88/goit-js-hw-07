function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  inputValueEl: document.querySelector('#controls input'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  createBtnEl: document.querySelector('[data-create]'),
  resultInnerValue: document.querySelector('#boxes'),
};

ref.createBtnEl.addEventListener('click', createBoxes);
ref.destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const elementInList = ref.resultInnerValue.childElementCount;
  const value = ref.inputValueEl.value;

  for (let i = elementInList; i < +value + elementInList; i += 1) {
    ref.resultInnerValue.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${i * 10 + 30 + 'px'};
          height: ${i * 10 + 30 + 'px'};
          background-color: ${getRandomHexColor()};
          ">
        </div >`
    );
  }
}

function destroyBoxes() {
  ref.inputValueEl.value = null;
  ref.resultInnerValue.innerHTML = '';
}
