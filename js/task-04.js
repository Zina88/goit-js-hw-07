const counters = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

counters.increment.addEventListener('click', onIncrementClick);
counters.decrement.addEventListener('click', onDecrementClick);

function onIncrementClick() {
  counterValue += 1;
  counters.value.textContent = counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  counters.value.textContent = counterValue;
}
