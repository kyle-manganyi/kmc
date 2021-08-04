import {
  getAllOrbits,
  getAllVehicles,
  getAllWeatherDetails,
} from "../Bootstrap";
import Orbit from "../models/Orbit";
import TraverseDetails from "../models/TraverseDetails";
import Vehicle from "../models/Vehicle";
import Weather from "../models/Weather";

export const getAvailableOrbits = (src: string, dest: string): Orbit[][] => {
  let orbits = getAllOrbits();
  let result: Orbit[][] = [];

  orbits.filter((orbit: Orbit) => {
    if (
      orbit.Source.toLowerCase() === src.toLowerCase() &&
      orbit.Destination.toLowerCase() === dest.toLowerCase()
    ) {
      result.push([orbit]);
    }
  });

  return result;
};

export const getSuitableVehicles = (vehicles: string[]) => {
  return getAllVehicles().filter((vehicle: Vehicle) =>
    vehicles.includes(vehicle.Name)
  );
};

const calculateOptimizedTraverseTime = (
  weather: Weather,
  vehicle: Vehicle,
  orbts: Orbit[]
): number => {
  let distance = 0;
  let craters = 0;
  let minSpeed = 0;
  let temp: number[] = [];
  orbts.forEach((o: Orbit) => {
    distance += o.Distance;
  });

  orbts.forEach((o: Orbit) => {
    craters += o.NumberOfCraters;
  });

  orbts.forEach((o: Orbit) => {
    temp.push(o.VelocityLimit.Speed);
  });

  minSpeed = Math.min(...temp);

  const vehicleMaxSpeed = vehicle.Velocity.Speed;

  const normalMax = minSpeed > vehicleMaxSpeed ? vehicleMaxSpeed : minSpeed;

  const calCraters = Math.round(
    (craters * (100 + weather.CraterChangeRate)) / 100.0
  );

  return (60 * distance) / normalMax + calCraters * vehicle.TimeToCrossCrater;
};

const getTraverseDetails = (
  weather: Weather,
  vehicles: Vehicle[],
  orbts: Orbit[][]
): TraverseDetails[] => {
  let traverseDetails: TraverseDetails[] = [];

  vehicles.forEach((vehicle: Vehicle) =>
    orbts.forEach((orb: Orbit[]) => {
      let time = calculateOptimizedTraverseTime(weather, vehicle, orb);

      traverseDetails.push(new TraverseDetails(time, orb, vehicle));
    })
  );

  return traverseDetails;
};

const findOptimumTraverseDetail = (
  travesDetails: TraverseDetails[]
): TraverseDetails | null => {
  let optimumTraverseDetail: TraverseDetails | null = null;
  let minimumTime = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < travesDetails.length; i++) {
    let traverseTime = travesDetails[i].TraverseTime;
    if (traverseTime < minimumTime) {
      minimumTime = traverseTime;

      optimumTraverseDetail = travesDetails[i];
    }
  }
  return optimumTraverseDetail;
};

export const fomartOutPut = (
  optimumTraverseDetail: TraverseDetails | null
): void => {
  optimumTraverseDetail &&
    console.log(
      `Vehicle ${optimumTraverseDetail.Vehicle.Name} on ${optimumTraverseDetail.Orbits[0].OrbitName}`
    );
};

export const getWeather = (weatherType: string): Weather => {
  return getAllWeatherDetails().filter(
    (weather: Weather) => weatherType === weather.WeatherType
  )[0];
};

export const calculateOptimumTime = (
  weather: string,
  availableOrbits: Orbit[][],
  speedLimitMap: Map<string, number>
): TraverseDetails | null => {
  const weathers: Weather = getWeather(weather);

  let vehicles = getSuitableVehicles(weathers.SuitableVehicleNames);

  availableOrbits.forEach((orbitSeq: Orbit[]) =>
    orbitSeq.forEach((obrt: Orbit) => {
      obrt.VelocityLimit.Speed = speedLimitMap.get(obrt.OrbitName)!;
    })
  );

  let traverseDetails = getTraverseDetails(weathers, vehicles, availableOrbits);

  let optimumTraverseDetail = findOptimumTraverseDetail(traverseDetails);

  return optimumTraverseDetail;
};
