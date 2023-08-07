import { potConfig, soilConfig } from "./config.js";
import Observer from '../../patterns/observer.js';

const observerCustomize = new Observer();

let plantCustomized = {
  pot: "",
  decoration: "",
  color: "",
  soil: "",
};

function updateImagePath(plantCustomized) {
  const { color, pot, decoration, soil } = plantCustomized;
  let imagePath = potConfig[color][pot][decoration].imagePath;

  if (soilConfig[soil]) {
    imagePath += `soil-${soil}.png`;
  }

  return imagePath;
}

observerCustomize.subscribe(updateImagePath);

function updateData() {
  const colorElement = document.querySelector('input[name="color"]:checked');
  const potElement = document.querySelector('input[name="pot"]:checked');
  const decorationElement = document.querySelector('input[name="decoration"]:checked');
  const soilElement = document.querySelector('input[name="soil"]:checked');

  if (colorElement) {
    plantCustomized.color = colorElement.value;
  }

  if (potElement) {
    plantCustomized.pot = potElement.value;
  }

  plantCustomized.decoration = decorationElement ? "decorated" : "simple";

  if (soilElement) {
    plantCustomized.soil = soilElement.value;
  }

  const newPotImagePath = updateImagePath(plantCustomized, potConfig);
  const newSoilImagePath = updateImagePath(plantCustomized, soilConfig);

  if (newPotImagePath !== undefined) {
    const potImages = Array.from(document.getElementsByClassName('potSrc'));

    potImages.forEach(img => {
      img.src = newPotImagePath;
    });
  }

  if (newSoilImagePath !== undefined) {
    const soilImages = Array.from(document.getElementsByClassName('soilSrc'));

    soilImages.forEach(img => {
      img.src = newSoilImagePath;
    });
  }
}



export {
  plantCustomized,
  updateData
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
