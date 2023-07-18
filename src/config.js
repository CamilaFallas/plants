class PlantBuilder {
  constructor() {
    this.plant = {};
  }

  withName(name) {
    this.plant.name = name;
    return this;
  }

  withSoilType(soilType) {
    this.plant.soilType = soilType;
    return this;
  }

  withPotMaterial(potMaterial) {
    this.plant.potMaterial = potMaterial;
    return this;
  }

  withPotStyle(potStyle) {
    this.plant.potStyle = potStyle;
    return this;
  }

  withPotColor(potColor) {
    this.plant.potColor = potColor;
    return this;
  }

  withExtras(extras) {
    this.plant.extras = extras;
    return this;
  }

  build() {
    return this.plant;
  }
}

export default PlantBuilder;

