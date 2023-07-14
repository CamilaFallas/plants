// Objeto

class PlantBuilder {
  constructor() {
    this.plant = {};
  }

  withName(name) {
    this.plant.name = name;
    return this;
  }

  withToxicity(toxicity) {
    this.plant.toxicity = toxicity;
    return this;
  }

  withSubstitute(substitute) {
    this.plant.substitute = substitute;
    return this;
  }

  withOverwateringSubstitute(overwateringSubstitute) {
    this.plant.overwateringSubstitute = overwateringSubstitute;
    return this;
  }

  build() {
    return this.plant;
  }
}

export default { PlantBuilder }