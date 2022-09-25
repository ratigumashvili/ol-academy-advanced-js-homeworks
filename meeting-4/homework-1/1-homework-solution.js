const vechile = {
  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  },
  addOwner(owner) {
    this.owners.push(owner);
  },
  removeOwner(owner) {
    return this.owners.shift(owner);
  },
  getOwnersCount() {
    return this.owners.length;
  },
  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName());
  },
  getFullInfo() {
    return `${this.make} ${this.model} from ${
      this.year
    }. ${this.getOwnersCount()} person owns this car. These are - ${this.owners
      ?.map((owner) => `${owner.fullName()}`)
      .join(", ")}.`;
  },
};

function createCar(make, model, year) {
  let carObj = Object.create(vechile);
  carObj.make = make;
  carObj.model = model;
  carObj.year = year;
  carObj.owners = [];

  return carObj;
}

const person = {
  fullName() {
    return `${this.name} ${this.surname}`;
  },
  countCars() {
    return this.cars.length;
  },
  buysCar(car) {
    this.cars.push(car);
    car.addOwner(this);
  },
  sellsCar(car) {
    this.cars = this.cars.filter((carElement) => carElement !== car);
    car.removeOwner(this);
  },
  getAllCarsInfo() {
    return `${this.name} owns this cars: ${this.cars
      ?.map((item) => `${item.getCarInfo()}`)
      .join(", ")}.`;
  },
};

function createPerson(name, surname, age, gender, cars = []) {
  let personObj = Object.create(person);
  personObj.name = name;
  personObj.surname = surname;
  personObj.age = age;
  personObj.gender = gender;
  personObj.cars = cars;

  return personObj;
}

let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
let ilona = createPerson("Elon", "Musk", 30, "M");
let duti_picoti = createCar("BMW", "525", "1999");
let stodevianosto = createCar("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti);
daniel916.buysCar(stodevianosto);
daniel916.sellsCar(duti_picoti);
ilona.buysCar(stodevianosto);
ilona.buysCar(duti_picoti);

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
