import Orbit from "./models/Orbit";
import Vehicle from "./models/Vehicle";
import Velocity from "./models/Velocity";
import Weather from "./models/Weather";
import WeatherType from "./models/WeatherType";

const getAllVehicleNames = (): string[] => {
  let vehiclenames: string[] = [];
  getAllVehicles().forEach((vehicle: Vehicle) =>
    vehiclenames.push(vehicle.Name)
  );
  return vehiclenames;
};

export const getAllWeatherDetails = (): Weather[] => {
  let weathers: Weather[] = [];
  weathers.push(new Weather(WeatherType.SUNNY, -10, ["Bike", "Tuktuk", "Car"]));
  weathers.push(new Weather(WeatherType.RAINY, +20, ["Tuktuk", "Car"]));
  weathers.push(new Weather(WeatherType.WINDY, +0, getAllVehicleNames()));
  return weathers;
};

export const getAllVehicles = (): Vehicle[] => {
  let vehicles: Vehicle[] = [];
  vehicles.push(new Vehicle("Bike", new Velocity(10, "megamiles/hour"), 2));
  vehicles.push(new Vehicle("Tuktuk", new Velocity(12, "megamiles/hour"), 1));
  vehicles.push(new Vehicle("Car", new Velocity(20, "megamiles/hour"), 3));
  return vehicles;
};

export const getAllOrbits = (): Orbit[] => {
  let orbits: Orbit[] = [];
  orbits.push(
    new Orbit(
      "Orbit1",
      "Silk Drob",
      "Hallitharam",
      18,
      20,
      new Velocity(-1, "megamiles/hour")
    )
  );
  orbits.push(
    new Orbit(
      "Orbit2",
      "Silk Drob",
      "Hallitharam",
      20,
      10,
      new Velocity(-1, "megamiles/hour")
    )
  );

  return orbits;
};
