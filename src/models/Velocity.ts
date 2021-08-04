class Velocity {
  private speed: number;
  private unit: string;

  constructor(speed: number, unit: string) {
    this.speed = speed;
    this.unit = unit;
  }

  set Speed(value: number) {
    this.speed = value;
  }

  get Speed() {
    return this.speed;
  }

  set Unit(value: string) {
    this.unit = value;
  }

  get Unit() {
    return this.unit;
  }
}

export default Velocity;
