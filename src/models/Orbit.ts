import Velocity from "./Velocity";

class Orbit {
  private orbitName: string;

  private source: string;
  private destination: string;

  private distance: number;
  private numberOfCraters: number;

  private velocityLimit: Velocity;

  constructor(
    orbitName: string,
    source: string,
    destination: string,
    distance: number,
    numberOfCraters: number,
    velocityLimit: Velocity
  ) {
    this.orbitName = orbitName;
    this.source = source;
    this.destination = destination;
    this.distance = distance;
    this.numberOfCraters = numberOfCraters;
    this.velocityLimit = velocityLimit;
  }

  get OrbitName() {
    return this.orbitName;
  }

  set OrbitName(value: string) {
    this.orbitName = value;
  }

  get Source() {
    return this.source;
  }

  set Source(value: string) {
    this.source = value;
  }

  get Destination() {
    return this.destination;
  }

  set Destination(value: string) {
    this.destination = value;
  }

  get Distance() {
    return this.distance;
  }

  set Distance(value: number) {
    this.distance = value;
  }

  get NumberOfCraters() {
    return this.numberOfCraters;
  }

  set NumberOfCraters(value: number) {
    this.numberOfCraters = value;
  }

  get VelocityLimit() {
    return this.velocityLimit;
  }

  set VelocityLimit(value: Velocity) {
    this.velocityLimit = value;
  }
}

export default Orbit;
