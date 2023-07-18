import PlantBuilder from './config.js';
import { getImagePath, getPlantImageName } from './form.js';

const plantBuilder = new PlantBuilder();

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
      const extras = formData.getAll('extras');

      if (!placement || !sunlight || !pets || !watering || !style) {
        alert('Please complete all required fields.');
        return;
      }

      // Respuestas del formulario
      if (placement === 'indirect-light') {
        if (sunlight === 'yes') {
          plantBuilder.withName('Composted Soil');
        } else {
          plantBuilder.withName('Fertilized Soil');
        }
      } else if (placement === 'lots-of-indirect-light') {
        if (sunlight === 'yes') {
          plantBuilder.withName('Composted Soil');
        } else {
          plantBuilder.withName('Fertilized Soil');
        }
      } else if (placement === 'outside') {
        plantBuilder.withName('Fertilized Soil');
      }

      if (pets === 'yes') {
        plantBuilder.withName('Non-Toxic Plant');
      } else {
        if (plantBuilder.name === 'Low Light Plant') {
          if (watering === 'overwater') {
            plantBuilder.withName('Substitute for Peace Lily');
          } else {
            plantBuilder.withName('Non-Toxic Plant');
          }
        } else if (plantBuilder.name === 'Medium Light Plant') {
          if (watering === 'overwater') {
            plantBuilder.withName('Substitute for Peace Lily');
          } else {
            plantBuilder.withName('Non-Toxic Plant');
          }
        } else if (plantBuilder.name === 'Outdoor Plant') {
          plantBuilder.withName('Toxic Plant');
        }
      }

      plantBuilder.withSoilType(sunlight === 'yes' ? 'Composted Soil' : 'Fertilized Soil');
      if (pets === 'yes') {
        plantBuilder.withPotMaterial('Ceramic pot');
      } else {
        plantBuilder.withPotMaterial('Clay pot');
        if (watering === 'overwater') {
          plantBuilder.withPotStyle('Substitute the soil for the easy drainage soil');
        } else {
          plantBuilder.withPotStyle('Ceramic pot');
        }
      }

      if (style === 'minimalism') {
        plantBuilder.withPotColor('Simple pot');
      } else if (style === 'simple-decoration') {
        plantBuilder.withPotColor('Simple pot decorated');
      } else if (style === 'bright-decoration') {
        plantBuilder.withPotColor('Painted pot decorated');
      }

      plantBuilder.withExtras(extras);
      const plant = plantBuilder.build();
      // Imagenes en HTML
      recommendationDiv.style.display = 'block';
      plantResultDiv.innerHTML = `
        <h2>Recommendation:</h2>
        <div class="info-container">
          <h3>${plant.name}</h3>
          <div class="image-container">
            <img src="${getImagePath(plant.potMaterial, plant.potColor)}" alt="Pot image">
            ${extras.map(extra => `<img src="${getImagePath(extra)}" alt="${extra} image">`).join('')}
            <img src="${getImagePath(plant.soilType)}" alt="Soil image">
            <img src="../styles/images/plant-${getPlantImageName(plant.name)}.png" alt="Plant image">
          </div>
          <p>
            Soil - ${plant.soilType}<br>
            Pot - ${plant.potMaterial} ${plant.potStyle ? `- ${plant.potStyle}` : ''}<br>
            Color - ${plant.potColor}<br>
            Extras - ${plant.extras.join(', ')}
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

export default info 