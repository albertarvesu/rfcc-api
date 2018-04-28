export class Configuration {
  constructor(hasSentience, hasWheels, hasTracks, numberOfRotors, colour) {
    this.hasSentience = hasSentience;
    this.hasWheels = hasWheels;
    this.hasTracks = hasTracks;
    this.numberOfRotors = numberOfRotors;
    this.colour = colour;
  }
}

export default class Robot {
  constructor(id, name, configuration, statuses){
      this.id = id;
      this.name = name;
      this.configuration = configuration;
      this.statuses = statuses;
  }
}