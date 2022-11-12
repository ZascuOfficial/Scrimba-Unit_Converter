const numberInputEl = document.getElementById('number-input-el');
numberInputEl.value = 0;

const convertBtn = document.getElementById('convert-btn');

const initialValueEl = document.getElementsByClassName('initial-value');

let feetEl = document.getElementById('feet');
let metersEl = document.getElementById('meters');
let gallonsEl = document.getElementById('gallons');
let litersEl = document.getElementById('liters');
let poundsEl = document.getElementById('pounds');
let kilosEl = document.getElementById('kilos');

function calculateUnit() {
  metersEl.textContent = (numberInputEl.value * 0.304).toFixed(3);
  litersEl.textContent = (numberInputEl.value * 3.785).toFixed(3);
  kilosEl.textContent = (numberInputEl.value * 0.453).toFixed(3);

  feetEl.textContent = (numberInputEl.value * 3.280).toFixed(3);
  gallonsEl.textContent = (numberInputEl.value * 0.264).toFixed(3);
  poundsEl.textContent = (numberInputEl.value * 2.204).toFixed(3);
}

convertBtn.addEventListener('click', function () {

  for (let i = 0; i < initialValueEl.length; i++) {
    initialValueEl[i].textContent = numberInputEl.value;
  }

  calculateUnit();

});