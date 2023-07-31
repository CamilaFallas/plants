import PlantBuilder from './config.js';
import { getImagePath, getPlantImageName } from './form.js';

function determinePlantName(placement, sunlight, pets, watering) {
  if (placement === 'low-light-plant') {
    if (pets === 'yes') {
      return 'Fern';
    } else {
      return 'Sansevieria';
    }
  } else if (placement === 'medium-light-plant') {
    if (pets === 'yes') {
      return 'Monstera';
    } else {
      return 'Aglaonema';
    }
  } else if (placement === 'outdoor-plant') {
    if (pets === 'yes') {
      return 'Cactus';
    } else {
      return 'Aloe';
    }
  }
}

function determinePot(style, watering) {
  if (style === 'simple-pot') {
    return watering === 'overwater' ? 'Clay Pot' : 'Ceramic Pot';
  } else if (style === 'simple-pot-decorated') {
    return watering === 'overwater' ? 'Clay Pot Decorated' : 'Ceramic Pot Decorated';
  } else if (style === 'painted-pot-decorated') {
    return watering === 'overwater' ? 'Painted Clay Pot Decorated' : 'Painted Ceramic Pot Decorated';
  }
}

function extrasToString(extras) {
  if (extras === 'moss-pole') {
    return 'Moss Pole';
  } else if (extras === 'pebbles') {
    return 'Pebbles';
  } else if (extras === 'mini-plants') {
    return 'Mini Plants';
  }
}

function info() {
  document.addEventListener('DOMContentLoaded', () => {
    const plantForm = document.getElementById('plantForm');
    const recommendationDiv = document.getElementById('recommendation');
    const plantResultDiv = document.getElementById('plantResult');
    const clearButton = document.getElementById('clearButton');

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
          <h2>Recommendation:</h2>
          <div class="info-container">
            <h3>${plant.name}</h3>
            <div class="image-container">
              <img src="${getImagePath(plant.potMaterial, plant.potColor)}" alt="Pot image">
              ${extrasList.map(extra => `<img src="${getImagePath(extra)}" alt="${extra} image">`).join('')}
              <img src="${getImagePath(plant.soilType)}" alt="Soil image">
              <img src="../styles/images/plant-${getPlantImageName(plant.name)}.png" alt="Plant image">
            </div>
            <p>
              Soil - ${plant.soilType}<br>
              Pot - ${plant.potMaterial} ${plant.potStyle ? `- ${plant.potStyle}` : ''}<br>
              Extras - ${extrasList.join(', ')}
            </p>
          </div>
        `;
    });

    clearButton.addEventListener('click', () => {
      plantForm.reset();
      recommendationDiv.style.display = 'none';
      plantResultDiv.innerHTML = '';
    });
  });
}

export default info;
