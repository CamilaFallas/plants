import Observer from '../../patterns/observer.js';
import {
  potConfig,
  soilConfig,
  plantConfig,
  extrasConfig,
} from '../../config.js';
// eslint-disable-next-line import/no-cycle
import { plantData } from '../form.js';

const newName = document.getElementsByClassName('newName');
const newSoil = document.getElementsByClassName('newSoil');
const newPot = document.getElementsByClassName('newPot');

const observerPot = new Observer();
const observerSoil = new Observer();
const observerPlant = new Observer();
const observerExtras = new Observer();

const formPotData = {
  pot: '',
  decoration: '',
  color: '',
};

const formSoilData = {
  soil: '',
};

const formPlantData = {
  plant: '',
};

const formExtrasData = {
  extras: [],
};

function updateImagePath() {
  const { color, pot, decoration } = formPotData;
  const { imagePath } = potConfig[color][pot][decoration];
  return imagePath;
}

observerPot.subscribe(updateImagePath);

function updateData() {
  formPotData.color = document.querySelector(
    'input[name="color"]:checked',
  ).value;
  formPotData.pot = document.querySelector('input[name="pot"]:checked').value;
  formPotData.decoration = document.querySelector(
    'input[name="decoration"]:checked',
  )
    ? 'decorated'
    : 'simple';

  const newImagePath = updateImagePath(formPotData);
  if (newImagePath !== undefined) {
    const potImages = Array.from(document.getElementsByClassName('potSrc'));

    potImages.forEach((img) => {
      // eslint-disable-next-line no-param-reassign
      img.src = newImagePath;
    });
  }

  plantData.potColor = formPotData.color;
  plantData.potMaterial = formPotData.pot;
  plantData.potStyle = formPotData.decoration;

  newPot.innerHTML = plantData.potMaterial;
}

function updateSoilImagePath(soilType) {
  const { imagePath } = soilConfig[soilType];
  return imagePath;
}

observerSoil.subscribe((newSoilType) => {
  const newSoilPath = updateSoilImagePath(newSoilType);

  if (newSoilPath !== undefined) {
    const soilImages = Array.from(document.getElementsByClassName('soilSrc'));

    soilImages.forEach((img) => {
      // eslint-disable-next-line no-param-reassign
      img.src = newSoilPath;
    });
  }
});

function updateSoilData() {
  const newSoilType = document.querySelector(
    'input[name="soil"]:checked',
  ).value;
  plantData.soilType = newSoilType;

  plantData.soilType = formSoilData.soil;
  newSoil.innerHTML = plantData.soilType;

  observerSoil.notify(newSoilType);
}

function updatePlantImagePath(name) {
  const { imagePath } = plantConfig[name];
  return imagePath;
}

observerPlant.subscribe((newPlantName) => {
  const newPlantPath = updatePlantImagePath(newPlantName);

  if (newPlantPath !== undefined) {
    const plantImages = Array.from(document.getElementsByClassName('plantSrc'));

    plantImages.forEach((img) => {
      // eslint-disable-next-line no-param-reassign
      img.src = newPlantPath;
    });
  }
});

function updatePlantData() {
  const newPlantName = document.querySelector('select[name="plant"]').value;
  plantData.name = newPlantName;

  plantData.name = formPlantData.plant;
  newName.innerHTML = plantData.name;

  observerPlant.notify(newPlantName);
}

function updateExtraImagePath(extra) {
  return extrasConfig[extra] ? extrasConfig[extra].imagePath : '';
}

observerExtras.subscribe((newExtrasList) => {
  const extrasImages = Array.from(document.getElementsByClassName('extrasSrc'));

  newExtrasList.forEach((extra, index) => {
    const extraPath = updateExtraImagePath(extra);
    if (extraPath && extrasImages[index]) {
      extrasImages[index].src = extraPath;
    }
  });
});

function updateExtrasData() {
  formExtrasData.extras = Array.from(
    document.querySelectorAll('input[name="extras"]:checked'),
  ).map((checkbox) => checkbox.value);

  observerExtras.notify(formExtrasData.extras);
}

export { updateData, updateSoilData, updatePlantData, updateExtrasData };
