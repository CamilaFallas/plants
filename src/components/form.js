function getImagePath(option, color = '') {
  switch (option) {
    case 'Clay Pot':
      return '../styles/images/simple-clay-pot.png';
    case 'Ceramic Pot':
      return '../styles/images/simple-ceramic-pot.png';
    case 'Clay Pot Decorated':
      return '../styles/images/simple-clay-pot-decorated.png';
    case 'Ceramic Pot Decorated':
      return '../styles/images/simple-ceramic-pot-decorated.png';
    case 'Painted Clay Pot Decorated':
      return '../styles/images/painted-clay-pot-decorated.png';
    case 'Painted Ceramic Pot Decorated':
      return '../styles/images/painted-ceramic-pot-decorated.png';
    case 'Pebbles':
      return '../styles/images/pebbles.png';
    case 'Moss Pole':
      return '../styles/images/moss-pole.png';
    case 'Mini Plants':
      return '../styles/images/mini-plants.png';
    case 'Fertilized Soil':
      return '../styles/images/soil-fertilized.png';
    case 'Composted Soil':
      return '../styles/images/soil-composted.png';
  }
}

function getPlantImageName(plantName) {
  switch (plantName) {
    case 'Fern':
      return 'fern';
    case 'Monstera':
      return 'monstera';
    case 'Aglaonema':
      return 'aglaonema';
    case 'Cactus':
      return 'cactus';
    case 'Sansevieria':
      return 'sansevieria';
    case 'Aloe':
      return 'aloe';
    case 'Substitute for Peace Lily':
      return 'peace-lily';
    default:
      return 'default';
  }
}



export { getImagePath, getPlantImageName };
