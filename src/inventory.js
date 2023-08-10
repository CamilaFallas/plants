import { plantData } from "./components/form.js";

console.log(plantData.name);
console.log(plantData.potMaterial);
console.log(plantData.soilType)

// const getPlant = async (product) => {
//   return fetch(
//     `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/plant/${product.name}`,
//   ).then((res) => res.json());
// };

// const getPot = async (product) => {
//   return fetch(
//     `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/pot/${product.potMaterial}-${product.potDecoration}-${product.potColor}`,
//   ).then((res) => res.json());
// };

// const getSoil = async (product) => {
//   return fetch(
//     `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/soil/${product.soil}`,
//   ).then((res) => res.json());
// };

// const getInfo = async (product) => {
//   return fetch(
//     `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${product.name}`,
//   ).then((res) => res.json());
// };

// // Middlewares

// const getInventory = async (context, next) => {
//   const plantData = [
//     getPlant(context),
//     getPot(context),
//     getSoil(context),
//     getInfo(context),
//   ];

//   const [plantStock, potStock, soilStock, info] = await Promise.all(plantData);
//   context.info = info;

//   const zeroStock = [];
//   const lowStock = [];
//   const withStock = [];

//   if (plantStock.stock === 0) {
//     zeroStock.push('plant');
//   } else if (plantStock >= 10) {
//     lowStock.push('plant');
//   } else {
//     withStock.push('plant');
//   }

//   if (potStock.stock === 0) {
//     zeroStock.push('pot');
//   } else if (potStock >= 10) {
//     lowStock.push('pot');
//   } else {
//     withStock.push('pot');
//   }

//   if (soilStock.stock === 0) {
//     zeroStock.push('soil');
//   } else if (soilStock >= 10) {
//     lowStock.push('soil');
//   } else {
//     withStock.push('soil');
//   }

//   context.stock = {
//     zeroStock,
//     lowStock,
//     withStock,
//   };

//   next();
// };

// // const getAlerts = (context) => {
// //   const { zeroStock, lowStock, withStock } = context.stock;
// // };

// addMiddleware(getInventory);
// // addMiddleware(getAlerts);

// const getOrderInfo = (product) => {
//   execute(product);
// };

// export { getOrderInfo };