import Velocity from "./Velocity";

class Vehicle {
  private name: string;
  private velocity: Velocity;

  timeToCrossCrater: number;

  constructor(name: string, velocity: Velocity, timeToCrossCrater: number) {
    this.name = name;
    this.velocity = velocity;
    this.timeToCrossCrater = timeToCrossCrater;
  }

  get Name() {
    return this.name;
  }

  set Name(value: string) {
    this.name = value;
  }

  get Velocity() {
    return this.velocity;
  }

  set Velocity(value: Velocity) {
    this.velocity = value;
  }

  get TimeToCrossCrater() {
    return this.timeToCrossCrater;
  }

  set TimeToCrossCrater(value: number) {
    this.timeToCrossCrater = value;
  }
}

export default Vehicle;
