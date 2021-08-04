import {
  calculateOptimumTime,
  fomartOutPut,
  getAvailableOrbits,
} from "./utils/PathFinder";

import readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const source = "Silk Drob";
const destination = "Hallitharam";
let weather = "";

const availableOrbits = getAvailableOrbits(source, destination);

const speedLimitMap = new Map<string, number>();

const getWeather = () => {
  rl.question(
    `Enter Weather in Hallitharam: options [Sunny, Rainy, Windy]\n`,
    (option: string) => {
      const regex = new RegExp("(SUNNY)|(RAINY)|(WINDY)", "i");
      if (regex.test(option)) {
        weather = option.toLocaleUpperCase();
        getTraffic();
      } else {
        console.log(`${option} does not match any option\n`);
        getWeather();
      }
    }
  );
};

const getTraffic = () => {
  rl.question(`Orbit1 traffic speed : `, (ob1: string) => {
    speedLimitMap.set("Orbit1", Number(ob1));
    rl.question(`Orbit2 traffic speed : `, (ob2: string) => {
      speedLimitMap.set("Orbit2", Number(ob2));
      if (isNaN(Number(ob1)) || isNaN(Number(ob2))) {
        console.log("incorrect number formatting \n");
        return getTraffic();
      }
      fomartOutPut(
        calculateOptimumTime(weather, availableOrbits, speedLimitMap)
      );

      console.log("\n\n Program exiting\n");
      process.exit();
    });
  });
};

getWeather();
