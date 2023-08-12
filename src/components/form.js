import PlantBuilder from '../patterns/builder.js';
// eslint-disable-next-line import/no-cycle
import {
  updateSoilData,
  updatePlantData,
  updateData,
  updateExtrasData,
} from './customize/updateInfo.js';
import {
  getImagePath,
  getPlantImageName,
  determinePlantName,
  determinePot,
  extrasToString,
} from './getInfo.js';

const plantForm = document.getElementById('plantForm');
const recommendationDiv = document.getElementById('recommendation');
const plantResultDiv = document.getElementById('plantResult');
const clearButton = document.getElementById('clearButton');
const plantData = {
  name: '',
  potMaterial: '',
  potColor: '',
  soilType: '',
  potStyle: '',
  extrasList: [],
};

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
        // eslint-disable-next-line no-alert
        alert('Please complete all required fields.');
        return;
      }

      const plantName = determinePlantName(placement, sunlight, pets, watering);
      const plantBuilder = new PlantBuilder().withName(plantName);
      const potOption = determinePot(style, watering);
      plantBuilder.withPotMaterial(potOption);
      plantBuilder.withPotColor(style);
      // const potImagePath = getImagePath(potOption, style);
      plantBuilder.withSoilType(
        sunlight === 'yes' ? 'Composted Soil' : 'Fertilized Soil',
      );
      plantBuilder.withExtras(selectedExtras);
      const extrasList = selectedExtras
        .map((extra) => extrasToString(extra))
        .filter(Boolean);
      const plant = plantBuilder.build();

      recommendationDiv.style.display = 'block';
      plantResultDiv.innerHTML = `
      <div id="card" class="card">
      <h2 id="title" class="card__title">The perfect plant for you is...</h2>
      <p class="card__title">${plant.name}</p>
      <div class="card__img">
        <img class="card_img-position  potSrc" src="${getImagePath(
          plant.potMaterial,
          plant.potColor,
        )}" alt="Pot image">
        ${extrasList
          .map(
            (extra) =>
              `<img class="card_img-position extrasSrc" src="${getImagePath(
                extra,
              )}" alt="${extra} image">`,
          )
          .join('')}
        <img class="card_img-position soilSrc" src="${getImagePath(
          plant.soilType,
        )}" alt="Soil image">
        <img class="card_img-position plantSrc" src="../styles/images/plant-${getPlantImageName(
          plant.name,
        )}.png" alt="Plant image">
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
            <p class="card--font newName">${plant.name}</p>
            <p class="card--font soil newSoil">${plant.soilType}</p>
            <p class="card--font" newPot>${plant.potMaterial} ${
              plant.potStyle ? `- ${plant.potStyle}` : ''
            }</p>
            <p class="card--font newExtras">${extrasList.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-card">
      <buttom class="btn btn-bg" class="btn btn-bg" id="customize-btn">Customize</buttom>
    </div>
    `;
      // plantData = {
      //   name: plant.name,
      //   potMaterial: plant.potMaterial,
      //   potColor: '',
      //   soilType: plant.soilType,
      //   potStyle: plant.potStyle,
      //   extrasList: extrasList,
      // };
      clearButton.addEventListener('click', () => {
        plantForm.reset();
        recommendationDiv.style.display = 'none';
        plantResultDiv.innerHTML = '';
      });
      const button = document.getElementById('customize-btn');
      // eslint-disable-next-line no-shadow
      button.addEventListener('click', async (event) => {
        event.preventDefault();
        const title = document.getElementById('title');
        const container = document.getElementById('plant-form');
        const getForm = await fetch('../../customize.html');
        const newForm = await getForm.text();
        container.innerHTML = newForm;
        title.innerHTML = 'Customize you plant';
        button.innerHTML = 'Check store availability';

        const potElements = document.querySelectorAll('input[name="pot"]');
        const colorElements = document.querySelectorAll('input[name="color"]');
        const decorationElements = document.querySelector(
          'input[name="decoration"]',
        );
        const soilElements = document.querySelectorAll('input[name="soil"]');
        const plantElements = document.querySelectorAll('select[name="plant"]');
        const extrasElements = Array.from(
          document.querySelectorAll('input[name="extras"]'),
        );

        potElements.forEach((element) =>
          element.addEventListener('change', updateData),
        );
        colorElements.forEach((element) =>
          element.addEventListener('change', updateData),
        );
        decorationElements.addEventListener('change', updateData);

        soilElements.forEach((element) =>
          element.addEventListener('change', updateSoilData),
        );
        plantElements.forEach((element) =>
          element.addEventListener('change', updatePlantData),
        );
        extrasElements.forEach((element) =>
          element.addEventListener('change', updateExtrasData),
        );
      });
    });
  });
}
export { info, plantData };
