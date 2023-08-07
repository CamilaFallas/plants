import PlantBuilder from '../patterns/builder.js';
import { plantCustomized, updateData } from './customize/potCustomize.js';
import { getImagePath, getPlantImageName, determinePlantName, determinePot, extrasToString } from './getInfo.js';

const plantForm = document.getElementById('plantForm');
const recommendationDiv = document.getElementById('recommendation');
const plantResultDiv = document.getElementById('plantResult');
const clearButton = document.getElementById('clearButton');

function info() {
  document.addEventListener('DOMContentLoaded', () => {
    plantForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(plantForm);

      const placement = formData.get('placement');
      const sunlight = formData.get('sunlight');
      const pets = formData.get('pets');
      const watering = formData.get('watering');
      const style = formData.get('style');
      const selectedExtras = formData.getAll('extras');

      if (!placement || !sunlight || !pets || !watering || !style) {
        alert('Please complete all required fields.');
        return;
      }

      const plantName = determinePlantName(placement, sunlight, pets, watering);
      const plantBuilder = new PlantBuilder().withName(plantName);
      const potOption = determinePot(style, watering);
      plantBuilder.withPotMaterial(potOption);
      plantBuilder.withPotColor(style);
      const potImagePath = getImagePath(potOption, style);
      plantBuilder.withSoilType(sunlight === 'yes' ? 'Composted Soil' : 'Fertilized Soil');
      plantBuilder.withExtras(selectedExtras);
      const extrasList = selectedExtras.map(extra => extrasToString(extra)).filter(Boolean);
      const plant = plantBuilder.build();

      recommendationDiv.style.display = 'block';
      plantResultDiv.innerHTML = `
      <div id="card" class="card">
      <h2 id="title" class="card__title">The perfect plant for you is...</h2>
      <p class="card__title">${plant.name}</p>
      <div class="card__img">
        <img class="card_img-position  potSrc" src="${getImagePath(plant.potMaterial, plant.potColor)}" alt="Pot image">
        ${extrasList.map(extra => `<img class="card_img-position" src="${getImagePath(extra)}" alt="${extra} image">`).join('')}
        <img class="card_img-position soilSrc" src="${getImagePath(plant.soilType)}" alt="Soil image">
        <img class="card_img-position" src="../styles/images/plant-${getPlantImageName(plant.name)}.png" alt="Plant image">
      </div>
      <div class="card-info">
        <div class="line">
          <div>
          <p class="card--font keys">Name</p>
            <p class="card--font keys">Soil</p>
            <p class="card--font keys">Pot</p>
            <p class="card--font keys">Extras</p>
          </div>
          <div>
            <p class="card--font">${plant.name}</p>
            <p class="card--font">${plant.soilType}</p>
            <p class="card--font">${plant.potMaterial} ${plant.potStyle ? `- ${plant.potStyle}` : ''}</p>
            <p class="card--font">${extrasList.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
    <buttom class="btn btn-bg" id="customize-btn">Customize</buttom>
    `;
      clearButton.addEventListener('click', () => {
        plantForm.reset();
        recommendationDiv.style.display = 'none';
        plantResultDiv.innerHTML = '';
      });
      const button = document.getElementById('customize-btn')
      button.addEventListener('click', async (event) => {
        event.preventDefault();
        const prevPlantCustomized = { ...plantCustomized };
        const title = document.getElementById('title');
        const container = document.getElementById('plant-form');
        const getForm = await fetch('../../customize.html');
        const newForm = await getForm.text();
        container.innerHTML = newForm
        title.innerHTML = 'Customize you plant';
        button.innerHTML = 'Check store availability'
        const potElements = document.querySelectorAll('input[name="pot"]');
        const colorElements = document.querySelectorAll('input[name="color"]');
        const decorationElements = document.querySelector('input[name="decoration"]');
        const soilElements = document.querySelectorAll('input[name="soil"]');

        potElements.forEach(element => element.addEventListener('change', updateData));
        colorElements.forEach(element => element.addEventListener('change', updateData));
        decorationElements.addEventListener('change', updateData);
        soilElements.forEach(element => element.addEventListener('change', updateData));

        // Set the form input values to the previous values obtained before fetching the new form
        const colorElement = document.querySelector(`input[name="color"][value="${prevPlantCustomized.color}"]`);
        if (colorElement) {
          colorElement.checked = true;
        }

        const potElement = document.querySelector(`input[name="pot"][value="${prevPlantCustomized.pot}"]`);
        if (potElement) {
          potElement.checked = true;
        }

        const decorationElement = document.querySelector(`input[name="decoration"][value="${prevPlantCustomized.decoration}"]`);
        if (decorationElement) {
          decorationElement.checked = true;
        }

        const soilElement = document.querySelector(`input[name="soil"][value="${prevPlantCustomized.soil}"]`);
        if (soilElement) {
          soilElement.checked = true;
        }

        updateData();

      })
    });
  });
}

export default info;
