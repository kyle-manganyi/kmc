import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import TraverseDetails from "../src/models/TraverseDetails";
import Weather from "../src/models/Weather";
import {
  calculateOptimumTime,
  getWeather,
  getAvailableOrbits,
  getSuitableVehicles,
} from "../src/utils/PathFinder";

_chai.should();

@suite
class UtilsTest {
  private weather: string = "SUNNY";
  private source = "Silk Drob";
  private destination = "Hallitharam";

  @test
  shouldNotBeNull() {
    getAvailableOrbits(this.source, this.destination).should.be.not.null;
  }

  @test
  shouldNotBeUndefined() {
    getWeather("RAINY").should.be.not.undefined;
  }

  @test
  shouldReturnATwoDArray() {
    const availableOrbits = getAvailableOrbits(this.source, this.destination);
    availableOrbits.should.be.a("array");
  }

  @test
  shouldReturnTraverseDetails() {
    const availableOrbits = getAvailableOrbits(this.source, this.destination);
    const orbits = new Map<string, number>();
    orbits.set("Orbit1", 11);
    orbits.set("Orbit12", 11);

    calculateOptimumTime("WINDY", availableOrbits, orbits).should.be.instanceOf(
      TraverseDetails
    );
  }

  @test
  shouldReturnNull() {
    const availableOrbits = getAvailableOrbits(this.source, this.destination);
    const orbits = new Map<string, number>();
    orbits.set("Orbit1", 14);
    orbits.set("Orbit12", 20);

    calculateOptimumTime("WINDY", availableOrbits, orbits).should.have.all.keys(
      "orbits",
      "traverseTime",
      "vehicle"
    );
  }

  @test
  shouldReturnTypeOfWeather() {
    getWeather("WINDY").should.be.instanceOf(Weather);
  }
}
