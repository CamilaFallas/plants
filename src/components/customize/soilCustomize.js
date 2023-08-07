
// import Observer from '../../patterns/observer.js';

// const observerSoil = new Observer();

// const soilConfig = {

//   basic: { imagePath: '../../styles/images/' },
//   premium: { imagePath: '../../styles/images/' },
//   drainage: { imagePath: '../../styles/images/' },
// };

// let formSoilData = { soil: "" };

// function updateImagePath(formPotData) {
//   const soil = formPotData;

//   // Add the specific soil image path
//   if (soilConfig[soil]) {
//     imagePath += `soil-${soil}.png`;
//   }

//   return imagePath;
// }

// observerSoil.subscribe(updateImagePath);

// function updateSoilData() {

//   formSoilData.soil = document.querySelector('input[name="soil"]:checked').value;

//   // Notify the observer with the updated form data
//   observerSoil.notify(formSoilData);
// }

// export default updateSoilData
