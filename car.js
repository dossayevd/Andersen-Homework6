class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption,
    currentFuelVolume,
    isStarted,
    mileage
  ) {
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;
    this.#fuelConsumption = fuelConsumption;
    this.#currentFuelVolume = currentFuelVolume;
    this.#isStarted = isStarted;
    this.#mileage = mileage;
  }

  start() {
    if (this.#isStarted === true) throw new Error('Машина уже заведена');
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (this.#isStarted === false) throw new Error('Машина ещё не заведена');
    this.#isStarted = false;
  }

  fillUpGasTank(litres) {
    if (typeof litres !== 'number' || litres <= 0)
      throw new Error('Неверное количество топлива для заправки');
    else if (this.#currentFuelVolume + litres > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    } else this.#currentFuelVolume += litres;
  }

  drive(speed, hours) {
    if (typeof speed !== 'number' || speed <= 0)
      throw new Error('Неверная скорость');
    else if (typeof hours !== 'number' || hours <= 0)
      throw new Error('Неверное количество часов');
    else if (speed > this.#maxSpeed)
      throw new Error('Машина не может ехать так быстро');
    else if (this.#isStarted === false)
      throw new Error('Машина должна быть заведена, чтобы ехать');
    else if (
      this.#currentFuelVolume <
      (this.#fuelConsumption * hours * speed) / 100
    )
      throw new Error('Недостаточно топлива');
    else {
      (this.#mileage += hours * speed),
        (this.#currentFuelVolume -=
          (this.#fuelConsumption * hours * speed) / 100);
    }
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (value.length < 1 || value.length > 50)
      throw new Error('Несуществующее название бренда!');

    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (value.length < 1 || value.length > 50)
      throw new Error('Несуществующее название модели!');
    this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (value > new Date().getFullYear() || value < 1900)
      throw new Error('Некорректный год выпуска автомобиля!');
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (value < 100 || value > 300)
      throw new Error('Некорректная максимальная скорость автомобиля!');
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (value < 5 || value > 20)
      throw new Error('Некорректный максимальный объем бензобака!');
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (typeof value !== 'number')
      throw new Error('Некорректный расход бензина!');
    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }
}

// let car = new Car('Toyota', 'Camry', 2012, 220, 20, 5, 0, false, 0);

// car.brand = 'Hyundai';
// car.model = 'Kona';
// car.yearOfManufacturing = 2020;
// car.maxSpeed = 260;
// car.maxFuelVolume = 18;
// car.fuelConsumption = 3;

// car.start();
// car.shutDownEngine();
// car.start();
// car.fillUpGasTank(18);
// car.drive(100, 3);

// console.log(car);
