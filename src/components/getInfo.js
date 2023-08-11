// eslint-disable-next-line consistent-return
function getImagePath(option) {
  // eslint-disable-next-line default-case
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

// eslint-disable-next-line consistent-return
function getPlantImageName(plantName) {
  // eslint-disable-next-line default-case
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
  }
}

// eslint-disable-next-line consistent-return
function determinePlantName(placement, pets) {
  if (placement === 'low-light-plant') {
    if (pets === 'yes') {
      return 'Fern';
      // eslint-disable-next-line no-else-return
    } else {
      return 'Sansevieria';
    }
    // eslint-disable-next-line no-else-return
  } else if (placement === 'medium-light-plant') {
    if (pets === 'yes') {
      return 'Monstera';
      // eslint-disable-next-line no-else-return
    } else {
      return 'Aglaonema';
    }
  } else if (placement === 'outdoor-plant') {
    if (pets === 'yes') {
      return 'Cactus';
      // eslint-disable-next-line no-else-return
    } else {
      return 'Aloe';
    }
  }
}

// eslint-disable-next-line consistent-return
function determinePot(style, watering) {
  if (style === 'simple-pot') {
    return watering === 'overwater' ? 'Clay Pot' : 'Ceramic Pot';
    // eslint-disable-next-line no-else-return
  } else if (style === 'simple-pot-decorated') {
    return watering === 'overwater'
      ? 'Clay Pot Decorated'
      : 'Ceramic Pot Decorated';
  } else if (style === 'painted-pot-decorated') {
    return watering === 'overwater'
      ? 'Painted Clay Pot Decorated'
      : 'Painted Ceramic Pot Decorated';
  }
}

// eslint-disable-next-line consistent-return
function extrasToString(extras) {
  if (extras === 'moss-pole') {
    return 'Moss Pole';
    // eslint-disable-next-line no-else-return
  } else if (extras === 'pebbles') {
    return 'Pebbles';
  } else if (extras === 'mini-plants') {
    return 'Mini Plants';
  }
}

export {
  getImagePath,
  getPlantImageName,
  determinePlantName,
  determinePot,
  extrasToString,
};
