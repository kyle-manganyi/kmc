import Orbit from "./Orbit";
import Vehicle from "./Vehicle";

class TraverseDetails {
  private traverseTime: number;

  private orbits: Orbit[];
  private vehicle: Vehicle;

  constructor(traverseTime: number, orbits: Orbit[], vehicle: Vehicle) {
    this.traverseTime = traverseTime;
    this.orbits = orbits;
    this.vehicle = vehicle;
  }

  get TraverseTime() {
    return this.traverseTime;
  }

  set TraverseTime(value: number) {
    this.traverseTime = value;
  }

  get Orbits() {
    return this.orbits;
  }

  set Orbit(values: Orbit[]) {
    this.orbits = values;
  }

  get Vehicle() {
    return this.vehicle;
  }

  set Vehicle(value: Vehicle) {
    this.vehicle = value;
  }
}

export default TraverseDetails;
