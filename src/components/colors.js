// Importación del Observer y otras dependencias
import Observer from "../patterns/observer.js";
import { state, colors } from "../patterns/config.js";

// Crear una instancia del Observer
const ObserverColor = new Observer();
// Obtener los colores del estado actual
const colorState = state[state.color];

function renderColor() {
  const containerColors = document.getElementById('containerColors');
  let input = '';
  colors.forEach(color => {
    input +=
      `
    <div> 
      <input data-id="${color}" class="color-option ${color}" type="radio" value="${color}" name="pot-color">
      <label for="${color}">${color}</label>
    </div>
    `;
  })
  containerColors.insertAdjacentHTML('afterbegin', input);
};

function eventColorInput() {
  const inputColor = document.querySelectorAll('.color-option');

  inputColor.forEach(input => {
    input.addEventListener('change', function (event) {
      const color = event.currentTarget.dataset.id;
      ObserverColor.notify(color);
    })
  })
}

function initColor() {
  renderColor();
  eventColorInput();
}

export { initColor, ObserverColor };
