/* eslint-disable */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

/* Graham S. Paul  - 100-evcar.js */
  cloneCar() {
    return new Car();
  }
}
