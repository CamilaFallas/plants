function getImagePath(option, color = '') {
  switch (option) {
    case 'Ceramic pot':
      return color.includes('decorated') ? '../styles/images/simple-ceramic-pot-decorated.png' : '../styles/images/simple-ceramic-pot.png';
    case 'Clay pot':
      return color.includes('decorated') ? '../styles/images/simple-clay-pot-decorated.png' : '../styles/images/simple-clay-pot.png';
    case 'Pebbles':
      return '../styles/images/pebbles.png';
    case 'Moss pole':
      return '../styles/images/moss-pole.png';
    case 'Fertilized Soil':
      return '../styles/images/soil-fertilized.png';
    case 'Composted Soil':
      return '../styles/images/soil-composted.png';
  }
}

function getPlantImageName(plantName) {
  switch (plantName) {
    case 'Low Light Plant':
      return 'sansevieria';
    case 'Medium Light Plant':
      return 'aglaonema';
    case 'Outdoor Plant':
      return 'aloe';
    case 'Fertilized Soil':
      return 'cactus';
    case 'Composted Soil':
      return 'monstera';
    case 'Substitute for Peace Lily':
      return 'peace-lily';
  }
}

export { getImagePath, getPlantImageName };
