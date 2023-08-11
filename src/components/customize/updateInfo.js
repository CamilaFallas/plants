import Observer from "../../patterns/observer.js";
import { potConfig, soilConfig, plantConfig, extrasConfig } from "../../config.js";
// import { plantData } from "../form.js";

let newName = document.getElementsByClassName('newName');
let newSoil = document.getElementsByClassName('newSoil');
let newPot = document.getElementsByClassName('newPot');
let newExtras = document.getElementsByClassName('newExtras');

const observerPot = new Observer();
const observerSoil = new Observer();
const observerPlant = new Observer();
// const observerExtras = new Observer();

let formPotData = {
  pot: "",
  decoration: "",
  color: "",
};

let formSoilData = {
  soil: "",
};

let formPlantData = {
  plant: "",
};

function updateImagePath(formPotData) {
  const { color, pot, decoration } = formPotData;
  const imagePath = potConfig[color][pot][decoration].imagePath;
  return imagePath;
}

observerPot.subscribe(updateImagePath);

function updateData() {
  formPotData.color = document.querySelector('input[name="color"]:checked').value;
  formPotData.pot = document.querySelector('input[name="pot"]:checked').value;
  formPotData.decoration = document.querySelector('input[name="decoration"]:checked') ? "decorated" : "simple";

  const newImagePath = updateImagePath(formPotData);
  if (newImagePath !== undefined) {
    const potImages = Array.from(document.getElementsByClassName('potSrc'));

    potImages.forEach(img => {
      img.src = newImagePath;
    });
  }

  // plantData.potColor = formPotData.color;
  // plantData.potMaterial = formPotData.pot;
  // plantData.potStyle = formPotData.decoration;

  // newPot.innerHTML = plantData.potMaterial;

}

function updateSoilImagePath(soilType) {
  const imagePath = soilConfig[soilType].imagePath;
  return imagePath;
}

observerSoil.subscribe((newSoilType) => {
  const newSoilPath = updateSoilImagePath(newSoilType);

  if (newSoilPath !== undefined) {
    const soilImages = Array.from(document.getElementsByClassName('soilSrc'));

    soilImages.forEach(img => {
      img.src = newSoilPath;
    });
  }
});

function updateSoilData() {
  const newSoilType = document.querySelector('input[name="soil"]:checked').value;
  // plantData.soilType = newSoilType;

  // plantData.soilType = formSoilData.soil;
  // newSoil.innerHTML = plantData.soilType;

  observerSoil.notify(newSoilType);
}

function updatePlantImagePath(name) {
  const imagePath = plantConfig[name].imagePath;
  return imagePath;
}

observerPlant.subscribe((newPlantName) => {
  const newPlantPath = updatePlantImagePath(newPlantName);

  if (newPlantPath !== undefined) {
    const plantImages = Array.from(document.getElementsByClassName('plantSrc'));

    plantImages.forEach(img => {
      img.src = newPlantPath;
    });
  }
});

function updatePlantData() {
  const newPlantName = document.querySelector('select[name="plant"]').value;
  // plantData.name = newPlantName;

  // plantData.name = formPlantData.plant;
  // newName.innerHTML = plantData.name;

  observerPlant.notify(newPlantName);
}

// function updateExtrasImagePath(formExtrasData) {
//   let imagePath = "";
//   const { extras } = formExtrasData;

//   extras.forEach(extra => {
//     if (extrasConfig[extra]) {
//       imagePath += extrasConfig[extra].imagePath;
//     }
//   });

//   return imagePath;
// }

// observerExtras.subscribe(updateExtrasImagePath);


// function updateExtrasData() {
//   formExtrasData.extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(checkbox => checkbox.value);

//   const newExtrasPath = updateExtrasImagePath(formExtrasData);
//   if (newExtrasPath !== undefined) {
//     const extrasImages = Array.from(document.getElementsByClassName('extrasSrc'));

//     extrasImages.forEach(img => {
//       img.src = newExtrasPath;
//     });
//   }
// }




export {
  updateData,
  updateSoilData,
  updatePlantData,
  // updateExtrasData
}



// WOORRKKKK OJO SRC EN FORM
// import Observer from "../../patterns/observer.js";
// import potConfig from "./config.js";

// const observerPot = new Observer();

// let formPotData = {
//   pot: "",
//   decoration: "",
//   color: "",
// };

// function updateImagePath(formPotData) {
//   const { color, pot, decoration } = formPotData;
//   const imagePath = potConfig[color][pot][decoration].imagePath;
//   return imagePath;
// }

// observerPot.subscribe(updateImagePath);

// function updateData() {
//   formPotData.color = document.querySelector('input[name="color"]:checked').value;
//   formPotData.pot = document.querySelector('input[name="pot"]:checked').value;
//   formPotData.decoration = document.querySelector('input[name="decoration"]:checked') ? "decorated" : "simple";

//   const newImagePath = updateImagePath(formPotData);
//   if (newImagePath !== undefined) {
//     const potImages = Array.from(document.getElementsByClassName('potSrc'));

//     if (newImagePath !== undefined) {
//       const potImages = Array.from(document.getElementsByClassName('potSrc'));

//       potImages.forEach(img => {
//         img.src = newImagePath;
//       });
//     }
//   }
// }

// export default updateData



