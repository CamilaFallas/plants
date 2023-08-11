const path = '../../styles/images/';

const potConfig = {
  blue: {
    name: 'Blue',
    ceramic: {
      decorated: { imagePath: `${path}pots/ceramic-decorated-blue.PNG` },
      simple: { imagePath: `${path}pots/ceramic-simple-blue.PNG` },
    },
    clay: {
      decorated: { imagePath: `${path}pots/clay-decorated-blue.PNG` },
      simple: { imagePath: `${path}pots/clay-simple-blue.PNG` },
    },
  },
  green: {
    name: 'Green',
    ceramic: {
      decorated: { imagePath: `${path}pots/ceramic-decorated-green.PNG` },
      simple: { imagePath: `${path}pots/ceramic-simple-green.PNG` },
    },
    clay: {
      decorated: { imagePath: `${path}pots/clay-decorated-green.PNG` },
      simple: { imagePath: `${path}pots/clay-simple-green.PNG` },
    },
  },
  pink: {
    name: 'Pink',
    ceramic: {
      decorated: { imagePath: `${path}pots/ceramic-decorated-pink.PNG` },
      simple: { imagePath: `${path}pots/ceramic-simple-pink.PNG` },
    },
    clay: {
      decorated: { imagePath: `${path}pots/clay-decorated-pink.PNG` },
      simple: { imagePath: `${path}pots/clay-simple-pink.PNG` },
    },
  },
  purple: {
    name: 'Purple',
    ceramic: {
      decorated: { imagePath: `${path}pots/ceramic-decorated-purple.PNG` },
      simple: { imagePath: `${path}pots/ceramic-simple-purple.PNG` },
    },
    clay: {
      decorated: { imagePath: `${path}pots/clay-decorated-purple.PNG` },
      simple: { imagePath: `${path}pots/clay-simple-purple.PNG` },
    },
  },
  unpainted: {
    name: 'Unpainted',
    ceramic: {
      decorated: { imagePath: `${path}pots/ceramic-decorated-unpainted.PNG` },
      simple: { imagePath: `${path}pots/ceramic-simple-unpainted.PNG` },
    },
    clay: {
      decorated: { imagePath: `${path}pots/clay-decorated-unpainted.PNG` },
      simple: { imagePath: `${path}pots/clay-simple-unpainted.PNG` },
    },
  },
};

const soilConfig = {
  basic: { imagePath: `${path}soil-composted.png` },
  premium: { imagePath: `${path}soil-fertilized.png` },
  drainage: { imagePath: `${path}soil-drainage.png` },
};

const plantConfig = {
  'Aglaonema Silver Bay': {
    name: 'Aglaonema Silver Bay',
    imagePath: `${path}plant-aglaonema.png`,
  },
  'Aloe Vera': {
    name: 'Aloe Vera',
    imagePath: `${path}plant-aloe.png`,
  },
  'Boston Fern': {
    name: 'Boston Fern',
    imagePath: `${path}plant-fern.png`,
  },
  Cactus: {
    name: 'Cactus',
    imagePath: `${path}plant-cactus.png`,
  },
  'Monstera Deliciosa': {
    name: 'Monstera Deliciosa',
    imagePath: `${path}plant-monstera.png`,
  },
  'Peace Lily': {
    name: 'Peace Lily',
    imagePath: `${path}plant-peace-lily.png`,
  },
  Sansevieria: {
    name: 'Sansevieria',
    imagePath: `${path}plant-sansevieria.png`,
  },
};

const extrasConfig = {
  moss: { imagePath: `${path}moss-pole.png` },
  pebbles: { imagePath: `${path}pebbles.png` },
  smallerPlants: { imagePath: `${path}mini-plants.png` },
};

export { potConfig, soilConfig, plantConfig, extrasConfig };
