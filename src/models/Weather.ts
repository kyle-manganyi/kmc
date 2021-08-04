import WeatherType from "./WeatherType";

class Weather {
  private weatherType: WeatherType;

  private craterChangeRate: number;
  private suitableVehicleNames: string[];

  constructor(
    weatherType: WeatherType,
    craterChangeRate: number,
    suitableVehicleNames: string[]
  ) {
    this.craterChangeRate = craterChangeRate;
    this.weatherType = weatherType;
    this.suitableVehicleNames = suitableVehicleNames;
  }

  get WeatherType() {
    return this.weatherType;
  }

  set WeatherType(value: WeatherType) {
    this.weatherType = value;
  }

  get CraterChangeRate() {
    return this.craterChangeRate;
  }

  set CraterChangeRate(value: number) {
    this.craterChangeRate = value;
  }

  get SuitableVehicleNames() {
    return this.suitableVehicleNames;
  }

  set SuitableVehicleNames(value: string[]) {
    this.suitableVehicleNames = value;
  }
}

export default Weather;
