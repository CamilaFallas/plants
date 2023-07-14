import PlantBuilder from './config.js'

const lowLightPlant = new PlantBuilder()
  .withName('Sansevieria')
  .withToxicity('Toxic')
  .withSubstitute('Peace Lily')
  .withOverwateringSubstitute('Peace Lily')
  .build();

const mediumLightPlant = new PlantBuilder()
  .withName('Aglaonema')
  .withToxicity('Toxic')
  .withSubstitute('Peace Lily')
  .withOverwateringSubstitute('Peace Lily')
  .build();

const outdoorPlant = new PlantBuilder()
  .withName('Aloe Vera')
  .withToxicity('Toxic')
  .build();

const nonToxicPlant = new PlantBuilder()
  .withName('Boston Fern')
  .build();

const nonToxicMediumLightPlant = new PlantBuilder()
  .withName('Monstera')
  .withOverwateringSubstitute('Peace Lily')
  .build();

const nonToxicOutdoorPlant = new PlantBuilder()
  .withName('Cactus')
  .build();

console.log(lowLightPlant);
console.log(mediumLightPlant);
console.log(outdoorPlant);
console.log(nonToxicPlant);
console.log(nonToxicMediumLightPlant);
console.log(nonToxicOutdoorPlant);
